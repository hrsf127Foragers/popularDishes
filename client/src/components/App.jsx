import PictureList from './PictureList.jsx';
import PopularDishList from './PopularDishList.jsx';
import ReviewsList from './ReviewsList.jsx';
import Module from './Module.jsx';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popular_dishes: [],
      reviews: [],
      pictures: [],
      restaurant: '',
    }
  }



  render() {
    return (
      <div>
        Hello from APP
        <PictureList/>
        <PopularDishList/>
        <ReviewsList/>
      </div>
    )
  }
}

export default App;