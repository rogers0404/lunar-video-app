import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VideoApp from './components/VideoApp/VideoApp';
import BrowserUnsupported from './components/BrowserUnsupported/BrowserUnsupported';
import DailyIframe from '@daily-co/daily-js';

ReactDOM.render(
  DailyIframe.supportedBrowser().supported ? <VideoApp /> : <BrowserUnsupported />,
  document.getElementById('root')
);
