import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App = () => {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Service" element={<Service />} />
                <Route exact path="/Contact" element={<Contact />} />

            </Routes>
            <Footer />
        </>);
};
export default App;