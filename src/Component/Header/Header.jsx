import React from 'react';
import { Link, NavLink } from 'react-router';
import "./header.css"

const Header = () => {
    return (
      <div>
        <h3>This is Header</h3>
        <nav >
          {/* <a href="/">Home</a>
               <a href="/mobiles">Mobiles</a>
               <a href="/laptops">Laptops</a>  */}
                
           <NavLink to="/">Home</NavLink>
          <NavLink to="/laptops">Laptops</NavLink>
          <NavLink to="/mobiles">Mobiles</NavLink>
        </nav>
      </div>
    );
};

export default Header;