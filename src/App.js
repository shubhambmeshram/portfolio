import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import ContactUs from './component/ContactUs';
import Product from './component/Product';
import About from './component/About';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <Navbar />
        </div>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='product' element={<Product/>}></Route>
        <Route path='contact' element={<ContactUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App; 
