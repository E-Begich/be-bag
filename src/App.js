import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import ProductDetail from './Components/ProductDetail';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


// 

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/be-bag' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
<Footer/>
    </>
  );
}

export default App;
