import React from 'react'
import { Link } from 'react-router-dom'
import  data from './data.json'

const IPOList = () => {

  return (
    <div >
        <h1>IPO list page</h1>
      <table border='0' cellPadding='10'>
        <thead>
          <tr>
            <th>Company/ Issue date</th>
            <th>Issue size</th>
            <th>Price range</th>
            <th>Min invest/ qty</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item)=>(
            <tr key={item.id}>
            <td><Link style={{color : "gray",textDecoration:"none"}}  to={`/ipo/${item.id}`}>
             <img
                  src={`/images/${item.logo}`}
                  alt={item.name}
                  width="40"
                  height="40"
                  style={{ objectFit: "contain" , border:"1px solid #ccc", borderRadius:"50%" }}
                />
            {item.date}</Link></td>
            <td><strong>₹{item.size}</strong></td>
            <td><strong>₹{item.price}</strong></td>
            <td style={{color : "gray"}}>{item.lots}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default IPOList