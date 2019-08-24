// sidebar.js

import React from 'react';
import { elastic as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Profile
      </a>

      <a className="menu-item" href="/blog">
        Blog
      </a>

      <a className="menu-item" href="/misc">
        misc
      </a>

      <a className="menu-item" href="/record">
        Record
      </a>

      <a className="menu-item" href="/reminder">
        Reminder
      </a>

      <a className="menu-item" href="/socialpresence">
        Social Presence
      </a>

      <a className="menu-item" href="/symptomtracker">
          Symptom Tracker      </a>
    </Menu>
  );
};