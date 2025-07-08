import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IPODetails from './IPODetails'
import IPOList from './IPOList'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<IPOList/>}/>
    
        <Route path='/ipo/:id' element={<IPODetails/>}/>
       </Routes>
    </div>
  )
}

export default App