import { useState } from "react";
import React from "react";
import Page11 from "./page11";
import { Link } from "react-router-dom";
// const Page5 = () => {
//   return (
//     <>
//       <div>
//         <div
//           className="card position-absolute top-50 start-50 translate-middle"
//           style={{
//             width: 200,
//             padding: 20,
//             height: 350,
//             background: "Azure",
//           }}
//         >
//           <div className="mx-auto">TOUCHH</div>

//           <h3 class="card-title position-relative top-30 end-0">
//             wellcome back
//           </h3>
//           <label for="name">username</label>
//           <input type="text" name="name" id="name" />

//           <label for="password">password:</label>
//           <input type="password" name="password" id="password" />
//           <Link to="/7">
//             <h6 className="p-2 flex-shrink-1 bd-highlight text-danger">
//               forgot password?
//             </h6>
//           </Link>
//           <div className={{ padding: 50 }}>
//             <Link to="/11">
//               <button
//                 className="btn btn-outline-danger "
//                 style={{ width: 100, padding: 0 }}
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </Link>
//           </div>

//           <i>
//             if you dont have an accout?
//             <span className="text-danger">
//               <Link to="/6">signup</Link>
//             </span>
//           </i>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Page5;
//
function Page5() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "Shirisha",
      password: "07120212",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error text-danger">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required style={{ width: 160 }} />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required style={{ width: 160 }} />
          {renderErrorMessage("pass")}
        </div>

        {/* <div className="button-container  " style={{ padding: 5 }}>
          <Link to="/11">
            <button
              className="btn btn-outline-danger "
              style={{ width: 100, padding: 0 }}
              type="submit"
            >
              Submit
            </button>
          </Link>

        </div> */}
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div
      className="card position-absolute top-50 start-50 translate-middle"
      style={{
        width: 200,
        padding: 20,
        height: 350,
        background: "Azure",
      }}
    >
      <div className="mx-auto">TOUCHH</div>

      <h3 className="card-title position-relative top-30 end-0">
        wellcome back
      </h3>
      <div className="login-form">{isSubmitted ? <Page11 /> : renderForm}</div>
      <div>
        <Link to="/7">
          <h6 className="p-2 flex-shrink-1 bd-highlight text-danger">
            forgot password?
          </h6>
        </Link>
        <small>
          if you dont have an accout?
          <span className="text-danger">
            <Link to="/6">signup</Link>{" "}
          </span>
        </small>
      </div>
    </div>
  );
}

export default Page5;
