import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
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
          src="https://img.freepik.com/premium-vector/two-people-are-chating-texting-using-mobile-phones-sitting-with-their-backs-each-other_651415-217.jpg?w=2000"
          alt="..."
          className="card-img-top"
          style={{ width: 150, height: 100 }}
        />
        <div>
          <h6>FIND FRIENDS AND EXPORE</h6>
        </div>
        <p className="card-text">
          loremipsum door sit amet. constetetur sadipscing elitr,sed diam nonumy
          eirmod tempor invidunt ut.
        </p>

        <Link to="/2">
          <button className="btn btn-outline-danger" style={{ width: 100 }}>
            start
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Page1;
