import React from "react";
import "../App.css"
import Moses from "../assets/images/Moses.jpg"
import shadrach from "../assets/images/Shadrach.jpg"
import jabez from "../assets/images/Jabez.jpg"
import naomi from "../assets/images/Naomi.jpg"
import ruth from "../assets/images/Ruth.jpg"
import mercy from "../assets/images/Mercy.jpg"
import Esther from "../assets/images/Esther.jpg"
import Boaz from "../assets/images/Boaz.jpg"
import Lucas from "../assets/images/Lucas.jpg"
import Selah from "../assets/images/Selah.jpg"
import Slater from "../assets/images/Slater.jpg"
import Levi from "../assets/images/Levi.jpg"
import HorseImages from "../components/horseImages";
import horse from "../utils/Horses";
function Horses() {
    return (
        <div className="container">
            <h1 className="smFonts text-center pb-5">Meet the Horses</h1>
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="">
                        <img src={Moses} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Moses</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                        <img src={shadrach} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Shadrach</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="">
                        <img src={jabez} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Jabez</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="">
                        <img src={naomi} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Naomi</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <img src={ruth} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Ruth</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <img src={mercy} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Mercy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="">
                        <img src={Esther} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Esther</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <img src={Boaz} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Boaz</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <img src={Lucas} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Lucas</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="">
                        <img src={Selah} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Selah</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <img src={Levi} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Levi</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <img src={Slater} alt="Lights" height="300" width="300" />
                        <div className="caption">
                            <p>Slater</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Horses;

{/* <div className="container m-auto p-5">
    <h1 className="smFonts text-center">Meet the Horses</h1>

        {horse.map(horse => (
            <HorseImages 
            name={horse.name}
            image={horse.image}
            />
        ))} */}