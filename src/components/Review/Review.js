import React from 'react';
import "./Review.css"
const Review = (props) => {
    const { name, description, rating } = props.review;
    return (
        <div className="review col-md-4">
            <div>
                <p>Image</p>
            </div>
            <div className="reviewer-info">
                <h5>{name}</h5>
                <p>
                    <small>{description}</small>
                </p>
                <p>
                    <small>
                        <strong>Rating :</strong> {rating}
                    </small>
                </p>
            </div>
        </div>
    );
};

export default Review;