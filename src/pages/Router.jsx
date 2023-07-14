import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Api from '../Components/Api'
import Cart from '../Components/Cart'
import Todo from '../Components/Todo'
import ShoppingCart from '../Components/ShoppingCart'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/shopping/cart' element={<ShoppingCart/>}/>
            <Route path='/movies' element={<Api/>}/>
            <Route path='*' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Router