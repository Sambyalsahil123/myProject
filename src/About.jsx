import React from "react"
import android from "../src/images/android.jpg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Component";
const About = () => {
    return (
        <>
            <Common name="Welcome to About page"
                imgsrc={android}
                visit="/contact"
                btnname="Contact Now" />

        </>);
};
export default About;