import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomId' element={<Video/>}/>
    </Routes>
  )
}

export default App
