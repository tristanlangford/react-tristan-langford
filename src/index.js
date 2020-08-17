import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css'
import App from './App';
import Footer from './components/footer/footer'
import Header from './components/header/header'
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <div className="page-container">
      <div className="content-wrap">
        <App />
        <Footer />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
