import React from "react";


function navBar() {
    return (
        <div class="navbar-fixed">
            <nav class="black" role="navigation">
                <div class="nav-wrapper"><a id="logo-container" href="#" class="brand-logo logo">Zeliha Gencel</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#follow">Follow</a></li>
                    </ul>

                    <ul id="nav-mobile" class="sidenav">
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Portfolio</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#follow">Follow</a></li>
                    </ul>
                    <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>


            </nav>
        </div>)
}

export default navBar