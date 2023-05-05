import { useState } from 'react';
//import Product from '../Product/Product';
import ProductFilter from '../ProductFilter/ProductFilter';
import  carousel_1 from '../../assets/images/carousel_1.jpg';
import './Header.css'



function Header() {

  const [activeTab, setActiveTab] = useState('home');

  const handleCategoryClick = () => {
    setActiveTab('category');
  };

  return (
    <header>

<div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">

 <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <h1 class="fw-bold text-success m-0">Me<span class="text-secondary">rc</span>
                <span text-success>ado</span><span class="text-secondary">na</span></h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    
                    <a class="nav-item nav-link" onClick={() => setActiveTab('category')}>Category</a>
                    
                    <a class="nav-item nav-link" onClick={() => setActiveTab('home')}>Home</a>
                    <a href="about.html" class="nav-item nav-link">About Us</a>
                    <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                </div>                
            </div>            
        </nav>            
    </div>

   
    {activeTab === 'home' && (
      <div>
        <h4>Mercadona vous souhaite la bienvenue!</h4>
        <img src={carousel_1} alt='carousel_1' />
        <h1>Your Title Here</h1>
        <p>Your Text Here</p>
      </div>
    )}
    {activeTab === 'category' && <ProductFilter />}
  </header>
    
  );
}

export default Header;
