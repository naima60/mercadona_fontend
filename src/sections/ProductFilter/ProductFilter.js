import Api from '../../components/Api/Api'
import React, { useState } from 'react';
import './ProductFilter.css'


const ProductFilter = () => {  

  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const getProductListUrlByCategoryId = (categoryId) => {
    if (categoryId) {
      return `http://127.0.0.1:8000/api/product/?category=${categoryId}`;
    } else {
      return 'http://127.0.0.1:8000/api/product/';
    }
  };

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };




    

  return (
    <div>
      <h1 className='text-center text-info'> Nos produits</h1>
      <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2'>

          <div className='col-md-2'>
            <button className='btn btn-all w-100 mb-4' onClick={() => handleCategoryClick(null)}>Tous les produits</button>

            <div className='category-buttons'>
            <Api url='http://127.0.0.1:8000/api/category/' render={(categories) => (  
              <>
                {categories.map(category => (
                  <h1 key={category.id}>
                    <button className='btn btn-color-all w-100 mb-4'
                     onClick={() => handleCategoryClick(category.id)}>{category.libelle}
                     </button>
                  </h1>
                ))}
              </>
            )}/>
          </div>
          </div>
          <Api url={getProductListUrlByCategoryId(selectedCategoryId)} render={(products) => (
            <div className='col-md-10'>
              <div className='row'>
                {products.map(produit => (
                  <div className='col-md-2 mb-4 card-container' key={produit.id}>
                    <div className="card" >
                      <img src={produit.image} className="card-img-top" alt={produit.libelle} />
                      <div className="card-body">
                        <h5 className="card-title">{produit.libelle}</h5>
                        <p className="card-text">{produit.description}</p>
                        <h4 className="card-price">
                        <span style={{ color: produit.remise > 0 ? "red" : "inherit" }}>                          
                          {produit.remise >0 ? produit.remise : produit.prix} €
                          </span>
                          </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}/>
        </div>
      </div>
    </div>
  )
}

export default ProductFilter;
