import React, { useEffect, useState } from 'react'
import './Header.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { box, edit, exit, group, image2, korzina, profile, settings  } from '../../assets';
import 'axios'
import { FaSearch } from "react-icons/fa";
import axios from 'axios';

const Header = ({user, editproduct, setEditproduct, products, setProducts}) => {
  const navg = useNavigate()
  
  const fetchProducts = async () => {
    try {
      const str = await axios.get(`http://localhost:3000/products`)
      const st = await str.data;
      setProducts(st)
    } catch (error) {
      console.log(error);
    }
  }
  const deleteProducts = (id) => {
    if (confirm ("Are you sure!!! do you want to delete ?")){
      try {
        axios.delete(`http://localhost:3000/products/${id}`)
      .catch(error => {
        console.error('Error deleting resource:', error);
      });
      console.log('salom');
      fetchProducts();
      fetchProducts()
    }catch (error) {
        console.log(error)
      }
      } 
  }

  const editProducts = (id) => {
    setEditproduct(id)
    navg('/newproducts')
  }
  
  useEffect(() => {
    fetchProducts();
  }, [])

  // useEffect(() => {
  //   deleteProducts()
  // },[])

  const [selectcategory, setSelectcategory] = useState("All")
  const [search, setSearch] = useState ('')
  const handling = (e) => {
    setSelectcategory(e.target.value)
  }

  const handlingSearch = (e) => {
    setSearch(e.target.value)
  }
  const filterProducts = selectcategory === "All" ? products : products.filter((product) => product.category === selectcategory);

  // const searchProducts = search ? filterProducts.filter(
  //   (product) => 
  //   product.title.toLowercase().includes(search.toLowerCase()) ||
  //   product.brand.toLowercase().includes(search.toLowerCase()) ||
  //   product.price.toLowercase().includes(search.toLowerCase()) ||
  //   product.discountPercentage.toLowercase().includes(search.toLowerCase()) ||
  //   product.category.toLowercase().includes(search.toLowerCase())
  //   )
  //   : filterProducts;


  
  return (
    <div>
      <div className='globe'>
        <div className='nav'>
          <div className="navbarr">
                <div className='Logo'>
                  <li><img className='logo' src={group} alt="" /></li>
                </div>
                <div className='nav'>
                  <li><button><img className='img'  src={settings} alt="" /></button></li>
                  <li><Link to='login'><img className='img'   src={profile} alt="" /></Link></li>
                  <Link to='newproducts'><li><img className='img'   src={box} alt="" /></li> </Link>
                </div>
          </div>
        </div>
        <div className='newproduct'>
          <div className='newproducts'>
            <div className='new'>
              <h1>Products</h1>
              <h4>Main / Products</h4>
            </div>
            <div className='neww'>
              <h2>{user?`username ${user}`:null}</h2>
            </div>
            <div className='new'>
              <Link to='login'>
                <div className='button'>
                  <img src={exit} alt="" />
                  <h3>Exit</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className='resultt'>
            <div className='div'>
              <div className='navbarrr'>
                <h1>All Products</h1>

                {/* <select onChange={handling} value={selectcategory} name="selectcategory" id="select">
                  <option value="All">All</option>
                  <option value="laptops">laptops</option>
                  <option value="fragrances">fragrances</option>
                  <option value="skincare">skincare</option>
                  <option value="groceries">groceries</option>
                  <option value="groceries">Groceries</option>
                </select> */}
                <div className='searchblok'>
                <form onChange={handlingSearch} >
                  <input type="search" placeholder='Search...' />
                </form>
                <FaSearch />
                </div>
              </div>
              <div className='title'>
                <div className='checknow'>
                  <input type="checkbox" />
                  <h3>Name</h3>
                </div>
                <div className='text'>
                  <h3>Model</h3>
                  <h3>Brand</h3>
                  <h3>Price</h3>
                  <h3>Discount</h3>
                  <h3>Mobile</h3>
                </div>
                <div className='empty'>
                 
                </div>
              </div>
             {products?products.filter((product)=>{
                if(search===''){
                    return product
                }else if(product.title.toLowerCase().includes(search.toLowerCase())){
                    return product
                }
            }) 
            .map((product, index)=>(
                <div key={product.id} className="cardsss">
                        <div className='first'>
                          <input className='checkit' type="checkbox" />
                          <h3>Product {index}</h3>
                        </div>
                    <div className='texts'>
                        <h3>{product.title}</h3>
                        <h3>{product.brand}</h3>
                        <h3>{product.price}</h3>
                        <h3>{product.discountPercentage}</h3>
                        <h3>{product.category}</h3>
                    </div>
    
                      <div className='editanddelete'>
                        <img onClick={()=>editProducts(product.id)}  src={edit} alt="" />
                        <button onClick={() => deleteProducts(product.id)}><img src={korzina} alt="" /></button>
                      </div>
                
                </div>
               ))
                :<div className='come'>
                  <div className='without'>
                    <h1>You don't produce any products yet</h1>
                    <img src={image2} alt="" />
                  <Link to='newproducts'><button>Create your first product</button></Link>
                  </div>
                </div>
               }  
                
              
            </div>
            <div className='user'>
              <a href="https://t.me/nasriddinov04">© Abbosbek 2024 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header