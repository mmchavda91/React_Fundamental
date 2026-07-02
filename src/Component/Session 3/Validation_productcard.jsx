import React from 'react'
import PropTypes from 'prop-types';

function Validation_productcard(props) {
    return (
        <div
            style={{
                border: "2px solid black",
                padding: "15px",
                width: "250px",
                borderRadius: "10px",
                backgroundColor: "#f4f4f4",
                margin: "10px",
            }}
        >
            <h2>{props.productName}</h2>
            <p>Price: ₹{props.price}</p>
        </div>
    );
}

// Prop Type Validation
Validation_productcard.propTypes = {
    productName: PropTypes.string,
    price: PropTypes.number,
};


export default Validation_productcard