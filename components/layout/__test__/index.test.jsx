import React from 'react';
import { mount } from 'enzyme';
import Layout from '..';

const { Content, Sider } = Layout;

describe('Layout', () => {
  it('detect the sider as children', () => {
    const wrapper = mount(
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>,
    );
    expect(wrapper.find('.ty-layout').hasClass('ty-layout--hasSider')).toBe(true);
  });

  it('detect the sider inside the children', () => {
    const wrapper = mount(
      <Layout>
        <div>
          <Sider>Sider</Sider>
        </div>
        <Content>Content</Content>
      </Layout>,
    );
    expect(wrapper.find('.ty-layout').hasClass('ty-layout--hasSider')).toBe(true);
  });

  it('should have 50% width of sidebar', async () => {
    const wrapper = mount(
      <Layout>
        <div>
          <Sider width="50%">Sider</Sider>
        </div>
        <Content>Content</Content>
      </Layout>,
    );
    expect(
      wrapper
        .find('.ty-layout__sider')
        .at(0)
        .prop('style').width,
    ).toBe('50%');
  });
});
