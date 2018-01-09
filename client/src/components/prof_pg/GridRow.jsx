import React from 'react';
import PicModal from './modal.jsx';
import { Grid, Image } from 'semantic-ui-react';

const GridRow = (props) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <PicModal img={'http://cdn.newsapi.com.au/image/v1/cf1189b89fa9c40c5a2c9f4a8bdcbd60'} />
      </Grid.Column>
      <Grid.Column>
        <PicModal img={'http://cdn.newsapi.com.au/image/v1/cf1189b89fa9c40c5a2c9f4a8bdcbd60'} />
      </Grid.Column>
      <Grid.Column>
        <PicModal img={'http://cdn.newsapi.com.au/image/v1/cf1189b89fa9c40c5a2c9f4a8bdcbd60'} />
      </Grid.Column>
    </Grid.Row>
  );
};

export default GridRow;