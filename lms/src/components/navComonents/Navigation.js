import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logOut } from "../../store/actions/actions";
import store from "../../store/store";

class Nav extends Component {
  state = {
    activeLink: undefined,
  };

  logOut = () => {
    window.location.href = "/login"
    store.dispatch(logOut());
  }

  isActive = target => {
    if (target === this.state.activeLink) {
      return "lessons-tabs_a";
    } else {
      return undefined;
    }
  };

  render() {
    return (
      <div className="sidebar h-100">
        <Link to="/profile" onClick={() => this.setState({ activeLink: '/profile' })}>
          <h5 className="mb-4 pl-3 pt-2 pt-md-4 text-center text-lg-left text-truncate">ICN WhiteBoard</h5>
        </Link>
        <Link to="/" className={`${this.isActive('/subjects')} align-items-center d-flex px-3 my-2 rounded flex-nowrap`} >
          <div className="nav-link-img">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibTQ5OC4xOTUzMTIgMjIyLjY5NTMxMmMtLjAxMTcxOC0uMDExNzE4LS4wMjM0MzctLjAyMzQzNy0uMDM1MTU2LS4wMzUxNTZsLTIwOC44NTU0NjgtMjA4Ljg0NzY1NmMtOC45MDIzNDQtOC45MDYyNS0yMC43MzgyODItMTMuODEyNS0zMy4zMjgxMjYtMTMuODEyNS0xMi41ODk4NDMgMC0yNC40MjU3ODEgNC45MDIzNDQtMzMuMzMyMDMxIDEzLjgwODU5NGwtMjA4Ljc0NjA5MyAyMDguNzQyMTg3Yy0uMDcwMzEzLjA3MDMxMy0uMTQwNjI2LjE0NDUzMS0uMjEwOTM4LjIxNDg0NC0xOC4yODEyNSAxOC4zODY3MTktMTguMjUgNDguMjE4NzUuMDg5ODQ0IDY2LjU1ODU5NCA4LjM3ODkwNiA4LjM4MjgxMiAxOS40NDUzMTIgMTMuMjM4MjgxIDMxLjI3NzM0NCAxMy43NDYwOTMuNDgwNDY4LjA0Njg3Ni45NjQ4NDMuMDcwMzEzIDEuNDUzMTI0LjA3MDMxM2g4LjMyNDIxOXYxNTMuNjk5MjE5YzAgMzAuNDE0MDYyIDI0Ljc0NjA5NCA1NS4xNjAxNTYgNTUuMTY3OTY5IDU1LjE2MDE1Nmg4MS43MTA5MzhjOC4yODEyNSAwIDE1LTYuNzE0ODQ0IDE1LTE1di0xMjAuNWMwLTEzLjg3ODkwNiAxMS4yODkwNjItMjUuMTY3OTY5IDI1LjE2Nzk2OC0yNS4xNjc5NjloNDguMTk1MzEzYzEzLjg3ODkwNiAwIDI1LjE2Nzk2OSAxMS4yODkwNjMgMjUuMTY3OTY5IDI1LjE2Nzk2OXYxMjAuNWMwIDguMjg1MTU2IDYuNzE0ODQzIDE1IDE1IDE1aDgxLjcxMDkzN2MzMC40MjE4NzUgMCA1NS4xNjc5NjktMjQuNzQ2MDk0IDU1LjE2Nzk2OS01NS4xNjAxNTZ2LTE1My42OTkyMTloNy43MTg3NWMxMi41ODU5MzcgMCAyNC40MjE4NzUtNC45MDIzNDQgMzMuMzMyMDMxLTEzLjgwODU5NCAxOC4zNTkzNzUtMTguMzcxMDkzIDE4LjM2NzE4Ny00OC4yNTM5MDYuMDIzNDM3LTY2LjYzNjcxOXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+PC9nPiA8L3N2Zz4=" alt="" className="" />
          </div>
          <div className="text-truncate nav-link-name">Home</div>
        </Link>
        <Link to="/profile" className={`${this.isActive('/profile')} align-items-center d-flex px-3 my-2 rounded flex-nowrap`} onClick={() => this.setState({ activeLink: '/profile' })}>
          <div className="nav-link-img">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00MiAwIDUxMiA1MTIuMDAyIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PHBhdGggZD0ibTIxMC4zNTE1NjIgMjQ2LjYzMjgxMmMzMy44ODI4MTMgMCA2My4yMjI2NTctMTIuMTUyMzQzIDg3LjE5NTMxMy0zNi4xMjg5MDYgMjMuOTcyNjU2LTIzLjk3MjY1NiAzNi4xMjUtNTMuMzA0Njg3IDM2LjEyNS04Ny4xOTE0MDYgMC0zMy44NzUtMTIuMTUyMzQ0LTYzLjIxMDkzOC0zNi4xMjg5MDYtODcuMTkxNDA2LTIzLjk3NjU2My0yMy45Njg3NS01My4zMTI1LTM2LjEyMTA5NC04Ny4xOTE0MDctMzYuMTIxMDk0LTMzLjg4NjcxOCAwLTYzLjIxODc1IDEyLjE1MjM0NC04Ny4xOTE0MDYgMzYuMTI1cy0zNi4xMjg5MDYgNTMuMzA4NTk0LTM2LjEyODkwNiA4Ny4xODc1YzAgMzMuODg2NzE5IDEyLjE1NjI1IDYzLjIyMjY1NiAzNi4xMzI4MTIgODcuMTk1MzEyIDIzLjk3NjU2MyAyMy45Njg3NSA1My4zMTI1IDM2LjEyNSA4Ny4xODc1IDM2LjEyNXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+PHBhdGggZD0ibTQyNi4xMjg5MDYgMzkzLjcwMzEyNWMtLjY5MTQwNi05Ljk3NjU2My0yLjA4OTg0NC0yMC44NTkzNzUtNC4xNDg0MzctMzIuMzUxNTYzLTIuMDc4MTI1LTExLjU3ODEyNC00Ljc1MzkwNy0yMi41MjM0MzctNy45NTcwMzEtMzIuNTI3MzQzLTMuMzA4NTk0LTEwLjMzOTg0NC03LjgwODU5NC0yMC41NTA3ODEtMTMuMzcxMDk0LTMwLjMzNTkzOC01Ljc3MzQzOC0xMC4xNTYyNS0xMi41NTQ2ODgtMTktMjAuMTY0MDYzLTI2LjI3NzM0My03Ljk1NzAzMS03LjYxMzI4Mi0xNy42OTkyMTktMTMuNzM0Mzc2LTI4Ljk2NDg0My0xOC4xOTkyMTktMTEuMjI2NTYzLTQuNDQxNDA3LTIzLjY2Nzk2OS02LjY5MTQwNy0zNi45NzY1NjMtNi42OTE0MDctNS4yMjY1NjMgMC0xMC4yODEyNSAyLjE0NDUzMi0yMC4wNDI5NjkgOC41LTYuMDA3ODEyIDMuOTE3OTY5LTEzLjAzNTE1NiA4LjQ0OTIxOS0yMC44Nzg5MDYgMTMuNDYwOTM4LTYuNzA3MDMxIDQuMjczNDM4LTE1Ljc5Mjk2OSA4LjI3NzM0NC0yNy4wMTU2MjUgMTEuOTAyMzQ0LTEwLjk0OTIxOSAzLjU0Mjk2OC0yMi4wNjY0MDYgNS4zMzk4NDQtMzMuMDM5MDYzIDUuMzM5ODQ0LTEwLjk3MjY1NiAwLTIyLjA4NTkzNy0xLjc5Njg3Ni0zMy4wNDY4NzQtNS4zMzk4NDQtMTEuMjEwOTM4LTMuNjIxMDk0LTIwLjI5Njg3Ni03LjYyNS0yNi45OTYwOTQtMTEuODk4NDM4LTcuNzY5NTMyLTQuOTY0ODQ0LTE0LjgwMDc4Mi05LjQ5NjA5NC0yMC44OTg0MzgtMTMuNDY4NzUtOS43NS02LjM1NTQ2OC0xNC44MDg1OTQtOC41LTIwLjAzNTE1Ni04LjUtMTMuMzEyNSAwLTI1Ljc1IDIuMjUzOTA2LTM2Ljk3MjY1NiA2LjY5OTIxOS0xMS4yNTc4MTMgNC40NTcwMzEtMjEuMDAzOTA2IDEwLjU3ODEyNS0yOC45Njg3NSAxOC4xOTkyMTktNy42MDU0NjkgNy4yODEyNS0xNC4zOTA2MjUgMTYuMTIxMDk0LTIwLjE1NjI1IDI2LjI3MzQzNy01LjU1ODU5NCA5Ljc4NTE1Ny0xMC4wNTg1OTQgMTkuOTkyMTg4LTEzLjM3MTA5NCAzMC4zMzk4NDQtMy4xOTkyMTkgMTAuMDAzOTA2LTUuODc1IDIwLjk0NTMxMy03Ljk1MzEyNSAzMi41MjM0MzctMi4wNTg1OTQgMTEuNDc2NTYzLTMuNDU3MDMxIDIyLjM2MzI4Mi00LjE0ODQzNyAzMi4zNjMyODItLjY3OTY4OCA5Ljc5Njg3NS0xLjAyMzQzOCAxOS45NjQ4NDQtMS4wMjM0MzggMzAuMjM0Mzc1IDAgMjYuNzI2NTYyIDguNDk2MDk0IDQ4LjM2MzI4MSAyNS4yNSA2NC4zMjAzMTIgMTYuNTQ2ODc1IDE1Ljc0NjA5NCAzOC40NDE0MDYgMjMuNzM0Mzc1IDY1LjA2NjQwNiAyMy43MzQzNzVoMjQ2LjUzMTI1YzI2LjYyNSAwIDQ4LjUxMTcxOS03Ljk4NDM3NSA2NS4wNjI1LTIzLjczNDM3NSAxNi43NTc4MTMtMTUuOTQ1MzEyIDI1LjI1MzkwNi0zNy41ODU5MzcgMjUuMjUzOTA2LTY0LjMyNDIxOS0uMDAzOTA2LTEwLjMxNjQwNi0uMzUxNTYyLTIwLjQ5MjE4Ny0xLjAzNTE1Ni0zMC4yNDIxODd6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="" className="" />
          </div>
          <div className="text-truncate nav-link-name">Profile</div>
        </Link>
        <Link to="/subjects" className={`${this.isActive('/subjects')} align-items-center d-flex px-3 my-2 rounded flex-nowrap`} onClick={() => this.setState({ activeLink: '/subjects' })}>
          <div className="nav-link-img">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDI5Ni45OTkgMjk2Ljk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjk2Ljk5OSAyOTYuOTk5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPGc+CgkJCTxwYXRoIGQ9Ik00NS40MzIsMzUuMDQ5Yy0wLjAwOCwwLTAuMDE3LDAtMC4wMjUsMGMtMi44MDksMC01LjQ1MSwxLjA5NS03LjQ0NiwzLjA4NWMtMi4wMTcsMi4wMTItMy4xMjgsNC42OTEtMy4xMjgsNy41NDMgICAgIHYxNTkuMzY1YzAsNS44NDQsNC43NzMsMTAuNjEsMTAuNjQxLDEwLjYyNWMyNC43MzgsMC4wNTksNjYuMTg0LDUuMjE1LDk0Ljc3NiwzNS4xMzZWODQuMDIzYzAtMS45ODEtMC41MDYtMy44NDItMS40NjEtNS4zODIgICAgIEMxMTUuMzIyLDQwLjg0OSw3MC4yMjYsMzUuMTA3LDQ1LjQzMiwzNS4wNDl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik0yNjIuMTY3LDIwNS4wNDJWNDUuNjc2YzAtMi44NTItMS4xMTEtNS41MzEtMy4xMjgtNy41NDNjLTEuOTk1LTEuOTktNC42MzktMy4wODUtNy40NDUtMy4wODVjLTAuMDA5LDAtMC4wMTgsMC0wLjAyNiwwICAgICBjLTI0Ljc5MywwLjA1OS02OS44ODksNS44MDEtOTMuMzU3LDQzLjU5M2MtMC45NTUsMS41NC0xLjQ2LDMuNDAxLTEuNDYsNS4zODJ2MTY2Ljc3OSAgICAgYzI4LjU5Mi0yOS45MjEsNzAuMDM4LTM1LjA3Nyw5NC43NzYtMzUuMTM2QzI1Ny4zOTQsMjE1LjY1MSwyNjIuMTY3LDIxMC44ODUsMjYyLjE2NywyMDUuMDQyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjg2LjM3Myw3MS44MDFoLTcuNzA2djEzMy4yNDFjMCwxNC45MjEtMTIuMTU3LDI3LjA4OC0yNy4xMDEsMjcuMTI1Yy0yMC45ODMsMC4wNS01NS41ODEsNC4xNTMtODAuMDg0LDI3LjM0NCAgICAgYzQyLjM3OC0xMC4zNzYsODcuMDUyLTMuNjMxLDExMi41MTIsMi4xNzFjMy4xNzksMC43MjQsNi40NjQtMC4wMjQsOS4wMTEtMi4wNTRjMi41MzgtMi4wMjUsMy45OTQtNS4wNTIsMy45OTQtOC4zMDFWODIuNDI3ICAgICBDMjk3LDc2LjU2OCwyOTIuMjMyLDcxLjgwMSwyODYuMzczLDcxLjgwMXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiNGRkZGRkYiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTE4LjMzMiwyMDUuMDQyVjcxLjgwMWgtNy43MDZDNC43NjgsNzEuODAxLDAsNzYuNTY4LDAsODIuNDI3djE2OC44OTdjMCwzLjI1LDEuNDU2LDYuMjc2LDMuOTk0LDguMzAxICAgICBjMi41NDUsMi4wMjksNS44MjcsMi43OCw5LjAxMSwyLjA1NGMyNS40Ni01LjgwMyw3MC4xMzUtMTIuNTQ3LDExMi41MTEtMi4xNzFjLTI0LjUwMi0yMy4xOS01OS4xLTI3LjI5Mi04MC4wODMtMjcuMzQyICAgICBDMzAuNDksMjMyLjEzLDE4LjMzMiwyMTkuOTYzLDE4LjMzMiwyMDUuMDQyeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPgoJCTwvZz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" alt="" className="" />
          </div>
          <div className="text-truncate nav-link-name">Subjects</div>
        </Link>
        <Link to="/assignments" className={`${this.isActive('/assignments')} align-items-center d-flex px-3 my-2 rounded flex-nowrap`} onClick={() => this.setState({ activeLink: '/assignments' })}>
          <div className="nav-link-img">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDY5LjMzNiA0NjkuMzM2IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjkuMzM2IDQ2OS4zMzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTM0Ny44NzgsMTUxLjM1N2MtNC00LjAwMy0xMS4wODMtNC4wMDMtMTUuMDgzLDBMMTI5LjkwOSwzNTQuNDE0Yy0yLjQyNywyLjQyOS0zLjUzMSw1Ljg3LTIuOTksOS4yNTggICAgIGMwLjU1MiwzLjM4OCwyLjY5OCw2LjMwNyw1Ljc2LDcuODRsMTYuNjU2LDguMzR2MjguMDQ5bC01MS4wMzEsMTQuNjAybC01MS41MS01MS41NTRsMTQuNTktNTEuMDc1aDI4LjAyNWw4LjMzMywxNi42NyAgICAgYzEuNTMxLDMuMDY1LDQuNDQ4LDUuMjEzLDcuODMzLDUuNzY1YzAuNTczLDAuMDk0LDEuMTQ2LDAuMTM1LDEuNzA4LDAuMTM1YzIuODAyLDAsNS41MzEtMS4xMDUsNy41NDItMy4xMjhMMzE3LjcxMSwxMzYuMjYgICAgIGMyLTIuMDAyLDMuMTI1LTQuNzEyLDMuMTI1LTcuNTQ4YzAtMi44MzYtMS4xMjUtNS41NDYtMy4xMjUtNy41NDhsLTM5LjIyOS0zOS4yNjNjLTItMi4wMDItNC43MDgtMy4xMjgtNy41NDItMy4xMjhoLTAuMDIxICAgICBjLTIuODQ0LDAuMDEtNS41NjMsMS4xNDctNy41NTIsMy4xNTlMNDUuNzYzLDMwMS42ODJjLTAuMTA1LDAuMTA3LTAuMSwwLjI3LTAuMjAxLDAuMzc5Yy0xLjA5NSwxLjE4My0yLjAwOSwyLjU0OS0yLjQ4Nyw0LjIwOCAgICAgbC0xOC41MjEsNjQuODU3TDAuNDA5LDQ1NS43M2MtMS4wNjMsMy43MjItMC4wMjEsNy43MzYsMi43MTksMTAuNDc4YzIuMDMxLDIuMDMzLDQuNzUsMy4xMjgsNy41NDIsMy4xMjggICAgIGMwLjk3OSwwLDEuOTU4LTAuMTM2LDIuOTI3LTAuNDA3bDg0LjUzMS0yNC4xNjZsNjQuODAyLTE4LjUzN2MwLjE5NS0wLjA1NiwwLjMyOS0wLjIwMywwLjUyLTAuMjcgICAgIGMwLjY3My0wLjIzMiwxLjI2Mi0wLjYxLDEuODgxLTAuOTc2YzAuNjA4LTAuMzYxLDEuMjE2LTAuNjgyLDEuNzMtMS4xNDZjMC4xMzgtMC4xMjIsMC4zMTktMC4xNjcsMC40NTItMC4yOThsMjE5LjU2My0yMTcuNzg5ICAgICBjMi4wMS0xLjk5MSwzLjE0Ni00LjcxMiwzLjE1Ni03LjU1OGMwLjAxLTIuODM2LTEuMTE1LTUuNTU3LTMuMTI1LTcuNTY5TDM0Ny44NzgsMTUxLjM1N3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQkJPHBhdGggZD0iTTQ1Ni44MzYsNzYuMTY4bC02NC02NC4wNTRjLTE2LjEyNS0xNi4xMzktNDQuMTc3LTE2LjE3LTYwLjM2NSwwLjAzMWwtMzkuMDczLDM5LjQ2MSAgICAgYy00LjEzNSw0LjE4MS00LjEyNSwxMC45MDUsMC4wMzEsMTUuMDY1bDEwOC44OTYsMTA4Ljk4OGMyLjA4MywyLjA4NSw0LjgxMywzLjEyOCw3LjU0MiwzLjEyOGMyLjcxOSwwLDUuNDI3LTEuMDMyLDcuNTEtMy4wOTYgICAgIGwzOS40NTgtMzkuMTM3YzguMDYzLTguMDY5LDEyLjUtMTguNzg3LDEyLjUtMzAuMTkyUzQ2NC44OTksODQuMjM3LDQ1Ni44MzYsNzYuMTY4eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCTwvZz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" alt="" className="" />
          </div>
          <div className="text-truncate nav-link-name">Assigments</div>
        </Link>
        {/* <Link to="/notes" className="text-center d-none">
            <i className="nav-ico fa fa-sticky-note"></i> Notes  </Link>
          <Link to="/messages" className="text-center d-none">
            <i className="nav-ico fa fa-comments"></i>  Messages </Link> */}
        <Link to="/marks" className={`${this.isActive('/marks')} align-items-center d-flex px-3 my-2 rounded flex-nowrap`} onClick={() => this.setState({ activeLink: '/marks' })}>
          <div className="nav-link-img">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJCb2xkIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiI+PGc+PHBhdGggZD0ibS44MjggMTMuMzM2Yy0uMjYxLjMwNC0uMzg4LjY5MS0uMzU3IDEuMDkxcy4yMTUuNzY0LjUyIDEuMDI0bDcuNDAzIDYuMzQ2Yy4yNzUuMjM1LjYxNi4zNjEuOTc0LjM2MS4wNDQgMCAuMDg5LS4wMDIuMTM0LS4wMDYuNDA1LS4wMzYuNzctLjIyOSAxLjAyOC0uNTQybDEyLjY2Mi0xNS40MTFjLjI1NC0uMzEuMzczLS43LjMzNC0xLjA5OS0uMDQtLjM5OS0uMjMxLS43NTktLjU0MS0xLjAxNGwtMi4zMTgtMS45MDRjLS42MzktLjUyNC0xLjU4NS0uNDMyLTIuMTExLjIwN2wtOS43NDUgMTEuODYxLTMuOTE2LTMuMzU1Yy0uNjI4LS41MzYtMS41NzYtLjQ2NS0yLjExNS4xNjN6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+PC9nPiA8L3N2Zz4=" alt="" className="" />
          </div>
          <div className="text-truncate nav-link-name">Marks</div>
        </Link>

 
        <Link onClick={this.logOut} to="/sign" className="align-items-center d-flex px-3 my-2 rounded flex-nowrap">
          <div className="nav-link-img">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LjAyNiwwYy0yNC44MTYsMC00NS4wMDQsMjAuMTg4LTQ1LjAwNCw0NS4wMDR2MTgxLjAxNmMwLDI0LjgxNiwyMC4xODgsNDUuMDA0LDQ1LjAwNCw0NS4wMDQgICAgczQ1LjAwNC0yMC4xODgsNDUuMDA0LTQ1LjAwNFY0NS4wMDRDMzAxLjAzLDIwLjE4OCwyODAuODQyLDAsMjU2LjAyNiwweiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDA2LjYyNSwxMTguOTU5Yy0xOC45MzktMTcuMDgzLTQ2LjUwMi0xNS4xNC02My4wNDEsMS44NzNjLTE2LjYzMiwxNy4xMDktMTcuOTE3LDQ2LjA4NiwzLjE1Myw2NS4yOTYgICAgYzMzLjQ0LDMwLjM5NSw1MC4zNDMsNzYuNDU5LDQyLjMzNiwxMjIuOTI4Yy0xMC44NjgsNjMuMDY3LTY1LjcxNywxMTIuNzY3LTEzMy4wNSwxMTIuOTE1ICAgIGMtNjguOTcxLDAuMTUyLTEyMS44MDktNTAuNzctMTMyLjcwOC0xMTAuNjE3Yy04LjQ5Ny00Ni43NDcsNy4xNzktOTMuNTUzLDQxLjk3Mi0xMjUuMTk3YzIxLjAxLTE5LjEyNywxOS45MTMtNDguMjMyLDMuMjM0LTY1LjM2ICAgIGMtMTYuNTY3LTE3LjAxMy00NC4yOTUtMTguODUxLTYzLjQtMS41NmMtNTIuOTA5LDQ3LjkyMy04MC41MjcsMTE4Ljc2OS03Mi44NDMsMTkwLjU4QzQ0LjQ5Niw0MjMuOTk1LDE0MC45LDUxMiwyNTYuNTUzLDUxMiAgICBjMTE0LjMyNiwwLDIwNy45MzQtODguMjE2LDIyMi4zNjgtMTk0Ljc0M0M0ODguOTg1LDI0My4wMjcsNDYxLjk1NywxNjguODk5LDQwNi42MjUsMTE4Ljk1OXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" alt="" className="" />
          </div>
          <div className="text-truncate nav-link-name">Sign Out</div>
        </Link>
      </div>
    );
  }
}

export default Nav;
