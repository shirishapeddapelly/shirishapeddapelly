import React, { Component } from "react";

export default class formvalidation extends Component {
  state = {
    name: "",
    email: "",
    phonenumber: "",
    address: "",
    details: "",
    yearofpass: "",
    presentstatus: "",
    textarea: "",
    nameErr: "",
    emailErr: "",
    phoneErr: "",
    detailsErr: "",
    addressErr: "",
    yearofpassErr: "",
    presentstatusErr: "",
    textErr: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  validateForm = () => {
    let nameErr = "";
    let emailErr = "";
    let phoneErr = "";
    let detailsErr = "";
    let addressErr = "";
    let yearofpassErr = "";
    let presentstatusErr = "";
    let textErr = "";

    if (this.state.name.length === 0) {
      nameErr = " please enter the valid name";
    }

    if (this.state.address.length === 0) {
      addressErr = "please enter the valid address";
    }

    if (
      this.state.email["@"] === -1 ||
      this.state.email.length === 0 ||
      this.state.email.includes(".com" ^ ".in")
    ) {
      emailErr = "Please enter valid Email";
    }
    if (this.state.phonenumber.length !== 10) {
      phoneErr = "please enter valid phone number";
    }
    if (this.state.details.value === "-select-") {
      detailsErr = "please select any value";
    }

    if (this.state.yearofpass.value === "-select-") {
      yearofpassErr = "please select the passout year";
    }
    if (this.state.presentstatus.value === "-select-") {
      presentstatusErr = "please enter the valid name";
    }
    if (this.state.textarea.length === 0) {
      textErr = "please share something";
    }
    if (
      nameErr ||
      addressErr ||
      emailErr ||
      phoneErr ||
      detailsErr ||
      yearofpassErr ||
      presentstatusErr ||
      textErr
    ) {
      this.setState({
        nameErr,
        addressErr,
        emailErr,
        phoneErr,
        detailsErr,
        yearofpassErr,
        presentstatusErr,
        textErr,
      });
      return false;
    } else {
      this.setState({
        nameErr,
        addressErr,
        emailErr,
        phoneErr,
        detailsErr,
        yearofpassErr,
        presentstatusErr,
        textErr,
      });
      return true;
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const valid = this.validateForm();
    if (valid) {
      console.log(this.state);
      console.log("form submitted");
    }
  };
  render() {
    return (
      <form className="m-5" onSubmit={this.handleSubmit}>
        <div>
          <h5 className="bg-secondary">
            Ready to get a well playing IT job?Awesome <br />
            Attend our job-guaranteed, 6-month full-stack developer training
            program. We will refund every single rupee back to you, if you do
            not get a job in 6 months.
          </h5>
        </div>
        <div>
          <label for="name">NAME</label>
          <br />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <p className="text-danger">{this.state.nameErr}</p>
        </div>
        <div>
          <label for="address">ADDRESS</label>
          <br />
          <input
            type="text"
            name="address"
            id="address"
            placeholder="enter your address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <p className="text-danger">{this.state.addressErr}</p>
        </div>
        <div>
          <label for="email">EMAIL ID</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <p className="text-danger">{this.state.emailErr}</p>
        </div>
        <div>
          <label for="phonenumber">PHONE NUMBER</label>
          <br />
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            placeholder="enter your number"
            value={this.state.phonenumber}
            onChange={this.handleChange}
          />
          <p className="text-danger">{this.state.phoneErr}</p>
        </div>
        <div>
          <label for="details">DEGREE DETAILS</label>
          <br />
          <select
            id="details"
            name="details"
            value={this.state.details}
            onChange={this.handleChange}
          >
            <option>-select-</option>
            <option>Bsc</option>
            <option>bcom</option>
            <option>mba/mca</option>
            <option>btech</option>
            <option>others</option>
          </select>
          <p className="text-danger">{this.state.detailsErr}</p>
        </div>
        <div>
          <label for="yearofpass" className="form-label">
            YEAR OF PASSOUT
          </label>
          <br />
          <select
            id="yearofpass"
            name="yearofpass"
            value={this.state.yearofpass}
            onChange={this.handleChange}
          >
            <option>-select-</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
            <option>2018</option>
            <option>2017</option>
            <option>2016</option>
            <option>2015</option>
            <option>still pursuing</option>
          </select>
          <p className="text-danger">{this.state.yearofpassErr}</p>
        </div>
        <div>
          <label for="presentstatus">PRESENT EDUCATIONAL STATUS</label>
          <br />
          <select
            id="presentstatus"
            name="presentstatus"
            value={this.state.presentstatus}
            onChange={this.handleChange}
          >
            <option>-select-</option>
            <option>Student</option>
            <option>Working</option>
            <option>Looking for a job</option>
          </select>
          <p className="text-danger">{this.state.presentstatusErr}</p>
        </div>
        <div>
          <label for="textarea">Please share questions if you have any?</label>
          <br />
          <textarea
            name="textarea"
            id="textarea"
            cols="80"
            rows="5"
            placeholder="if you have any questions ask here..."
            value={this.state.textarea}
            onChange={this.handleChange}
          ></textarea>
          <p className="text-danger">{this.state.textErr}</p>
        </div>
        <br />
        <button className="btn btn-primary">submit</button>
      </form>
    );
  }
}
