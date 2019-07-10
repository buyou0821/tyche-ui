import path from 'path';
const cwd = process.cwd();

export function getProjectPath(...filePath: string[]) {
  return path.join(cwd, ...filePath);
}
