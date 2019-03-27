import React from 'react';

interface IconProps {
  name?: string;
}

interface IconComponent<p> extends React.FunctionComponent<p> {}

const Icon: IconComponent<IconProps> = props => {
  return <div>{props.name}</div>;
};

export default Icon;
