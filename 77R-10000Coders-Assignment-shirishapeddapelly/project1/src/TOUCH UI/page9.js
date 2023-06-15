import React from "react";
import { Link } from "react-router-dom";
const Page9 = () => {
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
          <h6>new password</h6>
          <small>please write your new password</small>
          <input type="password" placeholder="password" />
          <br />
          <input type="password " placeholder="conform password" />
          <br />
          <Link to="/10">
            <button
              className="btn btn-outline-danger "
              style={{ width: 150, height: 30, padding: 2 }}
            >
              confirm password
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Page9;
