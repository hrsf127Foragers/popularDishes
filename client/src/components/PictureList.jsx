import React from 'react';
import styles from './PictureListStyle.css'

const PictureList = ({name, image}) => (

      <div className={styles.mySlides}>
        <img className={styles.photo} src= {image} alt="FOOD1"></img>
        <br></br>
        <div className={styles.dishName}>{name}</div>
        <div className={styles.photoReview}>11 photos - 10 reviews</div>
      </div>
);

export default PictureList;