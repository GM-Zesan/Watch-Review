import React, { useEffect, useState } from "react";
import "./Home.css";
import heroImg from "../../images/1.jpg";
import Review from "../Review/Review";
import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
const Home = () => {
    const [reviews, setReviews] = useReview();
    const [homeReviews, setHomeReviews] = useState([]);
    useEffect(() => {
        setHomeReviews(reviews.slice(0, 3));
    }, [reviews]);
    return (
        <div className="container">
            <div className="hero-section row mt-4">
                <div className="col-md-8">
                    <p>From,</p>
                    <h1>Watch Reviewer</h1>
                    <p>you can choose</p>
                    <h1>Your Best Watch</h1>
                    <p>
                        Watch blogs are a great way for someone with a love for
                        watches to share their passion with the world. Watch
                        bloggers interact with their favorite watch styles,
                        trends, and ideas of the timepiece world.
                    </p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={heroImg} alt="" />
                </div>
            </div>
            <div className="review-section my-5">
                <h2 className="mb-5">Customers Reviews</h2>
                <div className="review-container row">
                    {homeReviews.map((review) => (
                        <Review key={review.id} review={review}></Review>
                    ))}
                </div>
                <div className="review-btn py-4">
                    <Link to="/reviews">See All Reviews</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
