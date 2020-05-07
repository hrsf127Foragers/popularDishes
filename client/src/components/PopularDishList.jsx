import React from 'react';
import PictureList from './PictureList.jsx';
import styles from './PopularDishStyle.css';


const PopularDishList = ({dishes, next, back}) => {
  // console.log("this is from dishes =>",dishes);
  return (
    <div className={styles.pictureContainer}>
      <div className={styles.popdishText}>
        <div className={styles.popDish}>Popular Dish</div>
        <div className={styles.fullMenu}>View Full Menu </div>
    </div>
      <div className={styles.pictureWrapper} id='pictureWrapper'>
    {dishes.map((dish) => {
      // console.log(dish);
     return <PictureList name={dish.dish} image={dish.images}/>
    })}
    </div>
      <div className="carousel">
        <button className={styles.slideL} id="slideL" onClick={back} type="button">
          <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
            </button>
        <button className={styles.slideR} id="slideR" onClick={next}>
          <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </button>
      </div>
  </div>
  )
};

export default PopularDishList;