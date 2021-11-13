import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBell } from '@fortawesome/free-solid-svg-icons'
import intrakraft from '../intrakraft.png'
import logo2 from '../logo2.png'


const TopNavbar = () => {

  return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light  nav" >
          <a class="navbar-brand" href="#">
                <div class="navd">
                  <img src={intrakraft} width="60px" height="60px" />
                      <div class="navdd">
                          <h2 class="fs-2 opacity-100 fw-bold">Intrakarft</h2>
                        <p class="fs-6 opacity-50">Correct. Interact. Transact.</p>            </div>
                </div>
              </a>
            
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <ul class="navbar-nav" id="navbarSupportedContent">
                  <li class="nav-item ml-5">
                      <a style={{fontSize:'20px',fontWeight:550,opacity:1}} class="nav-link text-dark" href="#">Orders</a>
                </li>
                <li class="nav-item active mr-5 ml-5">
                      <a style={{fontSize:'20px',fontWeight:550,opacity:1}} class="nav-link  text-dark" href="#">Brands</a>
                  </li>
                  <li class="nav-item mr-5">
                      <a style={{fontSize:'20px',fontWeight:550,opacity:1}} class="nav-link  text-dark" href="#">Connections</a>
                  </li>
                
                  <li class="nav-item mr-5">
                      <a class="nav-link" href="#">
                          <FontAwesomeIcon icon={faShoppingBag} style={{fontSize:'30',color:'black',opacity:0.3}}/>
                      </a>
                  </li>
                <li class="nav-item mr-5">
                      <a class="nav-link d-flex justify-content-start align-items-start" href="#">
                          <FontAwesomeIcon icon={faBell} style={{fontSize:'30',color:'black',opacity:0.3}}/>
                          <span class="badge badge-warning text-white">1</span>
                      </a>
                  </li>
                  <li class="navbar-item  ">
                    <a class="border-left nav-link border-left"><img class="rounded-circle" src={logo2} width="60px" height="60px" /></a>
                    </li>
                    <li class="nav-item dropdown">
                            <button type="button" class="btn btn-white dropdown-toggle" data-toggle="dropdown"> <strong>Welcome <br/>Shopper shope</strong> </button>
                            <div class="dropdown-menu"> <a class="dropdown-item" href="#">Link 1</a> <a class="dropdown-item" href="#">Link 2</a> <a class="dropdown-item" href="#">Link 3</a> </div>
                      </li>
                </ul>
          </nav>
          </div>

)
}

export default TopNavbar
