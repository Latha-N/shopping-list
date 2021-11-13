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
                    const [name,setNames] = useState(['men','women','kids','New'])
                    const [list,setList] = useState([{image:image1,mrp:'1000',cost:'699'},{image:image2,mrp:'1000',cost:'699'},
                    {image:image2,mrp:'1000',cost:'699'},{image:image2,mrp:'1000',cost:'699'}])

                    const clearAll = (()=>{
                        setNames([])
                    })



                return (
                    <div class="bg-white">
                            <nav aria-label="breadcrumb" class="m-2">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item ">Home</li>
                            <li class="breadcrumb-item">Brands</li>
                            <li class="breadcrumb-item">Jack & Jones</li>
                            <li class="breadcrumb-item">Catalogue</li>
                        </ol>
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
        

                        <div class="row m-1">
                        <div class="card col-md-3 img-fluid jens border-0 tooltop">
                            <span onMouseEnter={() => setIsShown(true)}
                                    onMouseLeave={() => setIsShown(false)}>
                        <img src={image1} width="100%" /></span>
                        <div class="card-body">
                                <h5 class="card-title small" id="latha"><b>Lace insert Velveteen Black Dress</b></h5>
                                <h5 class="card-title small ">MRP-1249 <del>cost-945</del></h5>
                                <p class="card-text"><span class="text-primary">30% off</span> <b>cost-661</b></p>
                                </div>
                        {
                            isShown && (
                                <div class=" shadow-lg p-3 mb-5 bg-body rounded" >
                                <div>
                                <h5><b>Lace insert Velveteen Black Dress</b></h5>
                                <h5>MRP-1249 <del>cost-945</del></h5>
                                <p><span class="text-primary">30% off</span> <b>cost-661</b></p>
                                <input type="color"/>
                                <input type="color"/>
                                <input type="color"/>
                                <input type="color"/>
                                <div class="d-grid ">
                                <button class="btn btn-primary" type="button">view</button>
                            </div>
                                </div>
                                </div>
                            )
                        }
                    </div>
                        

                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image2} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>Women blue jeans</b></h5>
                            <h5 class="card-title">MRP-1000 cost-945</h5>
                        </div>
                        </div>

                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image3} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>Alan Jones ClothingMen's Fleece Hooded Hoodie</b></h5>
                            <h5 class="card-title">MRP-1249 cost-945</h5>
                        </div>
                        </div>

                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image4} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>Alan Jones ClothingSolid Taped Cotton Zipper </b></h5>
                            <h5 class="card-title">MRP-1299 cost-999</h5>
                        </div>
                        </div>

                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image5} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>NammaBabyCotton Front Open Full Sleeves Jhabla Vest- Tshirt - </b></h5>
                            <h5 class="card-title">MRP-699 cost-599</h5>
                        </div>
                        </div>

                        <div class="card col-md-3  img-fluid jens border-0">
                        <img src={image10} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>NammaBabyCotton Front Open Full Sleeves Jhabla Vest- Tshirt </b></h5>
                            <h5 class="card-title">MRP-999 cost-599</h5>
                        </div>
                        </div>

                        

                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image2} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>NammaBabyCotton Front Open  </b></h5>
                            <h5 class="card-title">MRP-799 cost-399</h5>
                        </div>
                        </div>

                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image1} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>linenaffairs Baby Washcloths for Newborn  </b></h5>
                            <h5 class="card-title">MRP-799 cost-499</h5>
                        </div>
                        </div>
                        
                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image1} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>linenaffairs Baby Washcloths for Newborn  </b></h5>
                            <h5 class="card-title">MRP-799 cost-499</h5>
                        </div>
                        </div>
                        
                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image1} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>linenaffairs Baby Washcloths for Newborn  </b></h5>
                            <h5 class="card-title">MRP-799 cost-499</h5>
                        </div>
                        </div>
                        
                        <div class="card col-md-3 img-fluid jens border-0">
                        <img src={image1} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>linenaffairs Baby Washcloths for Newborn  </b></h5>
                            <h5 class="card-title">MRP-799 cost-499</h5>
                        </div>
                        </div>
                        
                        <div class="card col-md-3 img-fluid jens ">
                        <img src={image1} width="100%" />
                        <div class="card-body">
                        <h5 class="card-title"><b>linenaffairs Baby Washcloths for Newborn  </b></h5>
                            <h5 class="card-title">MRP-799 cost-499</h5>
                        </div>
                        </div>

                        <div class="card flex-row col-md-3 img-fluid jens" class="d-flex justify-content-between m-1">
                            {
                                list.map((lists)=>{
                                    return <div>
                                        <img src={lists.image} width="100%" />
                                    </div>
                                })
                            }
                        
                        </div>
                        

                        
                        
                        
                        </div>
                        
                                
                            
                    </div>
                )
                }

                export default Listing
