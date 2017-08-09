import React, {Component} from 'react';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <div className="header">
            <div className="title">MusicMerchant</div>
            <button className="login_signup">Login</button>
            <button className="login_signup">Signup</button>
          </div>
        </div>
      </header>
    );
  }
}
