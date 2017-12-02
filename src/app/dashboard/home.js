import React, {Component} from 'react';
import {Link} from 'react-router';

export class Dash extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        La de Da
        <Link to="/logout"><button>LET ME OUTTA HERE!</button></Link>
      </div>
    );
  }
}
