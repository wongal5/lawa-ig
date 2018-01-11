import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import FeedGrid from './feed_grid.jsx';
import FeedBar from './feed_bar.jsx';

const AllFeeds = (props) => (
	<div>
		<div className="feedBar">
			<FeedBar />
		</div>
		<div className="all-feeds">
			<FeedGrid users={props.data} />
		</div>
	</div>

    
);

export default AllFeeds;