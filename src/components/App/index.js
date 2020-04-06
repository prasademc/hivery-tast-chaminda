import React, { Component } from 'react';
import { Layout } from 'antd';
import TopBar from '../TopBar';
import BottomBar from '../BottomBar';
import HeaderBar from '../HeaderBar';
import Products from '../../containers/Products';
const { Header, Footer, Content } = Layout;

class App extends Component{
  render() {
    return (
      <Layout style={{backgroundColor: '#ffffff'}}>
        <Header style={{backgroundColor: '#ffffff', borderBottom: '2px solid #f2f2f2'}}>Change Flavour</Header>
        <Content style={{ backgroundColor: '#ffffff' }}>
          <TopBar />
          <HeaderBar />
          <Products />
          <BottomBar />
        </Content>
        <Footer style={{backgroundColor: '#ffffff', borderTop: '2px solid #f2f2f2'}}>Copyright ©2020 Change Flavour</Footer>
      </Layout>
    )
  }
}

export default App;
