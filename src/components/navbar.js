import React from "react";


function navBar() {
    return (
        <div className="navbar-fixed">
            <nav className="black" role="navigation">
                <div className="nav-wrapper"><a id="logo-container" href="#" className="brand-logo logo">Zeliha Gencel</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#follow">Follow</a></li>
                    </ul>

                    <ul id="nav-mobile" className="sidenav">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#follow">Follow</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </div>)
}

export default navBar