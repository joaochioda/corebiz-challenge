import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/templates/Home';
import 'antd/dist/antd.css';
import { Header } from '../src/components/organisms/Header';
import { Footer } from '../src/components/organisms/Footer';

import Theme from "./styles/theme";
ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <Header />
      <Home />
      <Footer />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
