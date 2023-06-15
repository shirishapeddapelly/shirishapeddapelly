import React from "react";
import { Link } from "react-router-dom";
const Page8 = () => {
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
            src="https://media.istockphoto.com/id/1440861315/vector/security-of-login-and-password-for-user-account-tiny-people-holding-key-for-access.jpg?s=612x612&w=0&k=20&c=-LOaZNrZr8Z4CvB3cjSUxsmIFLiJfwstAQembFSgPEo="
            alt="..."
            style={{ width: 150, height: 100 }}
          />
          <h6>verify email address</h6>
          <div style={{ padding: 10 }}>
            <input type="text" style={{ width: 30 }} />
            <input type="text" style={{ width: 30 }} />
            <input type="text" style={{ width: 30 }} />
            <input type="text" style={{ width: 30 }} />
          </div>
          <Link to="/9">
            <button
              className="btn btn-outline-danger "
              style={{ width: 130, height: 30, padding: 2 }}
            >
              confirm the code
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Page8;
