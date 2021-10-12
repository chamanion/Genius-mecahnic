import React from 'react';

const Service = (props) => {
    const {name,price, img, description, }= props.mecanhic
    return (
        <div>
          
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;