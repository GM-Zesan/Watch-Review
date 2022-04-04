import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    
    return (
        <div className="container mt-5">
            <div className="review-container row">
                {reviews.map((review) => (
                    <Review key={review.id} review={review}></Review>
                ))}
            </div>
        </div>
    );
};

export default Reviews;