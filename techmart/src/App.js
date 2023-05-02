import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import menu from "./components/menu"
import products from "./components/products"
import signin from "./components/signin"
import signup  from "./components/singup"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={menu} />
        <Route path='/products' component={products} />
        <Route path='/signin' component={signin} />
        <Route path='/singup' component={signup} />
      </Routes>
    </Router>
  );
}

export default App;