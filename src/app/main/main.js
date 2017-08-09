import React, {Component} from 'react';
import {Header} from './header';
import {Body} from './body';
import './main.css';

export class Main extends Component {
  render() {
    return (
      <div className="loginsignup-component">
        <Header/>
        <main>
          <Body/>
        </main>
      </div>
    );
  }
}
