import React, { useState } from 'react';
import { Button, Portal } from 'components/index';

export default () => {
  const [PurePortalVisible, setPurePortalVisible] = useState(false);
  const [PortalVisible, setPortalVisible] = useState(false);
  return (
    <section>
      <div style={{ border: '1px solid #f66', width: 400 }} className="demo-portal-conent">
        这里是.demo-portal-conent的内容
      </div>
      {PurePortalVisible && (
        <Portal.PurePortal append selector=".demo-portal-conent">
          <p>这是 PurePortal 动态插入.demo-portal-conent的内容</p>
        </Portal.PurePortal>
      )}
      <Button
        style={{ marginTop: 20 }}
        onClick={() => setPurePortalVisible(!PurePortalVisible)}
        color="primary"
      >
        Toggle PurePortal
      </Button>
      <Portal
        onCancel={() => {
          setPortalVisible(false);
        }}
        visible={PortalVisible}
        append
        maskClosable
        closeOnClickOutside
        className="tttppp"
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
      >
        <p style={{ backgroundColor: '#fff' }}>这里是带mask的Portal动态插入body的内容</p>
      </Portal>
      <Button style={{ marginLeft: 20 }} onClick={() => setPortalVisible(true)} color="primary">
        show Portal
      </Button>
    </section>
  );
};
