import React from 'react';
import PictureList from './PictureList.jsx';



const PopularDishList = ({dishes, next, back}) => {
  // console.log("this is from dishes =>",dishes);
  return (
  <div className="picture-container">
    <div className="popdishText">
      <div className="popDish">Popular Dish</div>
      <div className="fullMenu">View Full Menu </div>
    </div>
    <div id="pictureWrapper">
    {dishes.map((dish) => {
      // console.log(dish);
     return <PictureList name={dish.dish} image={dish.images}/>
    })}
    </div>
      <div className="carousel">
       {/* <button className="prevBtn"> < </button> */}
        <button id="slideL" onClick={back} type="button">
          <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
            </button>
        <button id="slideR" onClick={next}>
          <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </button>
      </div>
  </div>
  )
};

export default PopularDishList;