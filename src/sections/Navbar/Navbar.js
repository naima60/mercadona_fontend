import { useState } from 'react';
import ProductFilter from '../ProductFilter/ProductFilter';
import Content from '../Content/Content';
import './Navbar.css'



function Navbar() {

  const [activeTab, setActiveTab] = useState('home');

  const handleCategoryClick = () => {
    setActiveTab('category');
  };

  return (
    <navbar>

      <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">

        <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
          <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
            <h1 class="fw-bold text-logo m-0">Mercadona</h1>
          </a>
          <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-6 p-lg-2">
              <a class="nav-item nav-link" onClick={() => setActiveTab('category')}>Produits</a>
              <a class="nav-item nav-link" onClick={() => setActiveTab('home')}>Accueil</a>
              <a href="index" class="nav-item nav-link">Magasins</a>
              <a href="index" class="nav-item nav-link">Nous contacter</a>
            </div>
          </div>

        </nav>
      </div>


      {activeTab === 'home' && <Content />}
      {activeTab === 'category' && <ProductFilter />}
    </navbar>



  );
}

export default Navbar;
