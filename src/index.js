import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserInfo} from './components/browser-info/BrowserInfo'
import {Students} from './components/students/students'
import {ProfileCard} from './components/profile-card/profileCard'
import {Login} from './components/login/login'


ReactDOM.render(
  <React.StrictMode>
    <BrowserInfo />
    <Students />
    <ProfileCard />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);


