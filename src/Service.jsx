import React from "react"
import Sdata from "./Sdata";
import Card from "./Card";

const Service = () => {
    return (<>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
            <div className="row ">
                <div className="col-10 mx-auto">
                    <div className="row gy-5">
                        {
                            Sdata.map((elm,index) => {
                                return <Card key={index} imgsrc={elm.imgsrc}
                                    title={elm.title}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>


    </>);
};
export default Service;