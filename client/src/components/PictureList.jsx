import React from 'react';

const PictureList = () => (
  <div className="picture-container">
  <div className="popdishText">

      <div className="popDish">Popular Dish</div>
      <div className="fullMenu">View Full Menu</div>

  </div>
    <div className="pictureWrapper">
      <div className="mySlides">
        <img className="photo" src= "https://loremflickr.com/320/240/meal" alt="FOOD1"></img>
        <br></br>
        <div className="dishName">Tacos</div>
        <div className="photoReview">11 photos - 103 reviews</div>
      </div>
      <br></br>
      <div className="mySlides">
        <img className="photo" src="https://loremflickr.com/320/240/meal" alt="FOOD1"></img>
        <div className="dishName">Burrito</div>
        <div className="photoReview">5 photos - 39 reviews</div>
      </div>
      <br></br>
      <div className="mySlides">
        <img className="photo" src="https://loremflickr.com/320/240/meal" alt="FOOD1"></img>
        <div className="dishName">Beef</div>
        <div className="photoReview">2 photos - 12 reviews</div>
      </div>
      <br></br>
      <div className="mySlides">
        <img className="photo" src="https://loremflickr.com/320/240/meal" alt="FOOD1"></img>
        <div className="dishName">carne asda</div>
        <div className="photoReview">11 photos - 3 reviews</div>
      </div>
      <br></br>
      {/* <a className="prev" onClick='plusSlides(-1)'>&#10094;</a>
      <a className="next" onClick='plusSlides(1)'>&#10095;</a> */}
    </div>
  </div>
);

export default PictureList;