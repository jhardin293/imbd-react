import React from 'react';
import './nav.scss';

//images
import logo from './assets/Logo.svg';
import user from './assets/user.png';
import search from './assets/Search.svg';


export default class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-content">
          <div className="logo"><img src={logo} /></div>
          <div className="nav-list">
            <ul>
              <li>Box Office</li>
              <li>Media</li>
              <li>Society</li>
              <li>Ratings</li>
              <li>DVD & Blu-Ray</li>
            </ul>
          </div>
          <div className="right-corner">
            <img className="search" src={search} />
            <div className="user-group">
              <img className="user" src={user} />
              <div className="notification-bage">8</div> 
            </div> 
          </div>
        </div>
        
      </div>
    )
  }
}
