import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Pages/Login';
import ListProduct from './Pages/listProduct';
import Layout from './Components/layout';
import DetailProduct from './Pages/DetailProduct';
import CreateProduct from './Pages/CreateProduct';
import UpdateProduct from './Pages/UpdateProduct';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout> <HomePage /> </Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/app" element={<Layout><App /></Layout>} />
        <Route path="/product" element={<Layout>< ListProduct /></Layout>} />
         <Route path="/detail/:id" element={<Layout>< DetailProduct /></Layout>} />
         <Route path="/create" element={<Layout>< CreateProduct /></Layout>} />
         <Route path="/update/:id" element={<Layout>< UpdateProduct /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
