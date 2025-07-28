import React from "react";
import { useParams, Link } from "react-router-dom";
import { RiFileDownloadLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";
import logo from "./images/logo.png";

const IPODetailPage = () => {
  const { id } = useParams();

  return (
    <>
      <div className="ipo-container no-border">
        <div className="ipo-header">
          <button className="back-button">
            <Link to="/">
              <FaChevronLeft />
            </Link>
          </button>
          <div className="company-info">
            <img src={logo} alt="OYO" className="company-logo" />
            <div className="text-info">
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
              <span style={{ color: "gray" }}>Issue size</span>
              <br />
              <strong>₹3,600 – 3,700 Cr.</strong>
            </div>
            <div>
              <span style={{ color: "gray" }}>Price range</span>
              <br />
              <strong>₹100 - 200</strong>
            </div>
            <div>
              <span style={{ color: "gray" }}>Minimum amount</span>
              <br />
              <strong>₹50,000</strong>
            </div>
            <div>
              <span style={{ color: "gray" }}>Lot size</span>
              <br />
              <strong>150 shares/lots</strong>
            </div>
            <div>
              <span style={{ color: "gray" }}>Issue dates</span>
              <br />
              <strong>12 Dec - 15 Dec 22</strong>
            </div>
            <div>
              <span style={{ color: "gray" }}>Listed on</span>
              <br />
              <strong>15 Dec 22</strong>
            </div>
            <div>
              <span style={{ color: "gray" }}>Listed price</span>
              <br />
              <strong>₹150</strong>
            </div>
            <div>
              <span style={{ color: "gray" }}>Listing gains</span>
              <br />
              <span className="loss">₹10 (10.0%)</span>
            </div>
          </div>
        </div>
        <div className="ipo-box">
          <h2 className="heading">IPO timeline</h2>
          <div className="ipo-timeline">
            <div className="timeline-step">
              <div className="tick-line">
                <div className="tick">✔</div>
              </div>
              <p>
                Bidding starts
                <br />
                <span>12 Dec 2023</span>
              </p>
            </div>

            <div className="timeline-step">
              <div className="tick-line">
                <div className="tick">✔</div>
              </div>
              <p>
                Bidding ends
                <br />
                <span>15 Dec 2023</span>
              </p>
            </div>

            <div className="timeline-step">
              <div className="tick-line">
                <div className="tick">✔</div>
              </div>
              <p>
                Allotment finalization
                <br />
                <span>18 Dec 2023</span>
              </p>
            </div>

            <div className="timeline-step">
              <div className="tick-line">
                <div className="tick">✔</div>
              </div>
              <p>
                Refund initiation
                <br />
                <span>18 Dec 2023</span>
              </p>
            </div>

            <div className="timeline-step">
              <div className="tick-line">
                <div className="tick">✔</div>
              </div>
              <p>
                Demat transfer
                <br />
                <span>18 Dec 2023</span>
              </p>
            </div>

            <div className="timeline-step">
              <div className="tick-line">
                <div className="tick">✔</div>
              </div>
              <p>
                Listing date
                <br />
                <span>21 Dec 2023</span>
              </p>
            </div>
          </div>
        </div>

        <div className="about-company">
          <h3>OYO Private Limited</h3>
          <p style={{color:'gray'}}>
            Lorem ipsum dolor sit amet. Ea reprehenderit quia cum consequatur
            deleniti rem odio enim sit corporis g aliasum est quisquam magni ea
            aliquid accusantium aspernatur ducimus, illo ea et quos at.
          </p>
          <p style={{color:'gray'}}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
            necessitatibus vero! Magnam accusantium, aspernatur quia laboriosam
            aliquid accusantium aspernatur ducimus, voluptatem dolor nam sunt
            culpa ab perspiciatis ullam accusamus modi, dicta inventore neque
            doloremque provident est unde, magni, perferendis ut iure?{" "}
            <span
              style={{
                color: "#EC5800",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Read more.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default IPODetailPage;
