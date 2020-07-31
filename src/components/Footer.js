import React from 'react';

export default function Footer() {
    return (
        <nav className="navbar d-flex justify-content-center navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav d-flex  ">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>

        </nav>
    )
}