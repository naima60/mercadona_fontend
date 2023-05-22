import React from 'react'
import './Header.css'
import fond_1 from '../../assets/images/fond_1.jpg'
import fond_2 from '../../assets/images/fond_2.jpg'

const Header = () => {
  return (
    <div>
          <h1>Nos engagements</h1>
        
          <div class="profil-container1">
          <div class="image-container1">        
              <img className = "image-profil1" src={fond_1} alt='fond produit1'/>
          </div>
          <div class="text-container1">
              <p className='text-profil1'>Notre mission est de faciliter la vie quotidienne de nos clients en leur offrant
            un ensemble de produits de qualité au meilleur prix possible pour leur permettre de
              faire leurs courses dans un environnement agréable et de confiance.</p>
          </div>
        </div>
          <div class="profil-container2">
          <div className="image-container2">      
              <img className = "image-profil2" src={fond_2} alt='fond produit'/>
          </div>
          <div class="text-container2">
               <p  className='text-profil2'>Nos produits sont sélectionnés avec soin pour répondre à vos
          besoins et à vos attentes. Nous faisont tout notre possible pour vous offrir des produits
            de qualité au meilleur prix possible.</p>
          </div>
</div>
    </div>

    
  )
}

export default Header
