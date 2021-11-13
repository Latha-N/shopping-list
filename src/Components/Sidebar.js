    import React, { useState } from 'react'
    import jeans from '../images/jeans.png'

    const Sidebar = () => {
        const [collections,setCollection] = useState(['Men','Women','Kids','Footwear','Accesories'])
        const [categories,setCategories] = useState(['All Collections','Dresses','JumpSuits','Winter Wear','Tops'])
        const [occation,setOccation] = useState(['All Collections','Casual','Formal','Party'])
        const [colors,setColors] = useState(['0080ff','ffffff','#cc0099','#ff80bf','#339966','#ff6088','#dd0567','#ff0099','#gg9060','#33ff33','#ff9900','#ff3020'])
        const [stock,setStock] = useState(['All','New','Old'])

    return (
        <div class="container-fluid bg-white">
            
                <div class="card img-fluid jens">
                <img src={jeans} width="100%"/>
                </div>

                <div class="border-bottom  ">
                    <h1>Collections</h1>
                    <form>
                        {
                            collections.map((coll)=>{
                                return <span><input type="checkbox" class="small"/>{coll}<br/></span>
                            })
                        }
                    </form>
                </div>

                <div class="border-bottom   ">
                    <h1>Cotegories</h1>
                    <form>
                        {
                            categories.map((cat)=>{
                                return <span><input type="checkbox" class="small"/>{cat}<br/></span>
                            })
                        }

                    </form>
                    
                </div>

                <div class="border-bottom  ">
                    <h1>Occation</h1>
                    <form>
                    {
                        occation.map((occ)=>{
                            return <span><input type="checkbox" class="small"/>{occ}<br/></span>
                        })
                    }
                    </form>
                </div>

                <div class="dropdown ">
                    <h1>Stories</h1>
                    <button class="btn btn-white dropdown-toggle border small" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Show White
                    </button>
                </div>

                <div>
                    <h1>Colors</h1>
                    <form>
                        {
                            colors.map((colo)=>{
                                return <span><input type="color" value={colo}/></span>
                            })
                        }
                        <span>+24 more</span>
                </form>

                </div>
                <div>
                    <h1>Stock</h1>
                    <form>
                        {
                            stock.map((sto)=>{
                                return <span><input type="radio" class="small"/>{sto}<br/></span>
                            })
                        }
                    </form>
                </div>
            </div>

        )
    }

    export default Sidebar
