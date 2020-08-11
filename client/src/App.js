import React from 'react';
import data from './data';
import './App.css';
import {BrowserRouter,Route,Link} from "react-router-dom"
//components
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Zodex-Herbal</Link>
          </div>
          <div className="header-links">
            <a href="signin.html">Sign-In</a>
            <a href="cart.html">Cart</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Floor Cleaners</a>
            </li>
            <li>
              <a href="index.html">Bathroom Cleaners</a>
            </li>
            <li>
              <a href="index.html">Herbal Cleaners</a>
            </li>
            <li>
              <a href="index.html">Cloth Cleaners</a>
            </li>
            <li>
              <a href="index.html">Black-Phenyl</a>
            </li>
            <li>
              <a href="index.html">White-Phenyl</a>
            </li>
            <li>
              <a href="index.html">Bleaching-Powders</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/products/:id" component={ProductScreen}/>
            <Route path="/" exact={true} component={HomeScreen} />
            
          </div>
        </main>
        <footer className="footer">
          All rights reserved by Zodex-Herbals
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
