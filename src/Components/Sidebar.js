import React from 'react'
import jack from '../jack.jpg'
import jeans from '../images/jeans.png'

const Sidebar = () => {
  return (
    <div class="container-fluid bg-white">
        
            <div class="card img-fluid jens">
            <img src={jeans} width="100%"/>
            </div>

            <div class="border-bottom  ">
                <h1 style={{marginLeft:"1rem"}}>Collections</h1>
                <form style={{marginLeft:"1rem"}}>
                <input type="checkbox"/> Men <br/>
                <input type="checkbox"/> Women <br/>
                <input type="checkbox"/> Kids <br/>
                <input type="checkbox"/> Footwear <br/>
                <input type="checkbox"/> Accessories <br/>
                </form>
            </div>
            <div class="border-bottom   ">
                <h1 style={{marginLeft:"1rem"}}>Cotegories</h1>
                <form style={{marginLeft:"1rem"}}>
                <input type="checkbox"/> All Collections <br/>
                <input type="checkbox"/> Dresses <br/>
                <input type="checkbox"/> Jumpsuits <br/>
                <input type="checkbox"/> Winter Wear <br/>
                <input type="checkbox"/> Tops<br/>
                </form>
                
            </div>
            <div class="border-bottom  ">
                <h1 style={{marginLeft:"1rem"}}>Occation</h1>
                <form style={{marginLeft:"1rem"}}>
                <input type="checkbox"/> All Collections<br/>
                <input type="checkbox"/> Casual <br/>
                <input type="checkbox"/> Formal <br/>
                <input type="checkbox"/> Party <br/>
                </form>
            </div>
            <div class="dropdown ">
                <h1 style={{marginLeft:"1rem"}}>Stories</h1>
                <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{marginLeft:"1rem"}}>
                 Show White
                </button>
            </div>
            <div>
                <h1 style={{marginLeft:"1rem"}}>Colors</h1>
                <form>
                <input type="color" value="#0080ff"/>                
                <input type="color" value="#ffffff"/>
                <input type="color" value="#cc0099"/>
                <input type="color" value="#ff80bf"/>
                <input type="color" value="#339966"/>
                <input type="color" value="#ff6088"/>
                <input type="color" value="#dd0567"/>
                <input type="color" value="#ff0099"/>
                <input type="color" value="#gg9060"/>
                <input type="color" value="#33ff33"/>
                <input type="color" value="#ff9900"/>
                <input type="color" value="#ff3020"/>

            </form>

            </div>
            <div>
                <h1 style={{marginLeft:"1rem"}}>Stock</h1>
                <form style={{marginLeft:"1rem"}}>
                <input type="radio"/> All<br/>
                <input type="radio"/>New <br/>
                <input type="radio" />old <br/>
                </form>
            </div>
    
    
    
    </div>



      
      
  )
}

export default Sidebar
