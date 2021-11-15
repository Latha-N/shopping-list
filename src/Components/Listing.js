                    import React,{useState} from "react";
                    import image1 from '../images/image1.jpg'
                    import image2 from '../images/image2.jpg'
                    import image3 from '../images/image3.jpg'
                    import image4 from '../images/image4.jpg'
                    import image5 from '../images/image5.jpg'
                    import image7 from '../images/image7.jpg'
                    import '../../src/App.css'

                    const Listing = (props) => {
                        const [selected,setSelected] = useState(0)
                        const [isDisabled, setDisabled] = useState(false);

                        const [name,setNames] = useState([{id:1,name:'Men'},{id:2,name:'Women'},{id:3,name:'Kids'},{id:4,name:'New'}])
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
                        

                        const clearAll = (()=>{
                            setNames([])
                        })

                        const handleRemove = (id) => {
                            const newList = name.filter((item) => item.id !== id);
                            setNames(newList);
                          }
                        

                    return (
                        <div className="bg-white">
                            <ul class="nav1 my-3 ">
                            <p class="nav-item"> <a class="nav-link text-dark" href="#">Home /</a> </p>
                            <p class="nav-item"> <a class="nav-link text-dark" href="#">Brand /</a> </p>
                            <p class="nav-item"> <a class="nav-link text-dark" href="#">Jack & jones /</a> </p>
                            <p class="nav-item"> <a class="nav-link text-dark" href="#"><strong>Catalogue</strong></a> </p>
                        </ul>
                        

                <div>
                    
                    <ul className="nav m-3">
                                {
                                    name.map((na)=>{
                                        return <li key={na.id} className="chip border">
                                            {na.name} 
                                            <span class="closebtn" onClick={()=>handleRemove(na.id)}>&times;</span>

                                    </li>
                                    })
                                }
                                <li className="nav-item">
                                <div className="alert alert-dismissible fade show  mr-2">
                            <a href="#" className="link-primary" onClick={clearAll}>Clear All</a></div></li>
                        </ul>
                    </div>
                    <div className="container">
                                <div className="row">
                                    {
                                    list.map((lis)=>{
                                        return <div key={lis.id} class="col-md-3">
                                                <span onMouseEnter={() => setSelected(lis.id)}
                                                      onMouseLeave={() => setSelected(0)}>
                                                      <img src={lis.image} width="100%" /></span>
                                                      {
                                                        lis.id==selected ?(
                                                            <div className=" shadow-lg mb-3 p-3 bg-body ">
                                                                <h5 className="small"><b>{lis.title}</b></h5>
                                                                <h5 className="small cost-space">MRP-{lis.mrp} <del>cost-{lis.cost}</del></h5>
                                                                <p className="card-text cost-space"><span class="text-primary">{lis.discount ? <span>{lis.discount}</span>: ''}</span> <b>{lis.dcost ? <span class="lis-color1">cost-{lis.dcost}</span>: ''}</b></p>
                                                                <input type="color" id="favcolor" name="favcolor" className="color-size" value="#ff9900" class="favcolor1"/>
                                                                <input type="color" id="favcolor" name="favcolor" className="color-size" value="#339966" class="favcolor1"/>
                                                                <input type="color" id="favcolor" name="favcolor" className="color-size" value="#ff3020" class="favcolor1"/>
                                                                <input type="color" id="favcolor" name="favcolor" className="color-size" value="#000077" class="favcolor1"/>
                                                                <div className="d-grid ">
                                                                <button className="btn btn-primary" type="button">view</button>
                                                            </div>
                                                        </div>
                                                            ):<div>
                                                                <div className="card-body">
                                                                    <p className="card-text text-secondary display-0" id="latha"><b>{lis.title}</b></p>
                                                                    <h5 className="card-title small cost-space">MRP-{lis.mrp} <del>cost-{lis.cost}</del></h5>
                                                                    <p className="card-text cost-space"><span className="text-primary">{lis.discount ? <span>{lis.discount}</span>: ''}</span> <b>{lis.dcost ? <span class="fw-bold ">cost-{lis.dcost}</span>: ''}</b></p>
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
