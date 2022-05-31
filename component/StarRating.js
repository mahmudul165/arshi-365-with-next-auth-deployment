import React from "react";

import ReactStars from "react-rating-stars-component";

const StarRating = () => {
  const StarRating = {
    size: 15,
    count: 5,
    color: "black",
    activeColor: "goldenrod",
    value: 3.9,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };
  return <ReactStars {...StarRating} classNames="text-center" />;
};
export default StarRating;
