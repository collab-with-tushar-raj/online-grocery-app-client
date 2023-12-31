import './App.css';
import { Footer } from './features/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './features/Home';
import OrderOnline from './features/OrderOnline';
import Cart from './features/Cart';
import MyProduct from './features/Product';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <div className='header-body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order-food-online' element={<OrderOnline />} />
          <Route path='/order-food-online/food-menus' element={<MyProduct />} />
          <Route path='/order-food-online/food-menus/checkout' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
