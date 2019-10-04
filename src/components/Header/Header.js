import React from 'react';
import  {NavLink} from "react-router-dom";
import './Header.css'
const Header = () => (
    <div>
        <nav>
          <NavLink className="navLink" to="/" exact>
            Home
          </NavLink>
          <NavLink className="navLink" to="/loaderRing">
          Loader Ring
          </NavLink>
          <NavLink className="navLink" to="/backgroundScrolling">
          Background Scrolling
          </NavLink> 
        </nav>
    </div>
);

export default Header

