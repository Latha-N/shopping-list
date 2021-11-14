                    import React,{useState,useEffect} from "react";
                    import image1 from '../images/image1.jpg'
                    import image2 from '../images/image2.jpg'
                    import image3 from '../images/image3.jpg'
                    import image4 from '../images/image4.jpg'
                    import image5 from '../images/image5.jpg'
                    import image10 from '../images/image10.jpg'
                    import image7 from '../images/image7.jpg'
                    import image8 from '../images/image8.jpg'
                    import image9 from '../images/image9.jpg'
                    import '../../src/App.css'

                    const Listing = (props) => {
                        const [isShown, setIsShown] = useState(false);
                        const [selected,setSelected] = useState(0)
                        const [name,setNames] = useState(['men','women','kids','New'])
                        const [list,setList] = useState([
                            {id:1, image:image1,title:'Lace insert Velveteen Black Dress',mrp:'1000',cost:'699',discount:'30%off',dcost:'699'},
                            {id:2,image:image2,title:'Jack furnandies',mrp:'1000',cost:'699',discount:'30%off',dcost:'699'},
                        {id:3,image:image3,title:'keronatics jeans',mrp:'1000',cost:'699'},
                        {id:4,image:image4,title:'fasorts borns',mrp:'1000',cost:'699'},
                        {id:5,image:image5,title:' Velveteen Black Dress',mrp:'1000',cost:'699'},
                        {id:6,image:image7,title:'Lace insert Velveteen',mrp:'1000',cost:'699'},
                        {id:7,image:image4,title:'Black Dress',mrp:'1000',cost:'699'},
                        {id:8, image:image5,title:'Velveteen Black Dress',mrp:'1000',cost:'699'},
                        {id:9,image:image7,title:'Lace insert Velveteen Black',mrp:'1000',cost:'699'},
                        {id:10,image:image5,title:'insert Velveteen Black Dress',mrp:'1000',cost:'699'},
                        {id:11, image:image7,title:'Lace insert Velveteen ',mrp:'1000',cost:'699'},
                        {id:12,image:image3,title:'insert Velveteen Black Dress',mrp:'1000',cost:'699'},
                        {id:13,image:image3,title:'insert Velveteen Black Dress',mrp:'1000',cost:'699'},
                        {id:14,image:image3,title:'insert Velveteen Black Dress',mrp:'1000',cost:'699'}])
                    
                        // setSelected((id)=>{

                        // })

                        const clearAll = (()=>{
                            setNames([])
                        })

                    return (
                        <div class="bg-white">
                                <nav aria-label="breadcrumb" class="m-2">
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item ">Home</li>
                                <li class="breadcrumb-item">Brands</li>
                                <li class="breadcrumb-item">Jack & Jones</li>
                                <li class="breadcrumb-item">Catalogue</li>
                            </ul>
                            </nav>

                            <div>
                            <ul class="nav">
                                {
                                    name.map((na)=>{
                                        return <li class="nav-item">
                                        <div class="alert alert-dismissible fade show border p-3 rounded-pill">
                                        <button type="button" class="close" data-dismiss="alert">&times;</button>{na}
                                        </div>
                                    </li>
                                    })
                                }
                                <li class="nav-item">
                                <div class="alert alert-dismissible fade show  mr-2">
                            <a href="#" class="link-primary" onClick={clearAll}>Clear All</a></div></li>
                        </ul>
            

                        </div>
            
                        <div class="container">
                                <div class="row">
                                    {
                                    list.map((lis)=>{
                                                return <div key={lis.id} class="col-md-3">
                                                            <span onMouseEnter={() => setSelected(lis.id)}
                                                                onMouseLeave={() => setSelected(0)}>

                                                                <img src={lis.image} width="100%" /></span>
                                                                {
                                                                            lis.id==selected ?(
                                                                                <div class=" shadow-lg mb-3 p-3 bg-body ">
                                                                                
                                                                                <h5 class="small"><b>{lis.title}</b></h5>
                                                                                <h5 class="small cost-space">MRP-{lis.mrp} <del>cost-{lis.cost}</del></h5>
                                                                                <p class="card-text cost-space"><span class="text-primary">{lis.discount ? <span>{lis.discount}</span>: ''}</span> <b>{lis.dcost ? <span>cost-{lis.dcost}</span>: ''}</b></p>
                                                                                <input type="color" className='color-size '/>
                                                                                <input type="color" className='color-size'/>
                                                                                <input type="color" className='color-size'/>
                                                                                <input type="color" className='color-size'/>
                                                                                <div class="d-grid ">
                                                                                <button class="btn btn-primary" type="button">view</button>
                                                                             
                                                                                </div>
                                                                                </div>
                                                                            ):<div>
                                                                                <div class="card-body">
                                                                        <h5 class="card-title small " id="latha"><b>{lis.title}</b></h5>
                                                                        <h5 class="card-title small cost-space">MRP-{lis.mrp} <del>cost-{lis.cost}</del></h5>
                                                                        <p class="card-text cost-space"><span class="text-primary">{lis.discount ? <span>{lis.discount}</span>: ''}</span> <b>{lis.dcost ? <span class="fw-bold">cost-{lis.dcost}</span>: ''}</b></p>
                                                                        </div>
                                                                            </div>
                                                                            
                                                                        }
                                                                    

                                                                    </div>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                        )
                                        }

                    export default Listing
