import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate=useNavigate()
  let [input, setinput]=useState("")
  function handlejoin(){
navigate(`/room/${input}`)
  }
  return (
    <div id='home'>
      <input type="text" placeholder='Enter Room ID' value={input} onChange={(e)=>setinput(e.target.value )}/>
      <button onClick={handlejoin}>Join Now</button>
    </div>
  )
}

export default Home
