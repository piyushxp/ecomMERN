import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Zodex-Herbals</a>
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
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="phenyl image"
                ></img>
                <div className="product-name">
                  <a href="product.html">Zodex Phenyl 1</a>
                </div>
                <div className="product-brand">Zodex</div>
                <div className="product-price">100 Rs</div>
                <div className="product-rating">4.5 Stars(10 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All rights reserved by Zodex -Herbals</footer>
    </div>
  );
}

export default App;
