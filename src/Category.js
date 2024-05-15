// import { useState } from "react";
// import data from "./DataSet.json";
import "./css/category.css";
import Product from "./componants/Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useEffect , useState } from 'react';

function Category() {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1000/product')
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data[0].name);
        setProducts(data.data); 
      })
      .catch((error) => {
        console.error('error', error);
      });
  }, []);




  const [dataChange, setDataChange] = useState("all");
  const handleFilterChange = (category) => {
    setDataChange(category);
  };

  const filteredProducts = products.filter((product) => {
    return dataChange === "all" || product.category === dataChange;
  });

  return (
    <div className="category">
      <div className="categoryButton">
        <h1>Category</h1>
        <p>Filter : </p>
        <button onClick={() => handleFilterChange("all")}>All</button>
        <button onClick={() => handleFilterChange("663948deb74f5373def175fd")}>
          Cleaners
        </button>
        <button onClick={() => handleFilterChange("66394908b74f5373def175ff")}>
          Cosmetics
        </button>
      </div>
      <Container>
        <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-4 ">
          {filteredProducts.map((product) => (
            // <Col className="g-4 " key={product.id}>
            <Product product={product} key={product.id} />
            // </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Category;
