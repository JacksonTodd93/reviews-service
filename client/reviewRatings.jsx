import React from 'react';
import ReviewCategory from './reviewCategories.jsx';

const ReviewRatings = (props) => (
  <div className="review-categories" style={{
    display: 'flex',
    flexFlow: 'row wrap'
  }}>
    {Object.keys(props.reviews).map((category, index) => {
      return (<ReviewCategory
        category={category}
        rating={props.reviews[category]}
        key={index}
        evenOrOdd={index % 2 + 1}/>);
    })}
  </div>
);

export default ReviewRatings;