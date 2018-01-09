import React from 'react';
import ReactDOM from 'react-dom';
import PictureGrid from './components/PictureGrid.jsx';
 
//dummy photo data

const photos = [
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'},
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'},
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'},
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'},
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'},
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'},
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'},
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'},
  {url: 'https://media.alienwarearena.com/media/tux-r.jpg'}
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: photos
    };
  }
  render() {
    return (
      <div>
        <h1>React is Live</h1>
        <PictureGrid allPhotos={this.state.photos} />
      </div>
    );
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));