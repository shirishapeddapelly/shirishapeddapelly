import React from "react";
import { Link } from "react-router-dom";
const Page6 = () => {
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
          <h4>create </h4>
          <h4>Account</h4>
          <center>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3004/3004613.png"
              alt=".."
              style={{ width: 20, height: 20 }}
            />
            <h6>upload a picture</h6>
          </center>

          <div>
            <img
              src="https://img.freepik.com/premium-vector/phone-call-icon-isolated-white-background-telephone-symbol-vector-illustration_548264-469.jpg?w=2000"
              style={{ width: 20, height: 20 }}
            />
            <input
              type="number"
              placeholder="phonenumber"
              style={{ width: 120 }}
            />
          </div>

          <div>
            <label for="name">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                style={{ width: 20, height: 20 }}
                alt="..."
              />
            </label>

            <input type="name" placeholder="fullName" style={{ width: 120 }} />
          </div>

          <div>
            <label for="name">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                style={{ width: 20, height: 20 }}
                alt="..."
              />
            </label>

            <input type="name" placeholder="username" style={{ width: 120 }} />
          </div>

          <div>
            <label>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
                style={{ width: 20, height: 20 }}
                alt="..."
              />
            </label>

            <input type="name" placeholder="gender" style={{ width: 120 }} />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSknFKYEKTWrADXmc7HbEg25B2Aai00IQtLMiPmmW_Ht2JpUjdngCaWvNoPOgkOpVNbQSk&usqp=CAU"
              alt="..."
              style={{ width: 20, height: 20 }}
            />
            <input
              type="password"
              placeholde="password"
              style={{ width: 120 }}
            />
          </div>
          <div style={{ padding: 20 }}>
            <Link to="/11">
              <input
                className="btn btn-outline-danger "
                style={{ width: 100, padding: 0 }}
                type="submit"
                name="submit"
                id="submit"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page6;
