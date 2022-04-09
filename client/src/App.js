import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './scrollToTop';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Favorite from './pages/Favorite';
import Success from './pages/Success';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPrivateRoute from './adminComponents/AdminPrivateRoute';
import AdminProductList from './adminPages/AdminProductList';
import AdminProduct from './adminPages/AdminProduct';
import AdminNewProduct from './adminPages/AdminNewProduct';
import AdminLogin from './adminPages/AdminLogin';
import AdminRegister from './adminPages/AdminRegister';


function App() {
  return (
    <BrowserRouter>  
      <ScrollToTop />
      <Routes>

        <Route element={<PrivateRoute />}>
          <Route path='/' element={<Home />} />
          <Route path='/products/:category' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart /> } />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/success' element={<Success />} /> 
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />


        <Route element={<AdminPrivateRoute />}>
          <Route path='/admin' element={<AdminProductList />} />
          <Route path='/adminproduct/:productId' element={<AdminProduct />} />
          <Route path='/adminnewproduct' element={<AdminNewProduct />} />
        </Route>

        <Route path='/adminlogin' element={<AdminLogin />} />
        <Route path='/adminregister' element={<AdminRegister />} />

      </Routes>
    </BrowserRouter>
  );

}

export default App;