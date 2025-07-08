import React from "react";
import { useParams, Link } from "react-router-dom";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import logo from "./images/logo.png";

const IPODetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <div className="ipo-container">
        <div className="ipo-header">
          <button className="back-button">
            <Link to="/">
              <FaChevronLeft />
            </Link>
          </button>
          <div className="company-info">
            <img src={logo} alt="OYO" className="company-logo" />
            <div>
              <h2 className="company-name">OYO</h2>
              <span className="company-sub">OYO Private Limited</span>
            </div>
          </div>
          <span className="download">
            <RiFileDownloadLine />
          </span>
          <button className="apply-button">Apply now</button>
        </div>

        <div className="ipo-container">
          <h2>IPO details</h2>
          <div className="ipo-details-box">
            <div>
              <span style={{color:"gray"}}>Issue size</span>
              <br />
              <strong>₹3,600 – 3,700 Cr.</strong>
            </div>
            <div>
              <span style={{color:"gray"}}>Price range</span>
              <br />
               <strong>₹100 - 200</strong>
            </div>
            <div>
              <span style={{color:"gray"}}>Minimum amount</span>
              <br />
              <strong>₹50,000</strong>
            </div>
            <div>
              <span style={{color:"gray"}}>Lot size</span>
              <br />
              <strong>150 shares/lots</strong>
            </div>
            <div>
              <span style={{color:"gray"}}>Issue dates</span>
              <br />
              <strong>12 Dec - 15 Dec 22</strong>
            </div>
            <div>
              <span style={{color:"gray"}}>Listed on</span>
              <br />
              <strong>15 Dec 22</strong>
            </div>
            <div>
              <span style={{color:"gray"}}>Listed price</span>
              <br />
              <strong>₹150</strong>
            </div>
            <div>
              <span style={{color:"gray"}}>Listing gains</span>
              <br />
              <span className="loss">₹10 (10.0%)</span>
            </div>
          </div>
        </div>
        <h2 className="heading">IPO timeline</h2>
          <div className="ipo-timeline">
            <div className="timeline-step">
              <div className="tick">✔</div>
              <p style={{fontWeight:"bold",fontSize:"15px"}}>
                Bidding starts
                <br />
                <span style={{color:"gray"}}>12 Dec 2023</span>
              </p>
            </div>
            <div className="timeline-step">
              <div className="tick">✔</div>
              <p style={{fontWeight:"bold",fontSize:"15px"}}>
                Bidding ends
                <br />
                <span style={{color:"gray"}}>15 Dec 2023</span>
              </p>
            </div>
            <div className="timeline-step">
              <div className="tick">✔</div>
              <p style={{fontWeight:"bold",fontSize:"15px"}}>
                Allotment finalization
                <br />
                <span style={{color:"gray"}}>18 Dec 2023</span>
              </p>
            </div>
            <div className="timeline-step">
              <div className="tick">✔</div>
              <p style={{fontWeight:"bold",fontSize:"15px"}}>
                Refund initiation
                <br />
                <span style={{color:"gray"}}>18 Dec 2023</span>
              </p>
            </div>
            <div className="timeline-step">
              <div className="tick">✔</div>
              <p style={{fontWeight:"bold",fontSize:"15px"}}>
                Demat transfer
                <br />
                <span style={{color:"gray"}}>18 Dec 2023</span>
              </p>
            </div>
            <div className="timeline-step">
              <div className="tick">✔</div>
              <p style={{fontWeight:"bold",fontSize:"15px"}}>
                Listing date
                <br />
                <span style={{color:"gray"}}>21 Dec 2023</span>
              </p>
            </div>
          </div>

        <div className="about-company">
          <h3>OYO Private Limited</h3>
          <p>
            Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequatur
            deleniti rem odio enim sit corporis g aliasum est quisquam magni ea
            sequi maxime. Aut incidunt adipisci in fuga necessitatibus aut
            inventore enim. libero porro rerum asperiores ea neque
            voluptatem quae tenetur laborum inventore blanditiis nisi? Quo,
            placeat commodi maiores fugit natus quae eaque! Tenetur neque, nam,
            aliquid accusantium aspernatur ducimus, illo ea et quos at
            architecto repudiandae quia voluptate quisquam laboriosam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            necessitatibus vero! Magnam accusantium, aspernatur quia laboriosam
            a fuga corporis adipisci enim repellat rerum suscipit accusamus
            deleniti at ea iste error, odit minima numquam sunt omnis cumque ut
            consequatur quaerat nulla? Ex magni ipsa sequi! Numquam aliquid nemo
            iure voluptatibus! Repellendus aspernatur, sequi porro consequatur
            aliquid expedita reprehenderit eligendi! Minima tenetur provident
            nemo hic, accusantium recusandae autem ex distinctio nesciunt cum
            voluptatum inventore. Doloribus vitae soluta officiis cupiditate
            accusamus similique velit, libero porro rerum asperiores ea neque
            voluptatem quae tenetur laborum inventore blanditiis nisi? Quo,
            placeat commodi maiores fugit natus quae eaque! Tenetur neque, nam,
            aliquid accusantium aspernatur ducimus, illo ea et quos at
            architecto repudiandae quia voluptate quisquam laboriosam.
            Voluptates ipsa iusto porro expedita nulla deserunt voluptatem dolor
            nam sunt culpa ab perspiciatis ullam accusamus modi, dicta inventore
            neque doloremque provident est unde, magni, perferendis ut iure?
          </p>
        </div>
      </div>
    </>
  );
};

export default IPODetailPage;
