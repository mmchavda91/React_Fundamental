
import  propTypes from 'prop-types';

function Productcard({ productName , price}) {
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
      <h2>{productName}</h2>
      <p>Price: ₹{price}</p>
    </div>
  );
}

// Productcard.propTypes = {
//   productName: PropTypes.string,
//   price: PropTypes.string,
// };

export default Productcard

