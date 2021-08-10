import React, { Component } from "react";
import logo from "../assets/img/item.png";
import { loginUser } from "../store/actions/actions";
import { connect } from "react-redux";
import Loader from "./Loader";

const mapStateToProps = state => {
  return {
    error: state.admin.error,
    loading: state.admin.loading,
    atnd: state.admin.authenticated,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loginUser: (number, password) => dispatch(loginUser(number, password))
  }
}

class Login extends Component {
  state = {
    pass: "",
    phone: "",
    message: ""
  };



  onSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state)
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  form = () => {
    if (this.props.loading) {
      return (
        <form onSubmit={this.onSubmit} className="px-lg-5 mx-lg-5 px-md-5 mx-xl-5" noValidate>
          <div className="form-group my-5 mx-xl-5 position-relative position-relative">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00MiAwIDUxMiA1MTIuMDAyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTIxMC4zNTE1NjIgMjQ2LjYzMjgxMmMzMy44ODI4MTMgMCA2My4yMjI2NTctMTIuMTUyMzQzIDg3LjE5NTMxMy0zNi4xMjg5MDYgMjMuOTcyNjU2LTIzLjk3MjY1NiAzNi4xMjUtNTMuMzA0Njg3IDM2LjEyNS04Ny4xOTE0MDYgMC0zMy44NzUtMTIuMTUyMzQ0LTYzLjIxMDkzOC0zNi4xMjg5MDYtODcuMTkxNDA2LTIzLjk3NjU2My0yMy45Njg3NS01My4zMTI1LTM2LjEyMTA5NC04Ny4xOTE0MDctMzYuMTIxMDk0LTMzLjg4NjcxOCAwLTYzLjIxODc1IDEyLjE1MjM0NC04Ny4xOTE0MDYgMzYuMTI1cy0zNi4xMjg5MDYgNTMuMzA4NTk0LTM2LjEyODkwNiA4Ny4xODc1YzAgMzMuODg2NzE5IDEyLjE1NjI1IDYzLjIyMjY1NiAzNi4xMzI4MTIgODcuMTk1MzEyIDIzLjk3NjU2MyAyMy45Njg3NSA1My4zMTI1IDM2LjEyNSA4Ny4xODc1IDM2LjEyNXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNjE2MTYxIj48L3BhdGg+PHBhdGggZD0ibTQyNi4xMjg5MDYgMzkzLjcwMzEyNWMtLjY5MTQwNi05Ljk3NjU2My0yLjA4OTg0NC0yMC44NTkzNzUtNC4xNDg0MzctMzIuMzUxNTYzLTIuMDc4MTI1LTExLjU3ODEyNC00Ljc1MzkwNy0yMi41MjM0MzctNy45NTcwMzEtMzIuNTI3MzQzLTMuMzA4NTk0LTEwLjMzOTg0NC03LjgwODU5NC0yMC41NTA3ODEtMTMuMzcxMDk0LTMwLjMzNTkzOC01Ljc3MzQzOC0xMC4xNTYyNS0xMi41NTQ2ODgtMTktMjAuMTY0MDYzLTI2LjI3NzM0My03Ljk1NzAzMS03LjYxMzI4Mi0xNy42OTkyMTktMTMuNzM0Mzc2LTI4Ljk2NDg0My0xOC4xOTkyMTktMTEuMjI2NTYzLTQuNDQxNDA3LTIzLjY2Nzk2OS02LjY5MTQwNy0zNi45NzY1NjMtNi42OTE0MDctNS4yMjY1NjMgMC0xMC4yODEyNSAyLjE0NDUzMi0yMC4wNDI5NjkgOC41LTYuMDA3ODEyIDMuOTE3OTY5LTEzLjAzNTE1NiA4LjQ0OTIxOS0yMC44Nzg5MDYgMTMuNDYwOTM4LTYuNzA3MDMxIDQuMjczNDM4LTE1Ljc5Mjk2OSA4LjI3NzM0NC0yNy4wMTU2MjUgMTEuOTAyMzQ0LTEwLjk0OTIxOSAzLjU0Mjk2OC0yMi4wNjY0MDYgNS4zMzk4NDQtMzMuMDM5MDYzIDUuMzM5ODQ0LTEwLjk3MjY1NiAwLTIyLjA4NTkzNy0xLjc5Njg3Ni0zMy4wNDY4NzQtNS4zMzk4NDQtMTEuMjEwOTM4LTMuNjIxMDk0LTIwLjI5Njg3Ni03LjYyNS0yNi45OTYwOTQtMTEuODk4NDM4LTcuNzY5NTMyLTQuOTY0ODQ0LTE0LjgwMDc4Mi05LjQ5NjA5NC0yMC44OTg0MzgtMTMuNDY4NzUtOS43NS02LjM1NTQ2OC0xNC44MDg1OTQtOC41LTIwLjAzNTE1Ni04LjUtMTMuMzEyNSAwLTI1Ljc1IDIuMjUzOTA2LTM2Ljk3MjY1NiA2LjY5OTIxOS0xMS4yNTc4MTMgNC40NTcwMzEtMjEuMDAzOTA2IDEwLjU3ODEyNS0yOC45Njg3NSAxOC4xOTkyMTktNy42MDU0NjkgNy4yODEyNS0xNC4zOTA2MjUgMTYuMTIxMDk0LTIwLjE1NjI1IDI2LjI3MzQzNy01LjU1ODU5NCA5Ljc4NTE1Ny0xMC4wNTg1OTQgMTkuOTkyMTg4LTEzLjM3MTA5NCAzMC4zMzk4NDQtMy4xOTkyMTkgMTAuMDAzOTA2LTUuODc1IDIwLjk0NTMxMy03Ljk1MzEyNSAzMi41MjM0MzctMi4wNTg1OTQgMTEuNDc2NTYzLTMuNDU3MDMxIDIyLjM2MzI4Mi00LjE0ODQzNyAzMi4zNjMyODItLjY3OTY4OCA5Ljc5Njg3NS0xLjAyMzQzOCAxOS45NjQ4NDQtMS4wMjM0MzggMzAuMjM0Mzc1IDAgMjYuNzI2NTYyIDguNDk2MDk0IDQ4LjM2MzI4MSAyNS4yNSA2NC4zMjAzMTIgMTYuNTQ2ODc1IDE1Ljc0NjA5NCAzOC40NDE0MDYgMjMuNzM0Mzc1IDY1LjA2NjQwNiAyMy43MzQzNzVoMjQ2LjUzMTI1YzI2LjYyNSAwIDQ4LjUxMTcxOS03Ljk4NDM3NSA2NS4wNjI1LTIzLjczNDM3NSAxNi43NTc4MTMtMTUuOTQ1MzEyIDI1LjI1MzkwNi0zNy41ODU5MzcgMjUuMjUzOTA2LTY0LjMyNDIxOS0uMDAzOTA2LTEwLjMxNjQwNi0uMzUxNTYyLTIwLjQ5MjE4Ny0xLjAzNTE1Ni0zMC4yNDIxODd6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzYxNjE2MSI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="" className="btn-img position-absolute login-icon" />
            <input onChange={this.handleChange} type="number" autoFocus className="login-input w-100 no-outline" name="phone" required placeholder="Phone Number" disabled />
            <label className="text-left text-muted login-label position-absolute" htmlFor="inputEmail">Phone Number</label>
          </div>
          <div className="form-group my-5 mx-xl-5 position-relative">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MzcuMzMzLDE5MmgtMzJ2LTQyLjY2N0M0MDUuMzMzLDY2Ljk5LDMzOC4zNDQsMCwyNTYsMFMxMDYuNjY3LDY2Ljk5LDEwNi42NjcsMTQ5LjMzM1YxOTJoLTMyICAgIEM2OC43NzEsMTkyLDY0LDE5Ni43NzEsNjQsMjAyLjY2N3YyNjYuNjY3QzY0LDQ5Mi44NjUsODMuMTM1LDUxMiwxMDYuNjY3LDUxMmgyOTguNjY3QzQyOC44NjUsNTEyLDQ0OCw0OTIuODY1LDQ0OCw0NjkuMzMzICAgIFYyMDIuNjY3QzQ0OCwxOTYuNzcxLDQ0My4yMjksMTkyLDQzNy4zMzMsMTkyeiBNMjg3LjkzOCw0MTQuODIzYzAuMzMzLDMuMDEtMC42MzUsNi4wMzEtMi42NTYsOC4yOTIgICAgYy0yLjAyMSwyLjI2LTQuOTE3LDMuNTUyLTcuOTQ4LDMuNTUyaC00Mi42NjdjLTMuMDMxLDAtNS45MjctMS4yOTItNy45NDgtMy41NTJjLTIuMDIxLTIuMjYtMi45OS01LjI4MS0yLjY1Ni04LjI5Mmw2LjcyOS02MC41MSAgICBjLTEwLjkyNy03Ljk0OC0xNy40NTgtMjAuNTIxLTE3LjQ1OC0zNC4zMTNjMC0yMy41MzEsMTkuMTM1LTQyLjY2Nyw0Mi42NjctNDIuNjY3czQyLjY2NywxOS4xMzUsNDIuNjY3LDQyLjY2NyAgICBjMCwxMy43OTItNi41MzEsMjYuMzY1LTE3LjQ1OCwzNC4zMTNMMjg3LjkzOCw0MTQuODIzeiBNMzQxLjMzMywxOTJIMTcwLjY2N3YtNDIuNjY3QzE3MC42NjcsMTAyLjI4MSwyMDguOTQ4LDY0LDI1Niw2NCAgICBzODUuMzMzLDM4LjI4MSw4NS4zMzMsODUuMzMzVjE5MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzYxNjE2MSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" alt="" className="btn-img position-absolute login-icon" />
            <input onChange={this.handleChange} autoComplete="false" type="password" className="login-input w-100 no-outline" name="pass" required placeholder="Password" disabled />
            <label className="text-left text-muted login-label position-absolute" htmlFor="inputPassword">Password</label>
          </div>
          <Loader />
        </form>
      )
    } else {
      return (
        <form onSubmit={this.onSubmit} className="px-lg-5 mx-lg-5 px-md-5 mx-xl-5" noValidate>
          <div className="form-group my-5 mx-xl-5 position-relative position-relative">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00MiAwIDUxMiA1MTIuMDAyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTIxMC4zNTE1NjIgMjQ2LjYzMjgxMmMzMy44ODI4MTMgMCA2My4yMjI2NTctMTIuMTUyMzQzIDg3LjE5NTMxMy0zNi4xMjg5MDYgMjMuOTcyNjU2LTIzLjk3MjY1NiAzNi4xMjUtNTMuMzA0Njg3IDM2LjEyNS04Ny4xOTE0MDYgMC0zMy44NzUtMTIuMTUyMzQ0LTYzLjIxMDkzOC0zNi4xMjg5MDYtODcuMTkxNDA2LTIzLjk3NjU2My0yMy45Njg3NS01My4zMTI1LTM2LjEyMTA5NC04Ny4xOTE0MDctMzYuMTIxMDk0LTMzLjg4NjcxOCAwLTYzLjIxODc1IDEyLjE1MjM0NC04Ny4xOTE0MDYgMzYuMTI1cy0zNi4xMjg5MDYgNTMuMzA4NTk0LTM2LjEyODkwNiA4Ny4xODc1YzAgMzMuODg2NzE5IDEyLjE1NjI1IDYzLjIyMjY1NiAzNi4xMzI4MTIgODcuMTk1MzEyIDIzLjk3NjU2MyAyMy45Njg3NSA1My4zMTI1IDM2LjEyNSA4Ny4xODc1IDM2LjEyNXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNjE2MTYxIj48L3BhdGg+PHBhdGggZD0ibTQyNi4xMjg5MDYgMzkzLjcwMzEyNWMtLjY5MTQwNi05Ljk3NjU2My0yLjA4OTg0NC0yMC44NTkzNzUtNC4xNDg0MzctMzIuMzUxNTYzLTIuMDc4MTI1LTExLjU3ODEyNC00Ljc1MzkwNy0yMi41MjM0MzctNy45NTcwMzEtMzIuNTI3MzQzLTMuMzA4NTk0LTEwLjMzOTg0NC03LjgwODU5NC0yMC41NTA3ODEtMTMuMzcxMDk0LTMwLjMzNTkzOC01Ljc3MzQzOC0xMC4xNTYyNS0xMi41NTQ2ODgtMTktMjAuMTY0MDYzLTI2LjI3NzM0My03Ljk1NzAzMS03LjYxMzI4Mi0xNy42OTkyMTktMTMuNzM0Mzc2LTI4Ljk2NDg0My0xOC4xOTkyMTktMTEuMjI2NTYzLTQuNDQxNDA3LTIzLjY2Nzk2OS02LjY5MTQwNy0zNi45NzY1NjMtNi42OTE0MDctNS4yMjY1NjMgMC0xMC4yODEyNSAyLjE0NDUzMi0yMC4wNDI5NjkgOC41LTYuMDA3ODEyIDMuOTE3OTY5LTEzLjAzNTE1NiA4LjQ0OTIxOS0yMC44Nzg5MDYgMTMuNDYwOTM4LTYuNzA3MDMxIDQuMjczNDM4LTE1Ljc5Mjk2OSA4LjI3NzM0NC0yNy4wMTU2MjUgMTEuOTAyMzQ0LTEwLjk0OTIxOSAzLjU0Mjk2OC0yMi4wNjY0MDYgNS4zMzk4NDQtMzMuMDM5MDYzIDUuMzM5ODQ0LTEwLjk3MjY1NiAwLTIyLjA4NTkzNy0xLjc5Njg3Ni0zMy4wNDY4NzQtNS4zMzk4NDQtMTEuMjEwOTM4LTMuNjIxMDk0LTIwLjI5Njg3Ni03LjYyNS0yNi45OTYwOTQtMTEuODk4NDM4LTcuNzY5NTMyLTQuOTY0ODQ0LTE0LjgwMDc4Mi05LjQ5NjA5NC0yMC44OTg0MzgtMTMuNDY4NzUtOS43NS02LjM1NTQ2OC0xNC44MDg1OTQtOC41LTIwLjAzNTE1Ni04LjUtMTMuMzEyNSAwLTI1Ljc1IDIuMjUzOTA2LTM2Ljk3MjY1NiA2LjY5OTIxOS0xMS4yNTc4MTMgNC40NTcwMzEtMjEuMDAzOTA2IDEwLjU3ODEyNS0yOC45Njg3NSAxOC4xOTkyMTktNy42MDU0NjkgNy4yODEyNS0xNC4zOTA2MjUgMTYuMTIxMDk0LTIwLjE1NjI1IDI2LjI3MzQzNy01LjU1ODU5NCA5Ljc4NTE1Ny0xMC4wNTg1OTQgMTkuOTkyMTg4LTEzLjM3MTA5NCAzMC4zMzk4NDQtMy4xOTkyMTkgMTAuMDAzOTA2LTUuODc1IDIwLjk0NTMxMy03Ljk1MzEyNSAzMi41MjM0MzctMi4wNTg1OTQgMTEuNDc2NTYzLTMuNDU3MDMxIDIyLjM2MzI4Mi00LjE0ODQzNyAzMi4zNjMyODItLjY3OTY4OCA5Ljc5Njg3NS0xLjAyMzQzOCAxOS45NjQ4NDQtMS4wMjM0MzggMzAuMjM0Mzc1IDAgMjYuNzI2NTYyIDguNDk2MDk0IDQ4LjM2MzI4MSAyNS4yNSA2NC4zMjAzMTIgMTYuNTQ2ODc1IDE1Ljc0NjA5NCAzOC40NDE0MDYgMjMuNzM0Mzc1IDY1LjA2NjQwNiAyMy43MzQzNzVoMjQ2LjUzMTI1YzI2LjYyNSAwIDQ4LjUxMTcxOS03Ljk4NDM3NSA2NS4wNjI1LTIzLjczNDM3NSAxNi43NTc4MTMtMTUuOTQ1MzEyIDI1LjI1MzkwNi0zNy41ODU5MzcgMjUuMjUzOTA2LTY0LjMyNDIxOS0uMDAzOTA2LTEwLjMxNjQwNi0uMzUxNTYyLTIwLjQ5MjE4Ny0xLjAzNTE1Ni0zMC4yNDIxODd6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6IzYxNjE2MSI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="" className="btn-img position-absolute login-icon" />
            <input onChange={this.handleChange} type="number" autoFocus className="login-input w-100 no-outline" name="phone" required placeholder="Phone Number" />
            <label className="text-left text-muted login-label position-absolute" htmlFor="inputEmail">Phone Number</label>
          </div>
          <div className="form-group my-5 mx-xl-5 position-relative">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MzcuMzMzLDE5MmgtMzJ2LTQyLjY2N0M0MDUuMzMzLDY2Ljk5LDMzOC4zNDQsMCwyNTYsMFMxMDYuNjY3LDY2Ljk5LDEwNi42NjcsMTQ5LjMzM1YxOTJoLTMyICAgIEM2OC43NzEsMTkyLDY0LDE5Ni43NzEsNjQsMjAyLjY2N3YyNjYuNjY3QzY0LDQ5Mi44NjUsODMuMTM1LDUxMiwxMDYuNjY3LDUxMmgyOTguNjY3QzQyOC44NjUsNTEyLDQ0OCw0OTIuODY1LDQ0OCw0NjkuMzMzICAgIFYyMDIuNjY3QzQ0OCwxOTYuNzcxLDQ0My4yMjksMTkyLDQzNy4zMzMsMTkyeiBNMjg3LjkzOCw0MTQuODIzYzAuMzMzLDMuMDEtMC42MzUsNi4wMzEtMi42NTYsOC4yOTIgICAgYy0yLjAyMSwyLjI2LTQuOTE3LDMuNTUyLTcuOTQ4LDMuNTUyaC00Mi42NjdjLTMuMDMxLDAtNS45MjctMS4yOTItNy45NDgtMy41NTJjLTIuMDIxLTIuMjYtMi45OS01LjI4MS0yLjY1Ni04LjI5Mmw2LjcyOS02MC41MSAgICBjLTEwLjkyNy03Ljk0OC0xNy40NTgtMjAuNTIxLTE3LjQ1OC0zNC4zMTNjMC0yMy41MzEsMTkuMTM1LTQyLjY2Nyw0Mi42NjctNDIuNjY3czQyLjY2NywxOS4xMzUsNDIuNjY3LDQyLjY2NyAgICBjMCwxMy43OTItNi41MzEsMjYuMzY1LTE3LjQ1OCwzNC4zMTNMMjg3LjkzOCw0MTQuODIzeiBNMzQxLjMzMywxOTJIMTcwLjY2N3YtNDIuNjY3QzE3MC42NjcsMTAyLjI4MSwyMDguOTQ4LDY0LDI1Niw2NCAgICBzODUuMzMzLDM4LjI4MSw4NS4zMzMsODUuMzMzVjE5MnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzYxNjE2MSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" alt="" className="btn-img position-absolute login-icon" />
            <input onChange={this.handleChange} autoComplete="false" type="password" className="login-input w-100 no-outline" name="pass" required placeholder="Password" />
            <label className="text-left text-muted login-label position-absolute" htmlFor="inputPassword">Password</label>
          </div>
          <div className="mt-3 d-flex justify-content-center mx-xl-5">
            <button className="login-btn rounded w-100" >Login</button>
          </div>
        </form>
      )
    }
  }

  showMessage = () => {
    if (this.props.error) {
      return (
        <div className="px-md-5 mx-xl-5">
          <div className="alert alert-danger px-2">
            {this.props.error}
          </div>
        </div>
      )
    } else {
      return undefined;
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="container px-lg-5  text-center px-md-5 px-3 login-form-cont">
        <div className="d-flex justify-content-center px-md-5 mx-xl-5 mx-xl-5">
          <img alt="" className="my-3 img-fluid login-logo" src={logo} />
        </div>
        <div className="d-flex justify-content-center px-md-5 mx-xl-5">
          <h4>VirtualSkool</h4>
        </div>
        {this.showMessage()}
        {this.form()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
