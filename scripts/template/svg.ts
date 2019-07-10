import fs from 'fs';
import SVGO from 'svgo';
import { getProjectPath } from '../utils/projectHelper';

const dirList = ['components', 'icon'];
const dirPath = getProjectPath(...dirList, 'svgs');
const svgo = new SVGO({
  plugins: [
    {
      removeStyleElement: true,
    },
    {
      removeXMLNS: true,
    },
    {
      cleanupAttrs: true,
    },
    {
      removeDoctype: true,
    },
    {
      removeXMLProcInst: true,
    },
    {
      removeComments: true,
    },
    {
      removeMetadata: true,
    },
    {
      removeTitle: true,
    },
    {
      removeDesc: true,
    },
    {
      removeUselessDefs: true,
    },
    {
      removeEditorsNSData: true,
    },
    {
      removeEmptyAttrs: true,
    },
    {
      removeHiddenElems: true,
    },
    {
      removeEmptyText: true,
    },
    {
      removeEmptyContainers: true,
    },
    {
      removeViewBox: false,
    },
    {
      cleanupEnableBackground: true,
    },
    {
      convertStyleToAttrs: true,
    },
    {
      convertColors: true,
    },
    {
      convertPathData: true,
    },
    {
      convertTransform: true,
    },
    {
      removeUnknownsAndDefaults: true,
    },
    {
      removeNonInheritableGroupAttrs: true,
    },
    {
      removeUselessStrokeAndFill: true,
    },
    {
      removeUnusedNS: true,
    },
    {
      cleanupIDs: true,
    },
    {
      cleanupNumericValues: true,
    },
    {
      moveElemsAttrsToGroup: true,
    },
    {
      moveGroupAttrsToElems: true,
    },
    {
      collapseGroups: true,
    },
    {
      removeRasterImages: false,
    },
    {
      mergePaths: true,
    },
    {
      convertShapeToPath: true,
    },
    {
      sortAttrs: true,
    },
    {
      removeDimensions: true,
    },
    {
      removeAttrs: { attrs: '(stroke|fill)' },
    },
  ],
});

const svgList: string[] = fs.readdirSync(dirPath);
let svgsStr = 'const svgs={';

async function handleSvg(data: string, filePath: string, fileName: string): Promise<void> {
  const result = await svgo.optimize(data, { path: filePath });
  svgsStr += `'${fileName.split('.')[0]}':'${result.data}',`;
}

function writeSvgsFile(objStr: string): void {
  fs.writeFileSync(getProjectPath(...dirList, 'svgs.tsx'), objStr, 'utf8');
}

Promise.all(
  svgList.map(async fileName => {
    if (fileName.split('.')[1] !== 'svg') {
      return Promise.resolve();
    }
    try {
      const filePath: string = getProjectPath(...dirList, 'svgs', fileName);
      let data: Buffer = fs.readFileSync(filePath);
      if (data[0] === 0xef && data[1] === 0xbb && data[2] === 0xbf) {
        data = data.slice(3);
      }
      return await handleSvg(data.toString('utf8'), filePath, fileName);
    } catch (e) {
      // tslint:disable-next-line:no-console
      console.log('error: ', e);
    }
  }),
).then(() => {
  svgsStr += '};export default svgs;';
  writeSvgsFile(svgsStr);
});
