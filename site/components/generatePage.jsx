import React from 'react';
import Code from './Code';

const generatePage = ({ component, markdownList, dependencies }) => {
  const page = () => {
    const demos = markdownList.map(item => ({
      source: require(`../demo/${component}/${item}.md`),
      key: item,
    }));

    return (
      <div className="demo-page">
        {demos.map(item => (
          <Code key={item.key} md={item.source} dependencies={dependencies} />
        ))}
      </div>
    );
  };

  return page;
};

export default generatePage;
