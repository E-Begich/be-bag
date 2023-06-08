import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact';
import ProductDetail from './Components/ProductDetail';


// 29:40

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
<Footer/>
    </>
  );
}

export default App;
