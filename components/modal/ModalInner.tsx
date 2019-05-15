import React from 'react';
import { usePrefixCls } from '../_until/hooks';
import { Icon, Button } from '../index';

export interface ModalProps {
  width?: string | number;
  title?: React.ReactNode;
}

const ModalInnter: React.FunctionComponent<ModalProps> = props => {
  const { width = 520, children } = props;
  const prefixCls = usePrefixCls('modal');
  const style = { width };

  const renderHeader = () => {
    const { title } = props;
    if (!title) {
      return null;
    }
    return (
      <div className={`${prefixCls}__header`}>
        <div className={`${prefixCls}__title`}>
          {title}
          <Button shape="icon" className={`${prefixCls}__close`}>
            <Icon type="clear" />
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className={`${prefixCls}`} style={{ ...style }}>
      {renderHeader()}
      {children}
    </div>
  );
};

export default ModalInnter;
