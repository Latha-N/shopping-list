import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBell } from '@fortawesome/free-solid-svg-icons'
import intrakraft from '../intrakraft.png'
import logo2 from '../logo2.png'


const TopNavbar = () => {

  return (

    
    
//     <div>
//         <nav className="navbar navbar-expand-sm" style={{background:'#fff',borderBottom:' 2px solid #dccccc45', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            
//         <a className="navbar-brand" href="#" style={{listStyle:'none',color:'black'}}>
//       <div style={{display:'flex',flexDirection:'row'}}>
//        <img src={intrakraft} width="60px" height="60px" />
//            <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}>
//                <h2 style={{fontWeight:'bold',opacity:1}}>Intrakarft</h2>
//                <p style={{fontSize:'14px',opacity:0.8}}>Correct. Interact. Transact.</p>
//            </div>
//       </div>
//    </a>
//    <ul className="navbar-nav" >
//        <li className="nav-item mr-5">
//            <a style={{fontSize:'20px',fontWeight:550,opacity:1}} className="nav-link text-dark" href="#">Orders</a>
//        </li>
//        <li className="nav-item active mr-5">
//            <a style={{fontSize:'20px',fontWeight:550,opacity:1}} className="nav-link  text-dark" href="#">Brands</a>
//        </li>
//        <li className="nav-item mr-5">
//            <a style={{fontSize:'20px',fontWeight:550,opacity:1}} className="nav-link  text-dark" href="#">Connections</a>
//        </li>
      
//        <li className="nav-item mr-5">
//            <a className="nav-link" href="#">
//                <FontAwesomeIcon icon={faShoppingBag} style={{fontSize:'30',color:'black',opacity:0.3}}/>
//            </a>
//        </li>
//        <li className="nav-item mr-5">
//            <a className="nav-link d-flex justify-content-start align-items-start" href="#">
//                <FontAwesomeIcon icon={faBell} style={{fontSize:'30',color:'black',opacity:0.3}}/>
//                <span class="badge badge-warning text-white">1</span>
//            </a>
//        </li>
//        <li>
//        <div style={{display:'flex',flexDirection:'row'}}>
//        <img src={logo2} width="60px" height="60px" />
//            <div class="dropdown" style={{display:'flex',flexDirection:'column',marginLeft:'0px'}}>
//                <h2  class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"style={{fontWeight:'bold',opacity:1}}>Welcome<br/> shopper stop</h2>
//            </div>
//       </div>
//     </li>
      
//    </ul>

// </nav> 
// </div>

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
  {/* <div class="container-fluid">
  
  <img src={intrakraft} width="60px" height="50px" />
  <div style={{display:'flex',flexDirection:'column',marginLeft:'10px'}}>
               <h2 style={{fontWeight:'bold',opacity:1}}>Intrakarft</h2>
                <p style={{fontSize:'14px',opacity:0.8}}>Correct. Interact. Transact.</p>
    </div> */}
    {/* <a class="navbar-brand" href="#" style={{listStyle:'none',color:'black'}}>Intrakarft</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <div class="collapse navbar-collapse" id="navbarSupportedContent" > */}
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

      {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">orders</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Brands</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Collections</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
          <FontAwesomeIcon icon={faShoppingBag}/>
        </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
          <FontAwesomeIcon icon={faBell}/>
              <span class="badge badge-warning text-white">1</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
          <img src={logo2} width="60px"/>
        </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Welcome to shopper<br/>shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
        */}
    {/* </div> */}
  {/* </div> */}
</nav>
</div>

    
  )
}

export default TopNavbar
