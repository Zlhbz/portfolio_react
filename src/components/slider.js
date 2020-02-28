import React from "react"
import Slide from "./slide"
import photo1 from '../img/image.jpg'
import photo2 from '../img/image2.jpg'


function Slider() {

    return (
        <div>
            <section className="slider">
                <ul className="slides">
                    <Slide name="Zeliha Gencel" img={photo1} alt="clouds" />
                    <Slide name="Student at Northwestern University Bootcamp" img={photo2} alt="clouds" />
                </ul>
            </section>
        </div>)

}
export default Slider