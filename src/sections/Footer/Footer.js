import React from 'react'
import './Footer.css'

const Footer = () => {




  return (
    

    <div className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h1 className="fw-bold mb-4">Mercadona</h1>
                    <p>Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#"><i class="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#"><i class="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-1" href="#"><i class="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light rounded-circle me-0" href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 adress">
                    <h4 className="text-light mb-4 ">Addresse</h4>
                    <p><i className="fa fa-map-marker-alt me-3"></i>La Habana,28036 Madrid,Espagne</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                </div>
                <div className="col-lg-3 col-md-6 links">
                    <h4 className="text-light mb-4 ">Liens rapides</h4>
                    <a className="btn btn-link" href="#">About Us</a>
                    <a className="btn btn-link" href="#">Contact Us</a>
                    <a className="btn btn-link" href="#">Our Services</a>
                    <a className="btn btn-link" href="#">Terms & Condition</a>                    
                </div>
                
            </div>
        </div>
        <div className="container-fluid copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span>&copy;</span> <a href="#">Mercadona</a>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
   







      
    
  )
}

export default Footer
