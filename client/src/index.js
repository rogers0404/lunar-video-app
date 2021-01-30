import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
import App from './App'
=======
import App from './App';
//import bgImage from './images/moon-background.jpg';
>>>>>>> feature/login-signup
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
