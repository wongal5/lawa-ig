import React from 'react';
import { Grid } from 'semantic-ui-react';
import FeedGrid from './feed_grid.jsx';

const AllFeeds = (props) => (
	<div className="all-feeds">
		<FeedGrid users={props.data} />
	</div>
    
);

export default AllFeeds;