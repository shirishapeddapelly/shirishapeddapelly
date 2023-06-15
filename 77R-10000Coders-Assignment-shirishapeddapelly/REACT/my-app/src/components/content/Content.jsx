import React, { Component } from "react";
import "./Content.css";

export default class content extends Component {
  render() {
    return (
      <div>
        <div id="id7">
          <div class="id7class1">
            <img
              class="imagea"
              src="https://www.10000coders.co/assets/vistex.jpg?v=1.2"
              alt=""
            />
            <img
              class="imagea"
              src="https://www.10000coders.co/assets/metrixlab.png?v=1.2"
              alt=""
            />
            <img
              class="imagea"
              src="https://www.10000coders.co/assets/techmahindra.png?v=1.2"
              alt=""
            />
            <img
              class="imagea"
              src="https://www.10000coders.co/assets/mutualmobile.png?v=1.2"
              alt=""
            />
            <img
              class="imagea"
              src="https://www.10000coders.co/assets/yellow.png?v=1.2"
              alt=""
            />
            <img
              class="imagea"
              src="https://www.10000coders.co/assets/thapovan.png?v=1.2"
              alt=""
            />
          </div>
        </div>
        <div>
          <div style={{ textAlign: "center", padding: "100px" }}>
            <h1>HOW IT WORKS </h1>
            <p>
              We want to invest our time and efforts only with people who are
              dead serious about getting an IT job. Since we are taking the
              financial risk and guaranteeing you a well-paying IT job, we
              expect our aspiring coders to meet certain criteria. So you will
              have to go through a rigorous selection process.{" "}
            </p>
            <p>
              But don’t worry! We don’t expect any coding knowledge from you.
              All we do expect is your complete dedication and involvement. If
              you have 60% aggregate through out your academics and simply
              follow what we ask you to do, you will be easily qualified for our
              program.
            </p>
            <p>And once you are in, your life is settled. Forever!</p>
          </div>
          <div id="id8">
            <div class="id8class1">
              <img
                class="imagea"
                src="https://www.freeiconspng.com/thumbs/person-icon-blue/person-icon-blue-18.png"
                alt=""
              />
              <h3>Get trained by industry experts</h3>
            </div>
            <div class="id8class2">
              <img
                class="imagea"
                src="https://cdn3.vectorstock.com/i/1000x1000/19/77/isolated-abstract-blue-color-thumb-up-contour-logo-vector-10861977.jpg"
                alt=""
              />
              <h3>
                Get our respect by performing well
                <br /> in the bootcamp
              </h3>
            </div>
            <div class="id8class3">
              <img
                class="imagea"
                src="https://i.pinimg.com/originals/ca/ff/ec/caffec09eaa3ae13456be00182d6ad56.jpg"
                alt=""
              />
              <h3>Get a high-paying job</h3>
            </div>
            <div class="id8class4">
              <img
                class="imagea"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <h3>Get certified as a full stack developer</h3>
            </div>
            <div class="id8class5">
              <img
                class="imagea"
                src="https://cdn.dribbble.com/users/1405795/screenshots/6547589/yakoi_app_icon.png?compress=1&resize=450x338&vertical=top"
                alt=""
              />
              <h3>Get trained by industry experts</h3>
            </div>
            <div class="id8class6">
              <img
                class="imagea"
                src="https://i.pinimg.com/originals/1b/0f/43/1b0f43d0ba11df9fef312f8b8c0d5494.jpg"
                alt=""
              />
              <h3>
                Get selected for the 6-months online, live,
                <br /> interactive training program
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div id="id9">
            <h2>Get ahead in life!</h2>
            <p>Are you in?</p>
            <a href="../../assignment 19-10-22/html/formvalidation.html">
              <button class="selector">YES ! I WANT TO JOIN</button>
            </a>
            <h5>So I Can Get A Well-Paying IT Job In 7 Months</h5>
            <h1>HOW MUCH YOU NEED TO INVEST?</h1>
            <h2>Nothing if you don't get a job. That's right!</h2>
            <h3>Full-Stack Developer Training</h3>
            <h6>Course Duration: 7 Months</h6>
            <h4>
              Program Fee 42% off: Early adopter discount_____________
              <s>92000</s>
              <sup>420000</sup>
            </h4>
            <h4>
              Pay the balance ₹ 50,000/- only if you get the job. Otherwise we
              will refund every single rupee back to you!
            </h4>
            <h3>
              Only if you get a high paying IT job as we promise, you pay the
              balance ₹50,000/-
            </h3>
            <h3>ELSE, THE COURSE FEE IS FREE.</h3>
            <tt>
              You read that right. If you don’t get a job, the training is
              totally FREE.
            </tt>
            <p>
              <u>We will refund every single rupee back to you!</u>
            </p>
            <h4>No hidden catches. No deductions. No dilly-dallying..</h4>
            <h3>Get a job. Else, get your money back.</h3>
            <p>Are you in?</p>
            <button>YES! I WANT TO JOIN</button>
            <br />
            <i>So I Can Get A Well-Paying IT Job In 7 Months</i>
            <h1>WE HEAR YOUR QUESTIONS!</h1>
            <h2>Here’s what most students like you ask us</h2>
          </div>
        </div>
        <div id="id10">
          <h3>
            Remember: this will not be your average, sit back, sleep, dream, and
            happily forget kind of training program.
          </h3>
          <h5> You need to attend classes 8 hours a day, 5 days a week.</h5>
          <h5> You need to put in hard work.</h5>
          <h5> You need to do the heavy lifting.</h5>
          <h5> You need to burn the mid-night tubelight.</h5>
          <h5> You need to implement the information you learn.</h5>
        </div>
        <div id="id1">
          <p>
            If you do, there is absolutely, positively, no stopping you from
            getting that high paying IT job.
          </p>
          <h3>
            So are you ready to go from jobless, hopeless, clueless graduate to
            a minimum 4lpa earning IT professional?
          </h3>
          <button>YES! I WANT TO JOIN</button>
          <br />
          <i>So I Can Get A Well-Paying IT Job In 7 Months</i>
          <h2>And take my career and life to greater heights!</h2>
        </div>
      </div>
    );
  }
}
