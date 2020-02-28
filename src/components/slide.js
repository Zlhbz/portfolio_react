import React from "react"


function Slide(props) {
    return (
        <div>
            <li>
                <img src={props.img} alt={props.alt} />
                <div className="caption center-align">
                    <h3>{props.name}</h3>
                    <h5 className="light grey-text text-lighten-3"></h5>
                </div>
            </li>
        </div>
    );
}
export default Slide