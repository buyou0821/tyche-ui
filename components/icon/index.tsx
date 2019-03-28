import React from 'react';
import classNames from 'classnames';

interface IconProps {
  name?: string;
  className?: string;
}

interface IconComponent<p> extends React.FunctionComponent<p> {}

const Icon: IconComponent<IconProps> = props => {
  const { className } = props;
  const classString = classNames(
    {
      [`muiicon`]: true,
    },
    className,
  );

  return <i className={classString}>{props.name}</i>;
};

export default Icon;
