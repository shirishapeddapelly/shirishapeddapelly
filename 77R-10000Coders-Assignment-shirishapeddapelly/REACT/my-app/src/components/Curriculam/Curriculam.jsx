import React, { Component } from "react";
import "./Curriculam.css";
export default class Curriculam extends Component {
  render() {
    return (
      <div>
        <div>
          <center>
            <h1>WHAT YOU’LL LEARN</h1>
            <h1>THE FULL STACK DEVELOPER 7 MONTHS COURSE MODULES</h1>
          </center>
        </div>

        <div id="id5">
          <div class="id5class1">
            <p>Weeks 1 - 5</p>
            <h3>Web Foundation</h3>
            <p>HTML, CSS, Bootstrap, javascript, Git</p>
            <b>Schedule</b>
            <p>LIVE CLASS : 7 AM to 9 AM IST</p>
            <p>ASSIGNMENTS & MONITORING CALLS : 10 AM TO 5 PM </p>
            <p>Monday to Saturday</p>
          </div>
          <div class="id5class2">
            <p>Weeks 6 - 10</p>
            <h3>Frontend Development</h3>
            <p>jQuery, AJAX, React Js, Redux.</p>
            <b>Schedule</b>
            <p>LIVE CLASS : 7 AM to 9 AM IST,</p>
            <p>ASSIGNMENTS & MONITORING CALLS : 10 AM TO 5 PM </p>
            <p>Monday to Saturday</p>
          </div>
          <div class="id5class3">
            <p>Weeks 11 - 15 </p>
            <h3>Backend Development</h3>
            <p>Node.js, Express, MongoDB, OAuth </p>
            <b>Schedule:</b>
            <p>LIVE CLASS : 7 AM to 9 AM IST, </p>
            <p>ASSIGNMENTS & MONITORING CALLS : 10 AM TO 5 PM</p>
            <p>Monday to Saturday</p>
          </div>
          <div class="id5class4">
            <p>Weeks 16 - 25</p>
            <h3>Internship Program</h3>
            <p>
              {" "}
              Students will assigned as interns in startups to gain real time
              exposure on what they are trained.
            </p>
            <p>Schedule: 10 AM to 7 PM IST,</p>
            <p>Monday to Saturday</p>
          </div>
          <div class="id5class5">
            <p>Weeks 25 - 30</p>
            <h3>Career Launch</h3>
            <p>
              Profile building, Mock Interviews and profiles will be sent to
              partnered companies.{" "}
            </p>
            <p>Schedule: 10 AM to 7PM IST,</p>
            <p>Monday to Saturday</p>
          </div>
        </div>
      </div>
    );
  }
}
