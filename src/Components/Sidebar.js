    import React, { useState } from 'react'
    import jeans from '../images/jeans.png'

    const Sidebar = () => {
        const [collections,setCollection] = useState(['Men','Women','Kids','Footwear','Accesories'])
        const [categories,setCategories] = useState(['All Collections','Dresses','JumpSuits','Winter Wear','Tops'])
        const [occation,setOccation] = useState(['All Collections','Casual','Formal','Party'])
        const [colors,setColors] = useState(['#0080ff','#ffffff','#cc0099','#ff80bf','#339966','#ff6088','#dd0567','#ff0099','#gg9060','#33ff33','#ff9900','#ff3020'])
        const [stock,setStock] = useState(['All','New','Old'])

    return (
        <div class="bg-white">
            <div className="container">
            
            <div className="card img-fluid jens ">
                <img src={jeans} width="100%"/>
                </div>
                <div className="border-bottom m-4">
                    <h5 className="fw-bold ">Collections</h5>
                    <form className="my-3">
                        {
                            collections.map((coll,i)=>{
                                return <span><input key={i} type="checkbox" className="small"/><span className="p-2">{coll}</span><br/></span>
                            })
                        }
                    </form>
                </div>
                <div className="border-bottom  pb-3 m-4">
                    <h5 className="fw-bold">Cotegories</h5>
                    <form>
                        {
                            categories.map((cat,i)=>{
                                return <span><input key={i} type="checkbox" className="small"/><span className="p-2">{cat}</span><br/></span>
                            })
                        }
                    </form>
                </div>
                <div className="border-bottom m-4 pb-3">
                    <h5 className="fw-bold">Occation</h5>
                    <form>
                    {
                        occation.map((occ,i)=>{
                            return <span><input key={i} type="checkbox" className="small"/><span className="p-2">{occ}</span><br/></span>
                        })
                    }
                    </form>
                </div>
                <div className="dropdown m-4 pb-3 border-bottom">
                    <h5 className="fw-bold">Stories</h5>
                    <button className="btn btn-white dropdown-toggle border small w-100" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Show White
                    </button>
                </div>
                <div className="m-4 pb-3 border-bottom">
                    <h5 className="fw-bold  " >Colors</h5> 
                    <form>
                        {
                            colors.map((colo,i)=>{
                                return <span><input key={i} type="color" value={colo} class="favcolor2"/></span>
                            })
                        }
                        <span className="text-primary p-3 center">+24 more</span>
                </form>
                </div>
                <div className="m-4 pb-5">
                    <h5 className="fw-bold ">Stock</h5>
                    <form>
                        {
                            stock.map((sto,i)=>{
                                return <span><input key={i} type="radio" className="small"/><span className="p-2">{sto}</span><br/></span>
                            })
                        }
                    </form>
                </div>
            </div>
            </div>
        )
    }

    export default Sidebar
