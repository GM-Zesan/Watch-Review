
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Review.css";
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
                        <strong>Rating :</strong>
                    </small>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={
                            <FontAwesomeIcon
                                style={{ color: "goldenrod" }}
                                icon={faStar}
                            />
                        }
                        fractions={2}
                        readonly
                    />
                    <small>({rating})</small>
                </p>
            </div>
        </div>
    );
};

export default Review;
