import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, News } from './components'
import './App.css';

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes">
                    <Switch >
                        <Route exact path="/" >
                            <Homepage />
                        </Route>
                        <Route exact path="/cryptocurrencies" >
                            <Cryptocurrencies />
                        </Route>
                        <Route exact path="/news" >
                            <News />
                        </Route>
                    </Switch>
                </div>
            </Layout>
        
        <div className="footer" level={5} >
            <Typography.Title style={{ color: 'white', textAlign: 'center' }}>
                CryptoLand <br />
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/news">News</Link>
            </Space>
            </div>
        </div>
    </div>
  )
}

export default App