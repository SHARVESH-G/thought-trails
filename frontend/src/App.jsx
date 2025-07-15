import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Blog from './pages/blog/blog'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:id' element={<Blog/>}/>
    </Routes>
  )
}

export default App