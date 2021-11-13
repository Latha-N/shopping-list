
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import TopNavbar from './Components/TopNavBar';
import Footer from './Components/Footer';
import Listing from './Components/Listing';
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div class="container-fluid">
        <div>
        <TopNavbar/>
    </div>
    <div >
        <div class="row bg-light">
            <div class="col-md-3 m-3">
            <Sidebar/>
            </div>
            <div class="col-md-8 m-3">
            <Listing/>
            </div>
    </div>

    </div>
        <div>
        <Footer/>
        </div>  
    </div>
  )
}

export default App
