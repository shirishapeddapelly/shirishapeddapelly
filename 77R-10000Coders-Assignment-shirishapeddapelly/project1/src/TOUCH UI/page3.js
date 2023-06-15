import React from "react";
import { Link } from "react-router-dom";
const Page3 = () => {
  return (
    <>
      {" "}
      <div>
        <div
          className="card position-absolute top-50 start-50 translate-middle"
          style={{
            width: 200,
            padding: 20,
            height: 350,
            background: "Azure",
          }}
        >
          <img
            src="https://cdn2.vectorstock.com/i/1000x1000/07/51/graphic-cartoon-character-currency-exchange-vector-36370751.jpg"
            alt="..."
            className="card-img-top"
            style={{ width: 150, height: 100 }}
          />
          <div>
            <h6>EASY WAY TO TRADE AND BUY</h6>
          </div>
          <p className="card-text">
            loremipsum door sit amet. constetetur sadipscing elitr,sed diam
            nonumy eirmod tempor invidunt ut.
          </p>
          {/* <button className="btn btn-outline-danger" style={{ width: 100 }}>
            next
          </button> */}

          <Link to="/4">
            <button className="btn btn-outline-danger" style={{ width: 150 }}>
              get started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Page3;
