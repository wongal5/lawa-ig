import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import PicModal from './modal.jsx';
import GridRow from './GridRow.jsx';

const PictureGrid = (props) => (
  <div className="grid-container">

    <Grid centered relaxed columns={3}>
      <GridRow />
      <GridRow />
      <GridRow />
    </Grid>

  </div>
    
);
  
export default PictureGrid;