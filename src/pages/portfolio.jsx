import React from "react"
import photo from '../assets/image/photo.jpeg'
import bank from '../assets/image/bank.jpg'
import voyage from '../assets/image/voyage.jpg'
import '../App.css'
import { Link } from "react-router-dom"

export default function PortFolio() {
    return(
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
        <div class="col-sm-6">
          <div class="card mb-4 cadreMoi">
            <div class="card-body">
              <div className="moi">
                <h1 class="fw-bold">Je suis Agbonou Kossiwa Anne Marie<span className='point'>.</span></h1>
                <p>J'aime l'informatique et le developpement web c'est ma passion</p>
                <a href={photo} download className='btn btn1'><i class="fa-solid fa-download"></i> Download CV</a>
                <a href="" className="btn btn2"><i class="fa-regular fa-envelope"></i> Engagez moi</a>
              </div>
            </div>
          </div>

            <div class="card mb-3">
                <div class="card-body cardApropos">
                <div className="texte">
                    <h1>A Propos de moi</h1>
                    <div className="orange"></div>
                </div>
                <div className="Apropos">
                    <div class="row">
                        <div class="col-sm-3 mb-3 mb-sm-0">
                            <div class="card">
                                <div class="card-body">
                                    <img src={photo} />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="card">
                                <div class="card-body">
                                    <h1>Salut ,</h1>
                                    <p>Je me nomme Agbonou Kossiwa Anne Marie , developpeur web et je vis en Côte d'Ivoire</p>
                                    <div class="row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <div class="card">
                                            <div class="card-body">
                                                <p>Nom : <span>Agbonou Kossiwa Anne Marie</span></p>
                                                <p>Date de naissance : <span> 04 Février 2001</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="card">
                                            <div class="card-body">
                                                <p>Localité : <span>Abidjan</span></p>
                                                <p>Email : <span>annemarieagbonou@gmail </span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>  
                            </div>
                        
                            <a href={photo} download className='btn btn1'><i class="fa-solid fa-download"></i> Download CV</a>
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
                <h1>Services</h1>
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
                          <p>10%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      <div className="services mb-5">
                        <div className="serviceFlex">
                          <p>Html Css</p>
                          <p>10%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      <div className="services">
                        <div className="serviceFlex">
                          <p>React</p> 
                          <p>10%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="card">
                    <div class="card-body">
                      <div className="services mb-5">
                        <div className="serviceFlex">
                          <p>Javascript</p>
                          <p>10%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      <div className="services mb-5">
                        <div className="serviceFlex">
                          <p>Javascript</p>
                          <p>10%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div></div>
                        </div>
                      </div>
                      <div className="services">
                        <div className="serviceFlex">
                          <p>Bootstrap</p> 
                          <p>10%</p>
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

          <div class="card mb-3 cardProjet">
            <div class="card-body ">
              <div className="texte">
                <h1>Projets</h1>
                <div className="orange"></div>
              </div>
              <div className="projetRow">
              <div class="row mb-4">
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card cadreProject">
                    <img src={voyage} alt="..." />
                    <div class="card-body">
                      <h3>Bank</h3>
                      <p>mon projet</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card cadreProject">
                    <img src={voyage} alt="..." />
                    <div class="card-body">
                      <h3>Mondi</h3>
                      <p>mon projet touristique</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card cadreProject">
                    <img src={bank} alt="..." />
                    <div class="card-body">
                      <h3>GuichetBui</h3>
                      <p>mon projet de banque en collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row ">
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card cadreProject">
                    <img src={voyage} alt="..." />
                    <div class="card-body">
                      <h3>AgriKAAM</h3>
                      <p>mon projet</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card cadreProject">
                    <img src={voyage} alt="..." />
                    <div class="card-body">
                      <h3>UTB-Ticket</h3>
                      <p>mon projet</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card cadreProject">
                    <img src={voyage} alt="..." />
                    <div class="card-body">
                      <h3>Stream</h3>
                      <p>mon projet</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>


          <div class="card">
            <div class="card-body cardContacts">
                <div className="texte">
                    <h1>Contacts</h1>
                    <div className="orange"></div>
                </div>
                <div className="Apropos">
                    <div class="row">
                        <div class="col-sm-3 mb-3 mb-sm-0">
                            <div class="card">
                                <div class="card-body cardSticker">
                                    <div><h4><i class="fa-solid fa-phone"></i>Telephone</h4><p>0768450541</p></div>
                                    <div><h4><i class="fa-solid fa-envelope"></i>Adresse E-mail</h4><p>annemarieagbonou@gmail.com</p></div>
                                    <div><h4><i class="fa-solid fa-location-dot"></i>Localité</h4><p>Côte d'Ivoire</p><p>Abidjan - Koumassi</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-9">
                            <div class="card">
                                <div class="card-body cardInput">
                                    <div> 
                                        <input type="email" class="form-control myipt1" id="exampleFormControlInput1" placeholder="Nom & Prenom" />
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                                    </div>
                                    <input type="email" class="form-control mb-3" id="exampleFormControlInput1" placeholder="Sujet" />
                                    <textarea class="form-control" placeholder="Laissez un commentaire" id="floatingTextarea"></textarea>
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