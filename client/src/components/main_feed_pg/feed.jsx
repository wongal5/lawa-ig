import React from 'react';
import { Container, Image, Feed, Icon, Segment, Divider, Button } from 'semantic-ui-react';
import FeedGrid from './feed_grid.jsx';

const OneFeed = (props) => (
	<div className="ui card">
	  <div className="content">
	    <div className="right floated meta">14h</div>
	    <img className="ui avatar image" src="./assets/fred.png"/>Fred
	  </div>
	  <div className="image">
	    <img src={props.photo}/>
	  </div>
	  <div className="content">
	    <span className="right floated">
	      <i className="heart outline like icon"></i>
	      17 likes
	    </span>
	    <i className="comment icon"></i>
	    3 comments
	  </div>
	  <div className="extra content">
	    <div className="ui large transparent left icon input">
	      <i className="heart outline icon"></i>
	      <input type="text" placeholder="Add Comment..."></input>
	    </div>
	  </div>
	</div>
);

export default OneFeed;

