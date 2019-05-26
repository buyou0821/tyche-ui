import React from 'react';
import Code from './Code';

const generatePage = ({ component, markdownList, dependencies }) => () => {
  const demos = markdownList.map(fileName => ({
    source: require(`../demo/${component}/${fileName}.md`),
    key: fileName,
  }));

  let propsDemo;
  try {
    propsDemo = require(`../demo/${component}/props.md`);
  } catch (error) {}

  return (
    <div className="demo-page">
      {demos.map(item => (
        <Code key={item.key} source={item.source} dependencies={dependencies} />
      ))}
      {propsDemo && (
        <div className="demo-markdown" dangerouslySetInnerHTML={{ __html: propsDemo }} />
      )}
    </div>
  );
};

export default generatePage;
