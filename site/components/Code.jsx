import React, { useState } from 'react';
import CodeView from '../react-code-view/lib/index';
import { Button, Icon } from 'components/index';
import { DOMAPI } from '../utils';

import '../react-code-view/lib/style/index.scss';

const Code = props => {
  const { source, ...rest } = props;
  const [visible, setVisible] = useState(false);

  const toggleCode = e => {
    const codeEle = e.currentTarget.parentNode.nextSibling;
    if (DOMAPI.hasClass(codeEle, 'md-show')) {
      DOMAPI.removeClass(codeEle, 'md-show');
    } else {
      DOMAPI.addClass(codeEle, 'md-show');
    }
    setVisible(!visible);
  };

  return (
    <CodeView
      theme="dracula"
      renderToolbar={() => (
        <Button shape="icon" onClick={toggleCode}>
          <Icon style={{ fontSize: 20 }} type={visible ? 'code-open' : 'code-close'} />
        </Button>
      )}
      {...rest}
    >
      {source}
    </CodeView>
  );
};

export default Code;
