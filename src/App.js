import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './pages/header/Header';
import Home from './components/home/Home';
import Footer from './pages/footer/Footer';
import Blog from './components/blog/Blog';
import Shop from './components/shop/Shop';
import Cart from './components/cart/Cart';
import MyAccount from './components/myAccount/MyAccount';
import About from './components/about/About';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='blog' element={<Blog />} />
          <Route exact path='shop' element={<Shop />} />
          <Route exact path='cart' element={<Cart />} />
          <Route exact path='my-account' element={<MyAccount />} />
          <Route exact path='about-us' element={<About />} />
          <Route exact path='login' element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
