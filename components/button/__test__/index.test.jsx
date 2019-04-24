import React, { useState } from 'react';
import Button from '..';
import { render, mount } from 'enzyme';

describe('Button', () => {
  it('render correctly', () => {
    const wrapper = render(<Button>Follow</Button>);
    expect(wrapper).toMatchSnapshot();

    // size
    const wrapper1 = render(<Button size="small">Follow</Button>);
    expect(wrapper1).toMatchSnapshot();

    // shape
    const wrapper2 = render(<Button shape="circle">Follow</Button>);
    expect(wrapper2).toMatchSnapshot();

    // color
    const wrapper3 = render(<Button color="success">Follow</Button>);
    expect(wrapper3).toMatchSnapshot();
  });

  it('should support link button', () => {
    const wrapper = mount(
      <Button target="_blank" href="https://github.com/buyou0821/tyche-ui">
        link button
      </Button>,
    );
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should support ripple attribute', async () => {
    const wrapper = mount(<Button ripple={false}>button</Button>);
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('should support loading', () => {
    const LoadingButton = () => {
      const [loading, setLoading] = useState(false);
      const toggleLoading = () => {
        setLoading(!loading);
      };
      return (
        <Button onClick={toggleLoading} loading={loading}>
          button
        </Button>
      );
    };
    const wrapper = mount(<LoadingButton />);
    expect(wrapper.find('.ty-btn__loading').length).toBe(0);
    wrapper.simulate('click');
    expect(wrapper.find('.ty-btn__loading').length).toBe(1);
  });
});
