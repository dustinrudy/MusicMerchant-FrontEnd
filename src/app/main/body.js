import React, {Component} from 'react';
import {Register} from './register';

export class Body extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="backgroundImage">
            <div className="tagline">The best solution to sell or trade local musician&apos;s gear</div>
          </div>
        </div>
        <div className="registration_container">
          <div className="about_container">
            <p className="about">Music Merchant offers a more centralized commercial experience focusing on your city.</p>
            <p className="about">Surround yourself with your local community to buy / sell / trade any of your personal gear.</p>
            <p className="about">Connect with other musicians and create!</p>
          </div>
          <Register/>
        </div>
      </div>
    );
  }
}
