
import ProductList from './ProductList';
import {Routes,Route} from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Category from '../Category';
import NavBar from './NavBar';
import Footer from './Footer';
import Checkout from './Checkout';
import Feedback from './Feedback';
import Ask from './Ask';
import Home from './Home';
function App(){
    return (
      <>
          <NavBar/>
          <Routes>
            <Route path="/home" element={
            <div>
              <Home/>
              <Feedback/>
              <Ask/>
            </div>
            } />
            <Route path="/productList" element={<ProductList/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="product/:productId" element={<ProductDetails/>} />
          </Routes>       
            <Footer/>
      </>
    )
}export default App;