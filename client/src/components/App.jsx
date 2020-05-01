
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: []
    }
  }



  render() {
    return (
      <div>
        Hello from APP
      </div>
    )
  }
}

export default App;