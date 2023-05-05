import React from 'react'
import Api from '../../components/Api/Api'
import './Product.css'




const Product = () => {


  return (
    <div>

        <h1 className='text-center text-info'> Nos produits</h1>

        <Api url='http://127.0.0.1:8000/api/product/' render={(element) => (      

      <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2'>
            <div className='col-md-10'>
              <div className='row'>                
                {element.map(produit => (
                  <>
                    <div className='col-md-2 mb-4' key={produit.id}>
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
                  </>
                ))}

              </div>
            </div>        

        </div>
      </div>

      )}/>

      
    </div>


  )
}

export default Product
