import PictureList from './PictureList.jsx';
import PopularDishList from './PopularDishList.jsx';
import style from './PopularDishStyle.css';
import Modal from './Modal.jsx';
// import App from './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    let generateRandomNum = (min, max)=> {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min) + min;
    };
    this.state = {
      popular_dishes: [],
      reviews: [],
      pictures: [],
      restaurant: generateRandomNum(1,15),
      currentImageIndex: 0,
      popDishId: "",
    }
    this.previousSlides = this.previousSlides.bind(this);
    this.nextSlides = this.nextSlides.bind(this);
    this.getPopDish = this.getPopDish.bind(this);
    this.getPopDishPictures = this.getPopDishPictures.bind(this);
  }

  // nextThreePix() {

  // }


  handleError(error) {
    console.log(error);
  };
  //invoke methods to get our datas back

  componentDidMount() {
    this.getPopDish();
    // this.getPopDishPictures();
  };

  getPopDish() {
    axios.get(`/${this.state.restaurant}/popular_dish`)
      .then((response) => {
        console.log('this is popular dish response=> ',response)
        this.setState({popular_dishes: response.data, restaurant: response.data[0].id_restaurants})
      })
      .catch(this.handleError)
  };

  getPopDishPictures() {
  axios.get(`/3/pictures`)
    .then((response) => {
      console.log('this is popular dish picture response=> ', response)
      this.setState({ pictures: response.data })
    })
    .catch(this.handleError)
  };

  previousSlides() {
    document.getElementById('pictureWrapper').scrollLeft -= 600;

  };


  nextSlides(){
    document.getElementById('pictureWrapper').scrollLeft += 600;
  };

  render() {
    return (
      <div>
        <br></br>
        <PopularDishList dishes={this.state.popular_dishes} back={this.previousSlides} next={this.nextSlides}/>
      </div>
    )
  }
}

export default App;