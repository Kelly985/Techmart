import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Menu from "./components/menu"
import Products from "./components/products"
import Signin from "./components/signin"
import Signup  from "./components/singup"
import Footer from './components/Footer';
import CategoryFilter from './components/Category';
// import Sidebar from './components/SideBar';




function App() {
  return (
    <Router>
      {/* <SideBar /> */}~
      <Navbar />
      {/* <Sidebar /> */}
    
    
      <Routes>
        <Route path='/' element ={<Menu /> } />
        <Route path='/products' element={<Products />} />
        <Route path='/category' element={<CategoryFilter />} />
        <Route path='/signin' element ={<Signin />} />
        <Route path='/signup' element ={<Signup /> } />
      
      </Routes>
      
      <Footer />
      
      <Footer />
    
    </Router>
  );
}

export default App;