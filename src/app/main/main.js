import React, {Component} from 'react';
import {Header} from './header';
import {Body} from './body';
import './main.css';
import {getListings} from '../api/data';

export class Main extends Component {
  componentWillMount() {
    getListings();
  }
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
