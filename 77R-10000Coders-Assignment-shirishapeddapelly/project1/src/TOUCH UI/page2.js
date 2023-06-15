import React from "react";
import { Link } from "react-router-dom";
const Page2 = () => {
  return (
    <>
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
            src="https://cdn.w600.comps.canstockphoto.com/conversation-of-two-elderly-people-via-vector-clipart_csp80390000.jpg"
            alt="..."
            className="card-img-top"
            style={{ width: 150, height: 100 }}
          />
          <div>
            <h6>EARN EASY WITH OUR APP</h6>
          </div>
          <p className="card-text">
            loremipsum door sit amet. constetetur sadipscing elitr,sed diam
            nonumy eirmod tempor invidunt ut.
          </p>
          {/* <button className="btn btn-outline-danger" style={{ width: 100 }}>
            next
          </button> */}

          <Link to="/3">
            <button className="btn btn-outline-danger" style={{ width: 100 }}>
              next
            </button>
          </Link>
        </div>
      </div>
      {/* <div className="card position-absolute top-100 start-0 translate-middle">
        <nav>
          <li>
            <Link to="/">Start</Link>
          </li>
        </nav>
      </div> */}
      {/* <div className="card position-absolute bottom-0 start-100">
        <nav>
          <Link to="/">
            <button className="btn btn-outline-danger" style={{ width: 100 }}>
              start
            </button>
          </Link>
        </nav>
      </div> */}
    </>
  );
};
export default Page2;
