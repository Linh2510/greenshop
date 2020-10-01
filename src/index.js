import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import * as serviceWorker from './serviceWorker';
import Home from './component/page/home'
import Login from './component/page/Login';
import Register from './component/page/Register';
import Contact from './component/page/Contact';
import Cart from './component/page/Cart';
import ProductList from './component/ListProduct/Index';
import Blog from './component/page/Blog';
import BlogDetail from './component/page/BlogDetail'
ReactDOM.render(
  
  <div>
    <Provider store={store}>
    <Router>
      <App >
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/contact' component={Contact} />
        <Route path='/cart' component={Cart} />
        <Route path='/listproduct' component={ProductList} />
        <Route path='/blog' component={Blog} />
        <Route path='/blogdetail' component={BlogDetail} />
        </Switch>
      </App>
    </Router>
    </Provider>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
