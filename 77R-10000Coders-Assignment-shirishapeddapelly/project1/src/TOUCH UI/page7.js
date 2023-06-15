import React from "react";
import { Link } from "react-router-dom";
const Page7 = () => {
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt6g1DF9tfpl1MBgaL8ZTScMJiWgwXrpUpddFdmB1qLA&s"
            alt="..."
            className="card-img-top"
            style={{ width: 150, height: 100 }}
          />
          <h5>forgot password?</h5>
          <small>
            Please enter your mobile number receive a conformation code to set a
            new password
          </small>

          <input type="number" placeholder="enter mobile number" />
          <br />
          <center>
            <Link to="/8">
              <button
                className="btn btn-outline-danger "
                style={{ width: 90, height: 30, padding: 2 }}
              >
                confirm
              </button>
            </Link>
          </center>
        </div>
      </div>
    </>
  );
};
export default Page7;
