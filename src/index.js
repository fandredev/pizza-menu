import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Header from './components/header';
import Menu from './components/menu';
import Footer from './components/footer';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
