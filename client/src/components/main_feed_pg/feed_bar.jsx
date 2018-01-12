import React from 'react';
import { Container } from 'semantic-ui-react';

const FeedBar = (props) => (
  <div className="ui left aligned selection list">
    <div className="item">
      <img className="ui avatar image" src="./assets/fred.png"/>
      <div className="content">
        <div className="header">Fred</div>
      </div>
    </div>
  </div>
)

export default FeedBar