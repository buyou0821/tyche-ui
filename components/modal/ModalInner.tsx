import React from 'react';
import { usePrefixCls } from '../_until/hooks';
import { Icon, Button } from '../index';

export interface ModalInnerProps {
  width?: string | number;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onCancel?: (e?: React.MouseEvent<any>) => void;
}

const ModalInnter: React.FunctionComponent<ModalInnerProps> = props => {
  const { width = 520, children, title, footer, onCancel } = props;
  const prefixCls = usePrefixCls('modal');
  const style = { width };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onCancel) {
      onCancel(e);
    }
  };

  // header
  let Header;
  if (title) {
    Header = (
      <div className={`${prefixCls}__header`}>
        <div className={`${prefixCls}__title`}>
          {title}
          <Button shape="icon" className={`${prefixCls}__close`} onClick={handleClose}>
            <Icon type="clear" />
          </Button>
        </div>
      </div>
    );
  }

  // footer
  let Footer;
  const defaultFooter = (
    <div className={`${prefixCls}__footer`}>
      <Button shape="text" onClick={handleClose}>
        取 消
      </Button>
      <Button shape="text" color="primary">
        确 定
      </Button>
    </div>
  );
  Footer = footer === undefined ? defaultFooter : footer;

  return (
    <div className={`${prefixCls}`} style={{ ...style }}>
      {Header}
      <div className={`${prefixCls}__body`}>{children}</div>
      {Footer}
    </div>
  );
};

export default ModalInnter;
