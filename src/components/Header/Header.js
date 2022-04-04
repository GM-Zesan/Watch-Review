import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="custom-navbar">
            <div>
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/reviews"
                    >
                        Reviews
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/dashboard"
                    >
                        Dashboard
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/blogs"
                    >
                        Blogs
                    </NavLink>
                </li>
            </div>
        </nav>
    );
};

export default Header;
