import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/products/Header'
import Newproducts from './components/newproduct/Newproducts'
import Login from './components/login/Login'


const App = () => {
 const [user, setUser] = useState('')
 const  [editproduct, setEditproduct] = useState('')
 const [products, setProducts] =useState([])


  return (
    <div>
     <Router>
      {/* <Header/> */}
      <Routes>

        <Route path='/' element={<Header user={user} products={products} setProducts={setProducts} editproduct={editproduct} setEditproduct={setEditproduct}/>}/>
        <Route path='newproducts' element={<Newproducts setProducts={setProducts} editproduct={editproduct}/>}/>
        <Route path='login' element={<Login setUser={setUser}/>}/>
      </Routes>
     </Router>
    </div>
  )
}

export default App