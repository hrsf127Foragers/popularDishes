import React from 'react';

const PictureList = ({name, image}) => (

      <div className="mySlides">
        <img className="photo" src= {image} alt="FOOD1"></img>
        <br></br>
        <div className="dishName">{name}</div>
        <div className="photoReview">11 photos - 10 reviews</div>
      </div>
);

export default PictureList;