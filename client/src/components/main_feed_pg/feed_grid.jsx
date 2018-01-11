import React from 'react';
import { Grid } from 'semantic-ui-react';
import OneFeed from './feed.jsx';

const FeedGrid = (props) => (

  <div className="feed-grid-container">
    <Grid centered>
      {
        props.users.photos.map((photo, index) => {
            return <OneFeed photo={photo} key={index}/>;
        })
      }
    </Grid>
  </div>
    
);

export default FeedGrid;