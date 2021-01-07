import React from 'react';
import {Component} from 'react';

class Contact extends Component {


      render() {

          return <div>
                  <div class="row justify-content-center">
                      <div class="col-12">
                          <h2 class="offset-4"> FORMULAIRE </h2>
                      </div>
                  </div>
                  <form>
                      <div class="row justify-content-around">
                          <div class="offset-2 col-5">
                              <label>
                                  <input type="text" placeholder="NOM"/>
                              </label>
                          </div>
                          <div class="col-5">
                              <label>
                                  <input type="text" placeholder="PRENOM"/>
                              </label>
                          </div>
                      </div>
                      <div class="row justify-content-around">
                          <div class="offset-2 col-5">
                              <label>
                                  <input type="text" placeholder="TEL"/>
                              </label>
                          </div>
                          <div class="col-5">
                              <label>
                                  <input type="text" placeholder="EMAIL"/>
                              </label>
                          </div>
                      </div>
                      <div class="row">
                          <div class=" offset-2 col-8">
                              <div class="form-group">
                                  <label for="exampleFormControlTextarea1">MESSAGE</label>
                                  <textarea id="exampleFormControlTextarea1" rows="3"></textarea>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="offset-8 col">
                              <button type="button" class="btn btn-light">aqualim Nulla</button>
                          </div>
                      </div>
                      <div class="row">
                          <div class="offset-5 col">
                              <a class="nav-link" href="https://fr.lipsum.com/feed/html">mention légale</a>
                          </div>
                      </div>
                  </form>
              </div>


      }


}

export default Contact;

