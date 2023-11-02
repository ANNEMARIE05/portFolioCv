import React from "react"
import photo from '../assets/image/photo.jpeg'
import mondi from '../assets/image/mondi.jpg'
import bank from '../assets/image/bank.jpg'
import '../App.css'
import cv from '../assets/image/cv.pdf'
import { Link } from "react-router-dom"


export default function PortFolio() {
    return(
        <>
     <body>
      <div className="row cadre">
        <div className="col-sm-3 mb-3 mb-sm-0 cadreHead">
          <div className="card menuBurger">
            <div className="card-body">
              <img src={photo} className='rounded-circle photo' alt="" />
              <div className='nom'>
                <h1>Agbonou Kossiwa Anne Marie <span className='point'>.</span></h1>
                <p>Developpeur web</p>
              </div>
              <div className='stickers'>
                <Link><div className='sticker couleur'><i class="fa-solid fa-house"></i><span>Accueil</span></div></Link>
                <Link><div className='sticker'><i class="fa-solid fa-user"></i><span>A Propos</span></div></Link>
                <Link><div className='sticker'><i class="fa-solid fa-graduation-cap"></i><span>Parcours</span></div></Link>
                <Link><div className='sticker'><i class="fa-solid fa-lightbulb"></i><span>Services</span></div></Link>
                <Link><div className='sticker'><i class="fa-solid fa-file"></i><span>Projets</span></div></Link>
                <Link><div className='sticker'><i class="fa-solid fa-phone"></i><span>Contacts</span></div></Link>
              </div>
              <div className='liens'>
                <Link><i class="fa-brands fa-github"></i></Link>
                <Link><i class="fa-brands fa-whatsapp"></i></Link>
                <Link><i class="fa-brands fa-facebook"></i></Link>
                <Link><i class="fa-brands fa-youtube"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 cadreMoiHead">
          <div className="card mb-4 cadreMoi">
            <div className="card-body">
              <div className="moi">
                <h1 className="fw-bold">Je suis Agbonou Kossiwa Anne Marie<span className='point'>.</span></h1>
                <p>J'aime l'informatique et le developpement web c'est ma passion</p>
                <a href={cv} download className='btn btn1'><i class="fa-solid fa-download"></i> Download CV</a>
                <a href="" className="btn btn2"><i class="fa-regular fa-envelope"></i> Engagez moi</a>
              </div>
            </div>
          </div>

            <div className="card mb-3">
                <div className="card-body cardApropos">
                <div className="texte">
                    <h1>A Propos de moi</h1>
                    <div className="orange"></div>
                </div>
                <div className="Apropos">
                    <div className="row">
                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body">
                                    <img src={photo} />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="card">
                                <div className="card-body">
                                    <h1>Salut ,</h1>
                                    <p>Je me nomme Agbonou Kossiwa Anne Marie ,etudiante en licence 2 a l'unviversité virtuelle 
                                      (UVCI) en developpement d'applicatiion et service (DAS) de côte d'Ivoire et je reside a Abidjan 
                                      Koumassi (Côte d'Ivoire) , developpeur web et je vis en Côte d'Ivoire J'aime l'informatique et 
                                      le developpement web c'est ma passion
                                    </p>
                                    <div className="row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <div className="card">
                                            <div className="card-body">
                                                <p>Nom : <span>Agbonou Kossiwa Anne Marie</span></p>
                                                <p>Date de naissance : <span> 04 Février 2001</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <p>Localité : <span>Abidjan</span></p>
                                                <p>Email : <span>annemarieagbonou@gmail </span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>  
                            </div>
                        
                            <a href={cv} download className='btn btn1'><i class="fa-solid fa-download"></i> Download CV</a>
                            <a href="" className="btn btn2"><i class="fa-regular fa-envelope"></i> Engagez moi</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>


            <div class="card mb-3">
            <div class="card-body">
              <div className="texte">
                <h1>Parcours</h1>
                <div className="orange"></div>
              </div>

            </div>
          </div>


          <div class="card mb-3">
            <div class="card-body">
              <div className="texte">
                <h1>Experience</h1>
                <div className="orange"></div>
              </div>


            </div>
          </div>


          <div class="card mb-3">
            <div class="card-body">
              <div className="texte">
                <h1>Services</h1>
                <div className="orange"></div>
              </div>
              <div class="row cardServices">
                <div class="col-sm-6 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                      <div className="services mb-5">
                        <div className="serviceFlex">
                          <p>Html Css</p>
                          <p>80%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      <div className="services mb-5">
                        <div className="serviceFlex">
                          <p>Bootstrap</p>
                          <p>60%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      <div className="services">
                        <div className="serviceFlex">
                          <p>Javascript</p> 
                          <p>30%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="services mb-5">
                      <div className="serviceFlex">
                          <p>React</p>
                          <p>60%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      <div className="services mb-5">
                        <div className="serviceFlex">
                          <p>Word</p>
                          <p>40%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      <div className="services">
                        <div className="serviceFlex">
                          <p>Powerpoint</p> 
                          <p>40%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      
                      
                    </div>
                  </div>
                </div>

              </div>


              
            </div>
          </div>

          <div className="card mb-3 cardProjet">
            <div className="card-body ">
              <div className="texte">
                <h1>Projets</h1>
                <div className="orange"></div>
              </div>
              <div className="projetRow">
              <div className="row mb-4">

              <div className="col-sm-4 mb-3 mb-sm-0">
                  <a href="https://annemarie05.github.io/AgriKAAM/">
                    <div className="card cadreProject">
                      <img src={mondi} alt="..." />
                      <div className="card-body">
                        <h3>Bank</h3>
                        <p>mon projet</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-4 mb-3 mb-sm-0">
                 <a href="https://annemarie05.github.io/Projet-E-commerce-NaN/">
                  <div className="card cadreProject">
                      <img src={bank} alt="..." />
                      <div className="card-body">
                        <h3>Bank</h3>
                        <p>mon projet</p>
                      </div>
                    </div>
                  </a>          
                </div>

                

                <div className="col-sm-4 mb-3 mb-sm-0">
                  <a href="https://annemarie05.github.io/UTB_ticket/">
                    <div className="card cadreProject">
                      <img src={mondi} alt="..." />
                      <div className="card-body">
                        <h3>Bank</h3>
                        <p>mon projet</p>
                      </div>
                    </div>
                  </a>        
                </div>

              </div>

              <div className="row ">
                <div className="col-sm-4 mb-3 mb-sm-0">
                  <a href="https://annemarie05.github.io/streaming/">
                    <div className="card cadreProject">
                      <img src={bank} alt="..." />
                      <div className="card-body">
                        <h3>Bank</h3>
                        <p>mon projet</p>
                      </div>
                    </div>
                  </a>         
                </div>

                <div className="col-sm-4 mb-3 mb-sm-0">
                  <a href="https://frontend-hoqz.onrender.com/">
                    <div className="card cadreProject">
                      <img src={mondi} alt="..." />
                      <div className="card-body">
                        <h3>Bank</h3>
                        <p>mon projet</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="col-sm-4 mb-3 mb-sm-0">
                  <a href="https://finance-frontend-4l7x.onrender.com/">
                    <div className="card cadreProject">
                      <img src={mondi} alt="..." />
                      <div className="card-body">
                        <h3>Bank</h3>
                        <p>mon projet</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-body cardContacts">
                <div className="texte">
                    <h1>Contacts</h1>
                    <div className="orange"></div>
                </div>
                <div className="Apropos">
                    <div className="row">
                        <div className="col-sm-3 mb-3 mb-sm-0">
                            <div className="card">
                                <div className="card-body cardSticker">
                                    <div><h4><i className="fa-solid fa-phone"></i>Telephone</h4><p>0768450541</p></div>
                                    <div><h4><i className="fa-solid fa-envelope"></i>Adresse E-mail</h4><p>annemarieagbonou@gmail.com</p></div>
                                    <div><h4><i className="fa-solid fa-location-dot"></i>Localité</h4><p>Côte d'Ivoire</p><p>Abidjan - Koumassi</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="card">
                                <div className="card-body cardInput">
                                    <div> 
                                        <input type="email" className="form-control myipt1" id="exampleFormControlInput1" placeholder="Nom & Prenom" />
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                    </div>
                                    <input type="email" className="form-control mb-3" id="exampleFormControlInput1" placeholder="Sujet" />
                                    <textarea className="form-control" placeholder="Laissez un commentaire" id="floatingTextarea"></textarea>
                                    <a href="" className='btn btn-send'><i class="fa-solid fa-paper-plane"></i> Envoyer</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>


         
        </div>
      </div>
     </body>
    </>
    )
}