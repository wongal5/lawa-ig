import React from 'react';
import { Container, Image, Feed, Icon, Segment, Divider, Button } from 'semantic-ui-react';
import FeedGrid from './feed_grid.jsx';

const OneFeed = (props) => (
<container className="each-feed">
	<container className="top-feed">
		<Feed>
		<Feed.Content>
			<Feed.Label image='./assets/fred.png' />
			<Feed.Summary>
				<a>Fred Z</a>
			</Feed.Summary>
		</Feed.Content>
		</Feed>
	</container>
		<Feed>
		    <Feed.Event>
		      <Feed.Label image='./assets/fred.png' />
		      <Feed.Content>
		        <Feed.Summary>
		          <a>Helen Troy</a>
		        </Feed.Summary>
		        <Image src={props.photo} size='big' centered />
		        <Feed.Date>4 days ago</Feed.Date>
		        <Feed.Meta>
		          <Feed.Like>
		            <Icon name='like' />
		            1 Like
		          </Feed.Like>
		        </Feed.Meta>
		      </Feed.Content>
		    </Feed.Event>
		</Feed>
</container>
);

export default OneFeed;