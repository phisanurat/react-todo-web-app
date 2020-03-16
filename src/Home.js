import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className={"pos-f-t"}>
        {/*<div className={"container-fluid"}>*/}
        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            M e m o
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">
                Home
                {/*<span className="sr-only">(current)</span>*/}
              </a>
              <a className="nav-item nav-link" href="/">
                Todo
              </a>
              {/*<a className="nav-item nav-link disabled" href="#">Shared</a>*/}
            </div>
          </div>
        </nav>
        {/*</div>*/}
      </div>
    );
  }
}

export default Home;
