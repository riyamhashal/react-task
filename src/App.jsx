import React from 'react'
import { Route, Routes } from 'react-router-dom'
import IPODetails from './IPODetails'
import IPODetailsMobile from './IPODetailsMobile'
import IPOList from './IPOList'

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<IPOList/>}/>
    
        <Route path='/ipo/:id' element={<IPODetails/>}/>
        <Route path='/ipo/:id' element={<IPODetailsMobile/>}/>
       </Routes>
    </div>
  )
}

export default App