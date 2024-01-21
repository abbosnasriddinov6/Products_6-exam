import React from 'react'
import './Login.scss'
import { Link, NavLink } from 'react-router-dom';
import { box, exit, group,  profile, settings  } from '../../assets';


const Login = ({setUser}) => {

  return (
    <div>
         <div className='full'>
        <div className='theme'>
          <div className="navbar">
                <div className='Logo'>
                  <li><img className='logo' src={group} alt="" /></li>
                </div>
                <div className='nav'>
                  <Link to='/'><li><button><img className='img'  src={settings} alt="" /></button></li></Link>
                  <li><img className='img'   src={profile} alt="" /></li>
                  <Link to='/newproducts'><li><img className='img'   src={box} alt="" /></li></Link>
                </div>
          </div>
        </div>
        <div className='newproduct'>
          <div className='newproducts'>
            <div className='new'>
              <h1>Products</h1>
              <h4>Main / Products</h4>
            </div>
          </div>
          <div className='result'>
            <div className='div'>
              <div className='addyouruser'>
               <form>
                <h1 className='addyour'>Add your Name and Username please</h1>
                    <input placeholder='Name...' onChange={(e) => setUser(e.target.value)} type="text" name="name" id="" />
                    <input placeholder='Username...' onChange={(e) => setUser(e.target.value)} type="text" name="username" id="" />
                    <Link to='/'><button className='exitbutton'>Add</button></Link>
                </form>
              </div>
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

export default Login



