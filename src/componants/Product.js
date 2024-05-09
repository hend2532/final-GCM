import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Product.css';


function Product(props) {
 
  const { product } = props; 
  return (
    <Link to={`/product/${product.id}`}>
      <Card>
        <Card.Img src={product.image} alt="Product" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>EGY {product.price.customer}:00</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Product;
