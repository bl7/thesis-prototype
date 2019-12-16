import React, { Component } from "react";
import { Link } from "react-router-dom";
class AppNavBar extends Component {
  render() {
    return (
      <nav className="blue-grey darken-4" role="navigation">
        <div className="nav-wrapper container">
          <Link to="/" id="logo-container" className="brand-logo">
            <img alt="blah" src={require("../../images/softlogo.png")}></img>
          </Link>
        </div>
      </nav>
    );
  }
}
export default AppNavBar;
