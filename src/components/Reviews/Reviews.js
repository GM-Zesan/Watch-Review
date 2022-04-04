import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useReview from '../../hooks/useReview';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    
    return (
        <div className='container mt-5'>
            <div className="review-container row">
                {reviews.map((review) => (
                    <div className="review col-md-4">
                        <div>
                            <p>Image</p>
                        </div>
                        <div className="reviewer-info">
                            <h5>{review.name}</h5>
                            <p>
                                <small>{review.description}</small>
                            </p>
                            <p>
                                <small>
                                    <strong>Rating :</strong>
                                </small>
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol={
                                        <FontAwesomeIcon icon={faStar} />
                                    }
                                    fullSymbol={
                                        <FontAwesomeIcon
                                            style={{ color: "goldenrod" }}
                                            icon={faStar}
                                        />
                                    }
                                    fractions={2}
                                    readonly
                                />
                                <small>({review.rating})</small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;