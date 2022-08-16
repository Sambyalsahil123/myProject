import React from "react"
import android from "../src/images/android.jpg" 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Component";
const Home = () => {
    return (
        <>
            <Common name="Grow your business with"
                imgsrc={android}
                visit="/service"
                btnname="Get Started" />

        </>);
};
export default Home;