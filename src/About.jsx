import React from "react"
import imgAbout from "../src/images/imgAbout.png"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Component";
const About = () => {
    return (
        <>
            <Common name="Welcome to About page"
                imgsrc={imgAbout}
                visit="/contact"
                btnname="Contact Now" />

        </>);
};
export default About;