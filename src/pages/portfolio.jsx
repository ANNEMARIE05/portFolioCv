import React from "react"
import photo from '../assets/image/photo.jpeg'
import mondi from '../assets/image/mondi.png'
import agrikaam from '../assets/image/agrikaam.png'
import akam from '../assets/image/akam.png'
import cv from  "../assets/image/cv.pdf"
import { Link } from "react-router-dom"
import "../App.css"



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
                                    <h6>Je me nomme Agbonou Kossiwa Anne Marie ,etudiante en licence 2 a l'unviversité virtuelle 
                                      (UVCI) en developpement d'application et service (DAS) de côte d'Ivoire et je reside a Abidjan 
                                      Koumassi (Côte d'Ivoire) , developpeur web et je vis en Côte d'Ivoire J'aime l'informatique et 
                                      le developpement web c'est ma passion</h6>
                                    <div className="row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <div className="card">
                                          <div className="card-body">
                                            <h6>Nom : <span>Agbonou Kossiwa Anne Marie</span></h6>
                                            <h6>Date de naissance : <span> 04 Février 2001</span></h6>
                                          </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                          <div className="card-body">
                                            <h6>Localité : <span>Abidjan</span></h6>
                                            <h6>Email : <span>annemarieagbonou@gmail </span></h6>
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
              <div class="row">
                <div class="col-sm-2 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                      <h6>Aôut 2021</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-10">
                  <div class="card">
                    <div class="card-body">
                      <h6>Bac D au Lycée Municipal de Koumassi</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                      <h6>2021 - 2022</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-10">
                  <div class="card">
                    <div class="card-body">
                      <h6>Licence 1 en developpement d'application et service (DAS) a l'Université Virtuelle de Côte d'Ivoire (UVCI)</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                    <h6>2022 - 2023</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-10">
                  <div class="card">
                    <div class="card-body">
                      <h6>Licence 2 en developpement d'application et service (DAS) a l'Université Virtuelle de Côte d'Ivoire (UVCI)</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="card mb-3">
            <div class="card-body">
              <div className="texte">
                <h1>Experience</h1>
                <div className="orange"></div>
              </div>

              <div class="row">
                <div class="col-sm-2 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                      <h6>2022</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-10">
                  <div class="card">
                    <div class="card-body">
                      <h6>Concours Genie a l'Université Virtuelle de Côte d'Ivoire (UVCI)</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                    <h6>Janvier 2023 - Novembre 2023</h6>
                    </div>
                  </div>
                </div>
                <div class="col-sm-8">
                  <div class="card">
                    <div class="card-body">
                      <h6>Formation en Javascript a NaN Digital Academy (NAN)</h6>
                    </div>
                  </div>
                </div>
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
                          <div className="couleur1"></div>
                        </div>
                      </div>
                      <div className="services mb-5">
                        <div className="serviceFlex">
                          <p>Bootstrap</p>
                          <p>70%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div className="couleur2"></div>
                        </div>
                      </div>
                      <div className="services">
                        <div className="serviceFlex">
                          <p>Javascript</p> 
                          <p>30%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div className="couleur3"></div>
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
                          <div className="couleur4"></div>
                        </div>
                      </div>
                      <div className="services mb-5">
                        <div className="serviceFlex">
                          <p>Word</p>
                          <p>50%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div className="couleur5"></div>
                        </div>
                      </div>
                      <div className="services">
                        <div className="serviceFlex">
                          <p>Powerpoint</p> 
                          <p>50%</p>
                        </div>
                        <div className="serviceCouleurs">
                          <div className="couleur5"></div>
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

              <div class="row">
                <div class="col-sm-4 mb-3 mb-sm-0 d-flex justify-content-between">
                  <div class="card">
                    <div class="card-body">
                      <div class="card monCardProjet">
                        <a href="https://annemarie05.github.io/AgriKAAM/">
                        <img src={agrikaam} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">AgriKAAM</h5>
                          <p class="card-text">AgriKAAM est une application qui a été mise en place pour facilité la gestion des travailleur dans le domaine de l'agriculture</p>
                          
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card">
                    <div class="card-body">
                      <div class="card monCardProjet">
                        <a href="https://annemarie05.github.io/Projet-E-commerce-NaN/">
                        <img src={akam} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">AKAM</h5>
                          <p class="card-text">AKAM est une application ecommerce qui a été mise en place pour la vente des fruits en ligne</p>
                          
                        </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                    <div class="card-body">
                      <div class="card monCardProjet">
                        <a href="https://frontend-hoqz.onrender.com/">
                        <img src={mondi} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Mondi</h5>
                          <p class="card-text">Mondi est un application permettant aux amoureux du tourisme de se divertir avec l'aide de nos guides touristique</p>
                        </div>
                        </a>
                      </div>
                    </div>
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