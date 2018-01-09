import React from 'react';
import ReactDOM from 'react-dom';
import ComponentOne from './components/component1.jsx';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React is Live</h1>
        <ComponentOne />
      </div>
    )
  }
}
 
ReactDOM.render(<App/>, document.getElementById('app'));