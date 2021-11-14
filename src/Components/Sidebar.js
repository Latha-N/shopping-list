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
            
                <div className="card img-fluid jens ">
                <img src={jeans} width="100%"/>
                </div>

                <div class="border-bottom m-4">
                    <h5 class="fw-bold ">Collections</h5>
                    <form class="my-3">
                        {
                            collections.map((coll)=>{
                                return <span><input type="checkbox" class="small"/><span class="p-2">{coll}</span><br/></span>
                            })
                        }
                    </form>
                </div>

                <div class="border-bottom  m-4 ">
                    <h5 class="fw-bold">Cotegories</h5>
                    <form>
                        {
                            categories.map((cat)=>{
                                return <span><input type="checkbox" class="small"/><span class="p-2">{cat}</span><br/></span>
                            })
                        }

                    </form>
                    
                </div>

                <div class="border-bottom m-4 ">
                    <h5 class="fw-bold">Occation</h5>
                    <form>
                    {
                        occation.map((occ)=>{
                            return <span><input type="checkbox" class="small"/><span class="p-2">{occ}</span><br/></span>
                        })
                    }
                    </form>
                </div>

                <div class="dropdown m-4 ">
                    <h5 className="fw-bold">Stories</h5>
                    <button class="btn btn-white dropdown-toggle border small" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Show White
                    </button>
                </div>

                <div>
                    <h5 class="fw-bold m-4">Colors</h5>
                    <form>
                        {
                            colors.map((colo)=>{
                                return <span><input type="color" value={colo}/></span>
                            })
                        }
                        <span>+24 more</span>
                </form>

                </div>
                <div className="m-4">
                    <h5 class="fw-bold">Stock</h5>
                    <form>
                        {
                            stock.map((sto)=>{
                                return <span><input type="radio" class="small"/><span class="p-2">{sto}</span><br/></span>
                            })
                        }
                    </form>
                </div>
            </div>

        )
    }

    export default Sidebar
