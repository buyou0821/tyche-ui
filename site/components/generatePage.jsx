import React from 'react';
import Code from './Code';

const generatePage = ({ component, markdownList, dependencies }) => () => {
  const demos = markdownList.map(fileName => ({
    source: require(`../demo/${component}/${fileName}.md`),
    key: fileName,
  }));

  return (
    <div className={`demo-page demo-${component}`}>
      {demos.map(item =>
        item.key.startsWith('_') ? (
          <div
            key={item.key}
            className="demo-markdown"
            dangerouslySetInnerHTML={{ __html: item.source }}
          />
        ) : (
          <Code
            key={item.key}
            className="demo-markdown"
            source={item.source}
            dependencies={dependencies}
          />
        ),
      )}
    </div>
  );
};

export default generatePage;
