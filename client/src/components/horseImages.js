import React from 'react';

function Horses(props){

    return(
        <div className="container mx-auto">
           <div className="mx-auto text-center p-3">
             <div className="">
                 <img src={props.image} alt="Horse"  height="300" width="350"/>
                 <div className="caption">
                    <p>{props.name}</p>
                 </div>
            </div>
        </div> 
        </div>
    )
}

export default Horses;