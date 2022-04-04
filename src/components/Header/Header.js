import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="custom-navbar">
            <div>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/blogs">Blogs</Link>
                </li>
            </div>
        </nav>
    );
};

export default Header;
