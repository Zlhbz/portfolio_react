import React from "react"


function Project(props) {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image">
                    <img src={props.image} />
                    <span className="card-title">Code Quiz</span>
                </div>
                <div class="card-content">
                </div>
                <div className="card-action">
                    <a href={props.href}>Live Link</a>
                </div>
            </div>
        </div>
    );
}
export default Project