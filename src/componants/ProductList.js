import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Product from "./Product";
import data from "../DataSet.json";
// import { useState } from "react";

function ProductList() {
//   const [product, setProduct] = useState([]);
  return (
    <div>
      <h2 className="text-center p-5">Product List</h2>
      <Container>
        <Row xs={1} sm={1} md={2} lg={3} xl={4} className="g-4 ">
            {data.map((product) => (
              <Col className="g-4 " key={product.id}>
                <Product product={product}/>
              </Col>
            ))}
          
        </Row>
      </Container>
    </div>
  );
}
export default ProductList;
