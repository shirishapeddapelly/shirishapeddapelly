import React, { Component } from "react";
export default class Price extends Component {
  render() {
    return (
      <div>
        <h4 style={{ display: "center" }}>
          <center> So I Can Get A Well-Paying IT Job In 7 Months</center>
        </h4>
        <h2>HOW MUCH YOU NEED TO INVEST?</h2>
        <h2>Nothing if you don't get a job. That's right!</h2>
        <br />
        <center>
          <table border="1">
            <tr>
              <td>
                <center>
                  <h3>Full-Stack Developer Training</h3>
                  <h6>Course Duration: 7 Months</h6>
                </center>
              </td>
            </tr>
            <tr>
              <h4>
                {" "}
                <td>
                  {" "}
                  Program Fee <br />
                  42% off: Early adopter discount Component____________
                </td>
              </h4>
              <td>
                <s>92000</s>
              </td>
            </tr>
            <tr>
              <td>
                pay just
                <br />
                To attend the course
              </td>
              <td>42000</td>
            </tr>
          </table>
          <br />
          <p>
            Pay the balance ₹ 50,000/- only if you get the job. Otherwise we
            will refund every single rupee back to you!
          </p>
          <p>
            Only if you get a high paying IT job as we promise, you pay the
            balance ₹50,000/-
          </p>
          <h3>ELSE, THE COURSE FEE IS FREE.</h3>
          <tt>
            You read that right. If you don’t get a job, the training is totally
            FREE.
          </tt>
          <p>
            <u>We will refund every single rupee back to you!</u>
          </p>
          <h4>No hidden catches. No deductions. No dilly-dallying..</h4>
          <h3>Get a job. Else, get your money back.</h3>
          <p>Are you in?</p>
          <button id="button">YES! I WANT TO JOIN</button>
          <br />
          <i>So I Can Get A Well-Paying IT Job In 7 Months</i>
        </center>
      </div>
    );
  }
}
