import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
//import VideoApp from './components/VideoApp/VideoApp';
//import BrowserUnsupported from './components/BrowserUnsupported/BrowserUnsupported';
//import DailyIframe from '@daily-co/daily-js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //DailyIframe.supportedBrowser().supported ? <VideoApp /> : <BrowserUnsupported />,
  document.getElementById('root')
);
