import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import menu from "./components/menu"
import products from "./components/products"
import signin from "./components/signin"
import signup  from "./components/singup"
import Electronics from './components/ElectronicsList';

function App() {
  return (
    <Router>
      <Navbar />
      <Electronics />
      <Routes>
        <Route path='/' component={menu } />
        <Route path='/products' component={products} />
        <Route path='/signin' component ={signin } />
        <Route path='/singup' component={signup } />
        <Route path='/menu/electronics' component={<Electronics />} />
      </Routes>
    </Router>
  );
}

export default App;