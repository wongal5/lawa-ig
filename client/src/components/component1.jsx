import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const ComponentOne = () => (
  <Grid columns={3} divided>
    <Grid.Row>
      <Grid.Column>
        <Image src='../assets/cube.' />
      </Grid.Column>
      <Grid.Column>
        <Image src='../assets/cube.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='../assets/cube.jpg' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>
        <Image src='../assets/cube.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='../assets/cube.jpg' />
      </Grid.Column>
      <Grid.Column>
        <Image src='../assets/cube.jpg' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default ComponentOne;