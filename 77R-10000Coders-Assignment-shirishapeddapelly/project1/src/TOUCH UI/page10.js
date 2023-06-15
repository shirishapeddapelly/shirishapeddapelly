import React from "react";
import { Link } from "react-router-dom";
const Page10 = () => {
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
          MAIL ID
          <input type="email" placeholder="email" />
          <br />
          <div>
            <small>
              we need your gmail account to verify your account and to be able o
              get in TOUCHH
            </small>
            <small>
              by continuing you agree to our{" "}
              <span className="text-danger">Terms and conditions </span>and
              <span className="text-danger">privacy policy</span>
            </small>
          </div>
          <div>
            <Link to="/11">
              <button
                type="button"
                className="btn btn-light"
                style={{ width: 70 }}
              >
                next
              </button>
            </Link>
            <button
              type="button"
              className="btn btn-light"
              style={{ width: 70 }}
            >
              skip
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page10;
