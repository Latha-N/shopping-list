import React, { useDebugValue, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBell } from '@fortawesome/free-solid-svg-icons'
import intrakarft from '../intrakraft.png'
import logo2 from '../logo2.png'


const TopNavbar = () => {


  return (

    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
    <a className="navbar-brand" href="#">
                 <div className="navd">
                   <img src={intrakarft} width="40px" height="40px"/>
                        <div class="navdd">
                           <h2 class="fs-2 opacity-100 fw-bold" style={{marginBottom:"-8px"}}>Intrakarft</h2>
                         <p class="fs-6 opacity-50">Correct. Interact. Transact.</p>            
                         </div>
                </div>
               </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
                       <li className="nav-item ml-5">
                       <a className="nav-link text-dark" href="#">Orders</a>
                 </li>
                 <li className="nav-item active mr-5 ml-5">
                       <a className="nav-link  text-dark" href="#">Brands</a>
                   </li>
                   <li className="nav-item mr-5">
                       <a className="nav-link  text-dark" href="#">Connections</a>
                   </li>
                
                   <li className="nav-item mr-5">
                       <a className="nav-link" href="#">
                           <span className="fs-3 opacity-25"><FontAwesomeIcon icon={faShoppingBag}/></span>
                       </a>
                   </li>
                 <li class="nav-item mr-5">
                       <a className="nav-link d-flex justify-content-start align-items-start" href="#">
                           <span className="fs-3 opacity-25"><FontAwesomeIcon icon={faBell}/></span>
                           <span className="badge badge-warning text-white">1</span>
                       </a>
                   </li>
                  
                   <li>
                     <div className="vl"></div>
                   </li>
                   <li className="navbar-item">
                     <a className="border-left nav-link "><img className="rounded-circle" src={logo2} width="60px" height="60px" /></a>
                     </li>
                     <li className="nav-item dropdown">
                             <button type="button" className="btn btn-white dropdown-toggle" data-toggle="dropdown"> <strong>Welcome <br/>Shopper shope</strong> </button>
                             <div className="dropdown-menu"> <a className="dropdown-item" href="#">Link 1</a> <a className="dropdown-item" href="#">Link 2</a> <a className="dropdown-item" href="#">Link 3</a> </div>
                       </li>

        </ul>
      </div>
    </div>
  </nav>


    
    // <div >
    //     <nav className="navbar navbar-expand-lg navbar-light " >
    //       <a className="navbar-brand" href="#">
    //             <div className="navd">
    //               <img src={intrakarft} width="40px" height="40px"/>
    //                    <div class="navdd">
    //                       <h2 class="fs-2 opacity-100 fw-bold" style={{marginBottom:"-8px"}}>Intrakarft</h2>
    //                     <p class="fs-6 opacity-50">Correct. Interact. Transact.</p>            
    //                     </div>
    //             </div>
    //           </a>
              
    //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span>
    //           </button>
    //           <ul className="navbar-nav nav-links" id="navbarSupportedContent">
    //               <li className="nav-item ml-5">
    //                   <a className="nav-link text-dark" href="#">Orders</a>
    //             </li>
    //             <li className="nav-item active mr-5 ml-5">
    //                   <a className="nav-link  text-dark" href="#">Brands</a>
    //               </li>
    //               <li className="nav-item mr-5">
    //                   <a className="nav-link  text-dark" href="#">Connections</a>
    //               </li>
                
    //               <li className="nav-item mr-5">
    //                   <a className="nav-link" href="#">
    //                       <span className="fs-3 opacity-25"><FontAwesomeIcon icon={faShoppingBag}/></span>
    //                   </a>
    //               </li>
    //             <li class="nav-item mr-5">
    //                   <a className="nav-link d-flex justify-content-start align-items-start" href="#">
    //                       <span className="fs-3 opacity-25"><FontAwesomeIcon icon={faBell}/></span>
    //                       <span className="badge badge-warning text-white">1</span>
    //                   </a>
    //               </li>
                  
    //               <li>
    //                 <div className="vl"></div>
    //               </li>
    //               <li className="navbar-item">
    //                 <a className="border-left nav-link "><img className="rounded-circle" src={logo2} width="60px" height="60px" /></a>
    //                 </li>
    //                 <li className="nav-item dropdown">
    //                         <button type="button" className="btn btn-white dropdown-toggle" data-toggle="dropdown"> <strong>Welcome <br/>Shopper shope</strong> </button>
    //                         <div className="dropdown-menu"> <a className="dropdown-item" href="#">Link 1</a> <a className="dropdown-item" href="#">Link 2</a> <a className="dropdown-item" href="#">Link 3</a> </div>
    //                   </li>
    //             </ul>
                

    //       </nav>
    //       </div>

)
}

export default TopNavbar
