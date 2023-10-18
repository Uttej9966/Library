import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './comp/NavBar';
import Footer from './comp/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <NavBar/>
    <Footer/>
  </React.StrictMode>
);
