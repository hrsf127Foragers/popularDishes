import PictureList from './PictureList.jsx';
import PopularDishList from './PopularDishList.jsx';
// import ImageSlides from './ImageSlides.jsx';
import ReviewsList from './ReviewsList.jsx';
import Module from './Module.jsx';
import Arrow from './Arrow.jsx';
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
      currentImageIndex: 0
    }
    // this.previousSlide = this.previousSlide.bind(this);
    // this.nextSlide = this.nextSlide.bind(this);

  }

  // previousSlide() {
  //   const lastIdx = imgUrl.length-1;
  //   const {currentImageIndex} = this.state;
  //   const shouldResetIdx = currentImageIndex === 0;
  //   const idx = shouldResetIdx ? lastIdx: currentImageIndex-1;
  //   this.setState({
  //     currentImageIndex: idx
  //   });
  // }

  // nextSlide(){
  // const lastIdx = imgUrl.length - 1;
  // const { currentImageIndex } = this.state;
  // const shouldResetIdx = currentImageIndex === lastIdx;
  // const idx = shouldResetIdx ? 0: currentImageIndex + 1;
  // this.setState({
  //   currentImageIndex: idx
  // });
  // }

  render() {
    return (
      <div>
        {/* <h3>Popular Dishes</h3>
        <h5> View Full Menu </h5> */}
        {/* <div className="carousel">
          <Arrow
            direction="left"
            clickFunction={this.previousSlide}
            glyph="&#9664;" />

          <Arrow
            direction="right"
            clickFunction={this.nextSlide}
            glyph="&#9654;" />
          <ImageSlides url={imgUrl} />
          {/* <PictureList /> */}

        {/* </div> */}
        <br></br>
          <PictureList />
        <PopularDishList/>
        <ReviewsList/>
      </div>
    )
  }
}

export default App;