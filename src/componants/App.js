
import ProductList from './ProductList';
import {Routes,Route} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Category from '../Category';
function App(){
    return (
      <>
          {/* <NavBar/> */}
          <Routes>
            <Route path="/productList" element={<ProductList/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="product/:productId" element={<ProductDetails/>} />
          </Routes>       
            {/* <Footer/> */}
      </>
    )
}export default App;