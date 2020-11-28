import React, { Component } from 'react';

/* Stateless Functional Components - Cannot use lifecycle hooks like Constructor, Mount and Unmount
because it is a function. Can only use lifecycle hooks in class components. */

const Navbar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Counter <span className="badge badge-pill badge-secondary">{props.totalCounters}</span></a>
        </nav>
    );
}

export default Navbar;
