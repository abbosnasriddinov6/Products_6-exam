import React, { useEffect, useState } from 'react'
import './Newproduct.scss'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { box, exit, group, image2, profile, settings  } from '../../assets';
import axios from 'axios';
const Newproducts = ({editproduct, setEditproduct, setProducts}) => {

  const [post,setpost]=useState([{
    title:'',
    brand:'',
    price:'',
    discountPercentage:'',
    category:''
  }])
 



    const postproduct= async()=>{
      const res=await axios.post(`http://localhost:3000/products`,post)

    }

    const information = async () => {
     try {
      const str = await axios.get(`http://localhost:3000/products/${editproduct}`)
      const st = await str.data
      setInfos(st)
     } catch (error) {
      console.log(error);
     }
    }

    useEffect(() => {
      information()
    }, [editproduct])

 

    const addProduct = () => {
      if (editproduct!==''){
        axios.put(`http://localhost:3000/products/${editproduct}`, infos )
        setEditproduct('')
      }else{
        axios.post(`http://localhost:3000/products/`, infos )
        setEditproduct('')
      }
      navigate('/')
    }

  return (
    <div className='global'>
     <div className='whole'>
        <div className='theme'>
          <div className="navbar">
                <div className='Logo'>
                  <li><img className='logo' src={group} alt="" /></li>
                </div>
                <div className='nav'>
                  <NavLink to='/'><li><button><img className='img'  src={settings} alt="" /></button></li></NavLink>
                  <NavLink to='/login'><li> <button><img className='img'   src={profile} alt="" /></button></li></NavLink>
                  <li><img className='img'   src={box} alt="" /></li>
                </div>
          </div>
        </div>
        <div className='newproduct'>
          <div className='newproducts'>
            <div className='new'>
              <h1>New Products</h1>
              <h4>Main / Products / New Produts</h4>
            </div>
            <div className='newexit'>
              <Link to='/login'><div className='button'>
              <img src={exit} alt="" />Exit
              </div></Link>
            </div>
          </div>
          <div className='resultt'>
            <div className='ddiv'>
             <div className='center'>
              <button>Cancel</button>
              <div className='name'>
                <div className='flex'>
                  <h4>Name</h4>
                  <p>*</p>
                </div>
                <input onChange={(e)=>setpost({...post,title:e.target.value})} value={post.title} className='inputname' type="text" placeholder='Name...' name='title'  />
                <div className='put'>
                  <div className='mix'>
                  <div className='brand'>
                    <div className='flex'>
                      <h4>Title</h4>
                      <p>*</p>
                    </div>
                    <input  onChange={(e)=>setpost({...post, brand:e.target.value})} value={post.brand} 
                    type="text" placeholder='Title...' name='brand' />
                  </div>
                  <div className='brand'>
                    <div className='flex'>
                      <h4>Brand</h4>
                      <p>*</p>
                    </div>
                    <input   onChange={(e)=>setpost({...post, price:e.target.value})} value={post.price}  type="text" name='price' placeholder='Brand...' /> 
                  </div>
                  </div>
                  <div className='comment'>
                    <div className='flex'>
                      <h4>Description </h4>
                      <p>*</p>
                    </div>
                    <input   onChange={(e)=>setpost({...post, discountPercentage:e.target.value})} value={post.discountPercentage}  type="text" name='discountPercentage' placeholder='Comment...' />
                  </div>
                  <div className='price'>
                    <div className='pricee'>
                      <div className='flex'>
                        <h4>Price</h4>
                      </div>
                      <input onChange={(e)=>setpost({...post, category:e.target.value})} value={post.category}  type="text" name='category' placeholder='Price...' />
                    </div>
                    <div className='pricee'>
                      <div className='flex'>
                        <h4>Discount price</h4>
                      </div>
                      <input onChange={(e)=>setpost({...post, category:e.target.value})} value={post.category}   type="text" placeholder='Discount...' />
                    </div>
                  </div>
                </div>
              </div>
             </div>
            </div>
          </div>
          <div className='telegram'>
            <Link to='/'><button className='save' onClick={postproduct}>Save</button></Link>
            <button className='cancel'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newproducts