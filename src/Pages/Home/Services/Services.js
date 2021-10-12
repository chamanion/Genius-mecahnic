import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [mecanhics, setMecanhic]=useState([])
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>setMecanhic(data))
    }, [])
    return (
       <div>
           <h2 className="text-primary mt-5">Our Services</h2>
            <div className="service-container">
            {
                mecanhics.map(mecanhic=><Service
                mecanhic={mecanhic}
                key ={mecanhic.id}
                ></Service>)
            }
        </div>
       </div>
    );
};

export default Services;