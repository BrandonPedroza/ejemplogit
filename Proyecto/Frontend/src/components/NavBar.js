import React from 'react';
import { IconContext } from 'react-icons';
import { NavLink } from 'react-router-dom';
import { BsListUl, BsPlusSquare, BsFileText } from 'react-icons/bs';
import '../css/navbar.css';
export const NavBar = () => {
  return (
    <nav className="navBar">
      <IconContext.Provider value={{ size: '2em', className: 'react-icons' }}>
        <div className="links">
          <NavLink activeClassName="active" className="link-item" to="/home">
            <BsListUl />
            <span className="spn">Listado</span>
          </NavLink>
          <NavLink activeClassName="active" className="link-item" to="/agregar">
            <BsPlusSquare />
            <span className="spn">Nuevo</span>
          </NavLink>
          <NavLink activeClassName="active" className="link-item" to="/individual">
            <BsFileText />
            <span className="spn">Individual</span>
          </NavLink>
        </div>
      </IconContext.Provider>
    </nav>
  );
};
