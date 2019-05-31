import React from 'react';
import { Layout } from 'components/index';

const { Header, Content, Footer, Sider } = Layout;

export default () => {
  return (
    <div>
      {/* <p>1</p>
      <Layout>
        <Header>This is header</Header>
        <Content>This is Content</Content>
        <Footer>This is footer</Footer>
      </Layout> */}

      <p>2</p>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider
            width={300}
            breakpoint="md"
            onBreakpoint={broken => {
              console.log('@onBreakpoint', broken);
            }}
          >
            Sider
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      {/* <p>3</p>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Sider>Sider</Sider>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>

      <p>4</p>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout> */}
    </div>
  );
};
