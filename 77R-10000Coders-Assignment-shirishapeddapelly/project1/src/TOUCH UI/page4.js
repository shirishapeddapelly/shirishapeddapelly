import React from "react";
import { Link } from "react-router-dom";
const Page4 = () => {
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
            src="https://img.freepik.com/free-vector/connected-concept-illustration_114360-472.jpg?w=2000"
            alt="..."
            className="card-img-top"
            style={{ width: 150, height: 100 }}
          />
          <div>
            <h6>NETWORKING AND CONNECTING</h6>
          </div>
          <p className="card-text">
            loremipsum door sit amet. constetetur sadipscing elitr,sed diam
            nonumy eirmod tempor invidunt ut.
          </p>
          {/* <button className="btn btn-outline-danger" style={{ width: 100 }}>
            next
          </button> */}

          <Link
            to="/5
          "
          >
            <button className="btn btn-outline-danger" style={{ width: 150 }}>
              get started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Page4;
