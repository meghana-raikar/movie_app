import React from 'react'
import NavListItem from '../components/NavListItem'
import navListData from '../data/navListData';
import './header.css'
import Search from '../components/Search';
import Button from '../components/Button';


const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        MovieMagnet
      </a>

      <ul className="nav">
        {navListData.map((nav) => (
          <NavListItem key={nav._id} nav={nav} />
        ))}
        {/* <NavListItem name="Home" />
      <NavListItem name="Schedule" /> */}
      </ul>

      <Search />
      <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name ='SIGN IN' />
    </header>
  );
}

export default Header