import React from "react";
import { Link } from "react-router-dom";
import data from "./data.json";

const IPOList = () => {
  return (
    <div className="list-container">
      <h1>IPO list page</h1>
      <table border="0" cellPadding="10" style={{ borderCollapse: 'collapse' ,width:"100%"}}>
        <thead>
          <tr>
            <th style={{width:"20%"}}>Company/ Issue date</th>
            <th className="centered-column" style={{ width: "20%", textAlign: "center" }}>Issue size</th>
            <th className="centered-column" style={{ width: "20%", textAlign: "center" }}>Price range</th>
            <th className="centered-column" style={{ width: "25%", textAlign: "center" }}>Min invest/ qty</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              style={{
                borderBottom: "1px solid #eee",
              }}
            >
              <td style={{ padding: "16px 10px" }}>
                <Link
                  style={{ color: "gray", textDecoration: "none" }}
                  to={`/ipo/${item.id}`}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <img
                      src={`/images/${item.logo}`}
                      alt={item.name}
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          fontWeight: "bold",
                          fontSize: "16px",
                          color: "black",
                        }}
                      >
                        {item.name}
                      </span>
                      <span style={{ color: "gray", fontSize: "14px" }}>
                        {item.date}
                      </span>
                    </div>
                  </div>
                </Link>
              </td>
              <td className="centered-column">
                <strong> <span style={{fontSize:"16px", color:'#1a1a1a', fontWeight:"bold",}}>₹</span> {item.size}</strong>
              </td>
              <td className="centered-column">
                <strong><span style={{fontSize:"16px",}}>₹</span> {item.price}</strong>
              </td>
              <td>
                <div className="centered-column">
                <div style={{ display: "flex", flexDirection: "column",alignItems: "flex-start",
                margin: "0 auto",
                width: "max-content", }}>
                  <span
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      color: "black",
                    }}
                  >
                    {item.shares}
                  </span>
                </div>
                <span style={{ color: "gray", fontSize: "14px", paddingLeft: "2px"  }}>
                    {item.lots}
                  </span>
              </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IPOList;
