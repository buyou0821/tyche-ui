import React from 'react';
import { mount } from 'enzyme';
import Modal from '..';

describe('Modal', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Modal title="Basic Modal" visible>
        <div>Some contents...</div>
      </Modal>,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('render without footer', () => {
    const wrapper = mount(<Modal visible footer={null} />);
    expect(wrapper.find('.ty-modal__footer').length).toBeFalsy();
  });

  it('onCancel should be called', () => {
    const handleCancel = jest.fn();
    const wrapper = mount(<Modal title="Basic Modal" visible onCancel={handleCancel}></Modal>);
    wrapper
      .find('.ty-modal__close')
      .at(0)
      .simulate('click');
    expect(handleCancel).toBeCalledTimes(1);
    wrapper
      .find('.ty-btn__text--default')
      .at(0)
      .simulate('click');
    expect(handleCancel).toBeCalledTimes(2);
  });

  it('onOk should be called', () => {
    const handleOk = jest.fn();
    const wrapper = mount(<Modal visible onOk={handleOk}></Modal>);
    wrapper
      .find('.ty-btn__text--primary')
      .at(0)
      .simulate('click');
    expect(handleOk).toHaveBeenCalled();
  });
});
