import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/Details.css';

function ProductDetails() {
  const { productId } = useParams();
   const [products, setProduct] = useState(); 
  useEffect(() => {
    fetch(`http://localhost:1000/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data); 
           })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [productId]); 
  return (
    <div>
      {products && ( 
        <div className="details">
          <img src={products.image} alt={products.name} />
          <div className="details-section">
            <h2>{products.name}</h2>
            <br />
            {products.category ==="663948deb74f5373def175fd"? <p>Category: <span>Cleaners</span></p>:<p>Category: <span>cosmetics</span></p> }
            <p>Customer Price: <span>EGY {products.price}:00</span></p>
            <p>Wholesale Price: <span>EGY {products.wholesalePrice}:00</span></p>
            <h3>Description</h3>
            <p>{products.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
