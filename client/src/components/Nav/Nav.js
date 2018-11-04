import React from "react";
import "./navStyle.css";


const Nav = () =>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">New York Times Saver</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nytNavbar"
                aria-controls="nytNavbarControls" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nytNavbar">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/">Search</a>
                <a className="nav-item nav-link" href="/saved">Saved</a>
            </div>
        </div>
    </nav>;

export default Nav;