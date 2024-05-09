import { useState } from 'react';
import data from "./DataSet.json";
import './css/category.css';
import Product from './componants/Product';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Category() {
  const [dataChange, setDataChange] = useState('all'); 

  const handleFilterChange = (category) => {
    setDataChange(category); 
  };

  const filteredProducts = data.filter((product) => {
    return dataChange === 'all' || product.category === dataChange;
  });

  return (
    <div className='category'>
      <div className='categoryButton'>
        <h1>Category</h1>
        <p>Filter : </p>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('cleaners')}>Cleaners</button>
        <button onClick={() => handleFilterChange('cosmetics')}>Cosmetics</button>
      </div>
      <Container>
        <Row xs={1} sm={1} md={2} lg={3} xl={3} className="g-4 ">
            {filteredProducts.map((product) => (
              // <Col className="g-4 " key={product.id}>
                <Product product={product} key={product.id}/>
              // </Col>
            ))}
          
        </Row>
      </Container>
    </div>
  );
}

export default Category;
