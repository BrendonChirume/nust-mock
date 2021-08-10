import React, { Component } from "react";
import Navigation from "../components/navComonents/Navigation";
// import Footer from "../components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "../Routes";
import axios from "axios";
import { connect } from "react-redux"
import { SET_AUTHENTICATED } from "../store/contructors";
import { logOut } from "../store/actions/actions";
import jwtDecode from "jwt-decode";
import store from "../store/store";
import SubNav from "../components/navComonents/SubNav";

axios.defaults.baseURL = "https://api.virtualskool.co.za"

const token = localStorage.mdt;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login"
    store.dispatch(logOut());
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common[`Authorization`] = `Bearer ${token}`;
    // store.dispatch(getSellerData())
  }
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const mapStateToProps = state => {
  return {
    authenticated: state.admin.authenticated
  };
};

class App extends Component {
  state = {
    showNav: false,
  }
  componentDidMount = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  }

  showNav = () => {
    if (window.innerWidth <= 576) {
      this.setState({ showNav: !this.state.showNav })
    }
  }
  render() {

    if (!this.props.authenticated) {
      return (
        <React.Fragment>
          <Router>
            <Routes />
          </Router>
        </React.Fragment>
      )
    }


    return (
      <React.Fragment>
        <Router>
          <div className="d-flex h-100">
            <div className="nav-container h-100" style={{ width: this.state.showNav ? "100%" : "" }} onClick={this.showNav}>
              <Navigation />
            </div>
            <div className="h-100 side-bar-cont position-relative">
              <SubNav showNav={this.showNav} />
              <Routes />
            </div>
          </div>
          {/* <Footer /> */}
        </Router>
      </React.Fragment>
    );
  }
}


export default connect(mapStateToProps, null)(App)
