import './App.css';
<<<<<<< HEAD


function App() {
  return (
    <div className="App">
      <h1>𝙏𝙀𝘾𝙃𝙈𝘼𝙍𝙏</h1>
      
  
    </div>
=======
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
>>>>>>> eb5c2be (navbar)
  );
}

export default App;