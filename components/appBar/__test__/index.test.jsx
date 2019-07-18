import React from 'react';
import { shallow, render } from 'enzyme';
import { defaultPrefixCls } from '../../context/ConfigContext';
import AppBar from '../index';
import Icon from '../../icon';
import Button from '../../button';

const prefixClx = `${defaultPrefixCls}-appbar`;

describe('AppBar', () => {
  it('should render correctly', () => {
    const { IconButton, Typography, ToolBar } = AppBar;
    const wrapper = render(
      <AppBar color="primary">
        <IconButton>
          <Icon style={{ fontSize: 22 }} type="list" />
        </IconButton>
        <Typography>Title</Typography>
        <ToolBar>
          <Button shape="text" style={{ height: '100%', color: '#fff', marginRight: '-16px' }}>
            Login
          </Button>
        </ToolBar>
      </AppBar>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should support color attribute', () => {
    const wrapper = shallow(<AppBar color="success" />);
    expect(wrapper.find(`.${prefixClx}--success`).length).toEqual(1);
  });
});
