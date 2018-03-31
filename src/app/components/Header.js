import React from "react";

export const Header = (props) => {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div children="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};