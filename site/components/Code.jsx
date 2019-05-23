import React, { useState } from 'react';
import CodeView from '../react-code-view/lib/index';
import { Button } from 'components/index';
import { DOMAPI } from '../until';

import '../react-code-view/lib/style/index.scss';

const Code = props => {
  const { md, ...rest } = props;

  const toggleCode = e => {
    const codeEle = e.currentTarget.parentNode.nextSibling;
    if (DOMAPI.hasClass(codeEle, 'md-show')) {
      DOMAPI.removeClass(codeEle, 'md-show');
    } else {
      DOMAPI.addClass(codeEle, 'md-show');
    }
  };

  return (
    <CodeView
      theme="dracula"
      renderToolbar={() => <Button onClick={toggleCode}>close</Button>}
      {...rest}
    >
      {md}
    </CodeView>
  );
};

export default Code;
