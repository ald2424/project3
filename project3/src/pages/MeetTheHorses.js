import React from "react";
import "../App.css"
// import moses from "../assets/images/Moses.jpg"
// import shadrach from "../assets/images/Shadrach.jpg"
// import jabez from "../assets/images/Jabez.jpg"
// import naomi from "../assets/images/Naomi.jpg"
// import ruth from "../assets/images/Ruth.jpg"
// import mercy from "../assets/images/Mercy.jpg"
import HorseImages from "../components/horseImages";
import horse from "../utils/Horses";
function Horses(){
    return(
<div className="container">

        {horse.map(horse => (
            <HorseImages 
            name={horse.name}
            image={horse.image}
            />
        ))}
    {/* <div className="row">
        <div className="col-md-4">
             <div className="">
                 <img src={moses} alt="Lights"  height="300" width="300"/>
                 <div className="caption">
                    <p>Moses</p>
                 </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
             <img src={shadrach} alt="Lights"  height="300" width="300"/>
             <div className="caption">
                <p>Shadrach</p>
             </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
             <img src={jabez} alt="Lights"  height="300" width="300"/>
             <div className="caption">
                <p>Jabez</p>
             </div>
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4">
             <div className="">
                 <img src={naomi} alt="Lights"  height="300" width="300"/>
                 <div className="caption">
                    <p>Naomi</p>
                 </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
             <img src={ruth} alt="Lights"  height="300" width="300"/>
             <div className="caption">
                <p>Ruth</p>
             </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="">
             <img src={mercy} alt="Lights"  height="300" width="300"/>
             <div className="caption">
                <p>Mercy</p>
             </div>
            </div>
        </div>
    </div> */}
</div>

)
}
export default Horses;