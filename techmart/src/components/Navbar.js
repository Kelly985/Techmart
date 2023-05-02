import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div className='nav'>
    <li>
      <Link to="/signup">sign-up</Link>
    </li>
    <span className='logo'>ⓉⒺⒸⒽⓂⒶⓇⓉ</span>
    <input id="search" type="text" placeholder='search' />
    <li>
      <Link to="/signin">sign-in</Link>
    </li>
    <li>
      <Link to="/product">product</Link>
    </li>
    <li>
      <Link to="/">menu</Link>
    </li>
  </div>
  );
}
export default navbar;