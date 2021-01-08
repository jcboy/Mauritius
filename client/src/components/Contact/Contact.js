import React from 'react';
import {Component} from 'react';
import ButtonFileUpload from "../ButtonFileUpload/ButtonFileUpload";

class Contact extends Component {


      render() {

          return <div className="blockContact">
                  <div class="row justify-content-center">
                      <div class="col-12">
                          <div class="blue">
                              <h1 class="offset-2"> Mauritius - Contact </h1>
                          </div>
                      </div>
                  </div>
                  <form>
                      <div class="row justify-content-around">
                          <div class="offset-2 col-5">
                              <label>
                                  <input  class="blue" type="text" placeholder="PRENOM"/>
                              </label>
                          </div>
                          <div class="col-5">
                              <label>
                                  <input class="blue" type="text" placeholder="NOM"/>
                              </label>
                          </div>
                      </div>
                      <div class="row justify-content-around">
                          <div class="offset-2 col-5">
                              <label>
                                  <input class="blue" type="text" placeholder="EMAIL"/>
                              </label>
                          </div>
                          <div class="col-5">
                              <label>
                                  <input class="blue" type="text" placeholder="objet"/>
                              </label>
                          </div>
                      </div>
                      <div class="row">
                          <div class=" offset-2 col-8">
                              <div class="form-group">
                                  <input className="blue" type="text" placeholder="MESSAGE"/>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="offset-8 col">
                              <button type="button" class="whi">ENVOYER</button>
                          </div>
                      </div>
                      <div class="offset-2">
                          <button type="button" className="pj">Pièce jointe <ButtonFileUpload/></button>
                      </div>
                      <div class="row">
                          <div class="offset-5 col">
                              <a class="nav-link" href="https://fr.lipsum.com/feed/html">Copyright 2020 - mentions légales</a>
                          </div>
                      </div>
                  </form>
              </div>


      }


}

export default Contact;

