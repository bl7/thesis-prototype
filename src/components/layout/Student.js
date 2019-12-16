import React, { Component } from "react";

export default class Student extends Component {
  render() {
    return (
      <div className="main">
        <div className="row">
          <h2 className="center">Scanned RFID</h2>
        </div>
        <div className="row marg">
          <div className="col s12 m12 ">
            <h5>Anup Lamichhane</h5>
            <p>
              {" "}
              <i className="fa fa-envelope" /> anup@gmail.com{" "}
            </p>
            <p>
              {" "}
              <i className="fa fa-id-badge" /> 170055{" "}
            </p>
            <p>
              {" "}
              <i className="fas fa-phone" /> 9847581236{" "}
            </p>
          </div>
        </div>
        <div className="row marg">
          <div className="col m6">
            <div className="card blue-grey darken-3">
              <div class="card-content white-text">
                <span class="card-title">Courses</span>
                <p>BSC (Hons) Computing (Active)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
