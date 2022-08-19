import React from "react"
import logo from "../src/images/logo.jpg"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Component";
const Home = () => {
    return (
        <>
            <Common name="Grow your business with"
                imgsrc={logo}
                visit="/service"
                btnname="Get Started" />

        </>);
};
export default Home;