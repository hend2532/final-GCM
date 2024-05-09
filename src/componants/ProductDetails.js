import { useParams } from "react-router-dom";
import data from "../DataSet.json";
import "../css/Details.css";
function ProductDetails() {
  const { productId } = useParams();
  const product = data.find((item) => item.id === parseInt(productId));

  return (
    <div>
      {product && (
        <div className="details">
          <img src={product.image} alt={product.name} />
          <div className="details-section">
            <h2>{product.name}</h2>
            <br></br>
            <p>Category :<span> {product.category} </span></p>
            <p>Customer Price : <span> EGY {product.price.customer}:00</span></p>
            <p>Wholesale Price : <span> EGY {product.price.wholesale}:00</span></p>
            <h3>Description</h3>
            <p >{product.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
