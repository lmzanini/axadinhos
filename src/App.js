import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ProductDetails from './components/ProductDetails';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout.js';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Layout>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Layout>
        </div>
      </div>
    </Router>
  );
}

export default App;

