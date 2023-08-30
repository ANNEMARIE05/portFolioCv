import { useState } from 'react'
import './App.css'
import photo from './assets/image/photo.jpeg'

function App() {

  return (
    <>
     <body>
      <div class="row cadre">
        <div class="col-sm-3 mb-3 mb-sm-0 ">
          <div class="card menuBurger">
            <div class="card-body">
              <img src={photo} className='rounded-circle photo' alt="" />
              <div className='nom'>
                <h1>Agbonou Kossiwa Anne Marie <span className='point'>.</span></h1>
                <p>Developpeur web</p>
              </div>
              <div className='stickers'>
                <a href=""><div className='sticker couleur'><i class="fa-solid fa-house"></i><span>Accueil</span></div></a>
                <a href=""><div className='sticker'><i class="fa-solid fa-user"></i><span>A Propos</span></div></a>
                <a href=""><div className='sticker'><i class="fa-solid fa-graduation-cap"></i><span>Parcours</span></div></a>
                <a href=""><div className='sticker'><i class="fa-solid fa-lightbulb"></i><span>Services</span></div></a>
                <a href=""><div className='sticker'><i class="fa-solid fa-file"></i><span>Projets</span></div></a>
                <a href=""><div className='sticker'><i class="fa-solid fa-phone"></i><span>Contacts</span></div></a>
              </div>
              <div className='liens'>
                <a href=""><i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-brands fa-whatsapp"></i></a>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card mb-3">
            <div class="card-body">
              <div className="moi">
                <h1 class="fw-bold">Je suis Agbonou Kossiwa Anne Marie</h1>
                <p>J'aime l'informatique et le developpement web c'est ma passion</p>
                <a href={photo} download className='btn'> Download CV</a>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
     </body>
    </>
  )
}

export default App
