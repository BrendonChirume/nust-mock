import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dayjs from "dayjs"
import LocalizedFormat from 'dayjs/plugin/localizedFormat'



export default class TopicsContent extends Component {
    state = {
        isOpen: false
    }
    isOpen = () => {
        if (this.state.isOpen) {
            return this.setState({ isOpen: false })
        } else {
            return this.setState({ isOpen: true })
        }
    }

    iconVNL =()=>{
        if ( this.props.isVideo === "yes") {
          return (
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ5OS45OTkgNDk5Ljk5OSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA0OTkuOTk5IDQ5OS45OTkiIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9Im0xNzEuODc1IDM3Mi4yMzdjLTIuNzAxIDAtNS40MDItLjcwMi03LjgxMi0yLjA5LTQuODM3LTIuNzkyLTcuODEyLTcuOTUtNy44MTItMTMuNTM1di0yMTUuOTg3YzAtNS41ODUgMi45NzUtMTAuNzI3IDcuNzk3LTEzLjUxOSA0LjgzNy0yLjc5MiAxMC43ODgtMi44MzggMTUuNjI1LS4wMTVsMTg3LjUgMTA3Ljk0YzQuODM3IDIuNzc3IDcuODI4IDcuOTUgNy44MjggMTMuNTM1cy0yLjk3NSAxMC43NDItNy44MjggMTMuNTM1bC0xODcuNSAxMDguMDQ3Yy0yLjQxMiAxLjM4OC01LjExMyAyLjA4OS03Ljc5OCAyLjA4OXptMTUuNjI1LTIwNC41ODl2MTYxLjkyNmwxNDAuNTY0LTgxLjAwOWMtLjAwMSAwLTE0MC41NjQtODAuOTE3LTE0MC41NjQtODAuOTE3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTAgNDk5Ljk5OWMtMTM3Ljg0OCAwLTI1MC0xMTIuMTUyLTI1MC0yNTBzMTEyLjE1Mi0yNDkuOTk5IDI1MC0yNDkuOTk5IDI1MCAxMTIuMTUyIDI1MCAyNTAtMTEyLjE1MyAyNDkuOTk5LTI1MCAyNDkuOTk5em0wLTQ2OC43NDljLTEyMC42MiAwLTIxOC43NSA5OC4xMjktMjE4Ljc1IDIxOC43NXM5OC4xMjkgMjE4Ljc1IDIxOC43NSAyMTguNzUgMjE4Ljc0OS05OC4xMyAyMTguNzQ5LTIxOC43NS05OC4xMjktMjE4Ljc1LTIxOC43NDktMjE4Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="" className="btn-img mr-2 align-middle" />
            )
          } else {
            return (
                <svg
                className="lesson-no-video-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
              >
                <g>
                  <title>background</title>
                  <rect
                    fill="none"
                    id="canvas_background"
                    height="402"
                    width="582"
                    y="-1"
                    x="-1"
                  />
                </g>
                <g>
                  <title>Layer 1</title>
                  <path
                    fill="#ffffff"
                    id="svg_3"
                    d="m23,48.049c-0.147,0 -0.294,-0.032 -0.43,-0.097l-21,-10c-0.348,-0.166 -0.57,-0.517 -0.57,-0.903l0,-31c0,-0.343 0.176,-0.662 0.466,-0.846c0.289,-0.183 0.654,-0.204 0.964,-0.057l20.57,9.795l20.57,-9.796c0.31,-0.146 0.673,-0.126 0.963,0.058c0.291,0.184 0.467,0.503 0.467,0.846l0,31c0,0.386 -0.222,0.737 -0.57,0.903l-21,10c-0.136,0.065 -0.283,0.097 -0.43,0.097zm-20,-11.632l20,9.524l20,-9.524l0,-28.784l-19.57,9.319c-0.271,0.129 -0.588,0.129 -0.859,0l-19.571,-9.319l0,28.784z"
                  />
                  <path
                    fill="#ffffff"
                    id="svg_5"
                    d="m23,12.204l-17.433,-8.301c-0.499,-0.238 -0.71,-0.835 -0.473,-1.333c0.238,-0.499 0.834,-0.708 1.333,-0.474l16.573,7.893l16.573,-7.893c0.5,-0.234 1.095,-0.025 1.333,0.474c0.237,0.498 0.026,1.095 -0.473,1.333l-17.433,8.301z"
                  />
                  <rect
                    fill="#ffffff"
                    id="svg_7"
                    y="16.049"
                    x="22"
                    width="2"
                    height="31"
                  />
                </g>
              </svg>
          )
        }
      }

    componentDidMount=()=>{
        // console.log(this.props.datePosted)
    }
    render() {
      dayjs.extend(LocalizedFormat)
        return (
            <div className="row px-3 video-row my-2">
                <div className="col-1 d-flex align-items-center pl-lg-4">
              {this.iconVNL()}
                </div>
                <Link to={this.props.url} className="col-7 text-white d-flex p-2 align-items-center justify-content-start ">{this.props.Name}</Link>
                <div className="col-1 img-hom d-flex align-items-center justify-content-center">
                    <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1NiIgeDI9IjI1NiIgeTE9IjAiIHkyPSI1MTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhZjU5OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWVmZCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTI1OC4yNTc4MTIgMzEwLjM0NzY1NiAyMjMuOTU3MDMyLTI0NS44MjAzMTIgMjkuNTY2NDA2IDI2LjkzNzUtMjUxLjQ3MjY1NiAyNzYuMDE5NTMxLTEzNy4wODk4NDQtMTMwLjMyMDMxMyAyNy41NjI1LTI4Ljk5MjE4N3ptMjM3Ljk5MjE4OC0xNDMuMDkzNzUtMzEuMTkxNDA2IDM0LjM0Mzc1YzQuNTI3MzQ0IDE3LjM4NjcxOSA2Ljk0MTQwNiAzNS42MTcxODggNi45NDE0MDYgNTQuNDAyMzQ0IDAgMTE5LjEwMTU2Mi05Ni44OTg0MzggMjE2LTIxNiAyMTZzLTIxNi05Ni44OTg0MzgtMjE2LTIxNiA5Ni44OTg0MzgtMjE2IDIxNi0yMTZjNTUuMTc1NzgxIDAgMTA1LjU3NDIxOSAyMC44MDQ2ODggMTQzLjc5Njg3NSA1NC45Njg3NWwyNi45NjQ4NDQtMjkuNjkxNDA2Yy00Ny4wMDc4MTMtNDIuMTkxNDA2LTEwNy4xMDkzNzUtNjUuMjc3MzQ0LTE3MC43NjE3MTktNjUuMjc3MzQ0LTY4LjM3ODkwNiAwLTEzMi42Njc5NjkgMjYuNjI4OTA2LTE4MS4wMTk1MzEgNzQuOTgwNDY5LTQ4LjM1MTU2MyA0OC4zNTE1NjItNzQuOTgwNDY5IDExMi42NDA2MjUtNzQuOTgwNDY5IDE4MS4wMTk1MzFzMjYuNjI4OTA2IDEzMi42Njc5NjkgNzQuOTgwNDY5IDE4MS4wMTk1MzFjNDguMzUxNTYyIDQ4LjM1MTU2MyAxMTIuNjQwNjI1IDc0Ljk4MDQ2OSAxODEuMDE5NTMxIDc0Ljk4MDQ2OXMxMzIuNjY3OTY5LTI2LjYyODkwNiAxODEuMDE5NTMxLTc0Ljk4MDQ2OWM0OC4zNTE1NjMtNDguMzUxNTYyIDc0Ljk4MDQ2OS0xMTIuNjQwNjI1IDc0Ljk4MDQ2OS0xODEuMDE5NTMxIDAtMzAuNzczNDM4LTUuNDEwMTU2LTYwLjcxMDkzOC0xNS43NS04OC43NDYwOTR6bTAgMCIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPgo=" alt="" className="btn-img align-middle" />
                </div>
        <div className="col-2 d-flex align-items-center justify-content-center">{dayjs(this.props.datePosted).format("l") }</div>
                <button className={this.props.hideExpand ? 'd-none' : "col-1 text-center d-block border-0 video-link"} onClick={() => this.isOpen()}>
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01MDYuMTU3LDEzMi4zODZjLTcuODAzLTcuODE5LTIwLjQ2NS03LjgzMS0yOC4yODUtMC4wMjlsLTIwNy43MywyMDcuMjk5Yy03Ljc5OSw3Ljc5OC0yMC40ODYsNy43OTctMjguMjk5LTAuMDE1ICAgIEwzNC4xMjgsMTMyLjM1N2MtNy44MTktNy44MDMtMjAuNDgxLTcuNzktMjguMjg1LDAuMDI5Yy03LjgwMiw3LjgxOS03Ljc4OSwyMC40ODIsMC4wMjksMjguMjg0bDIwNy43MDEsMjA3LjI3ICAgIGMxMS43MDEsMTEuNjk5LDI3LjA2NiwxNy41NDcsNDIuNDMzLDE3LjU0N2MxNS4zNTgsMCwzMC43MTktNS44NDYsNDIuNDA1LTE3LjUzM0w1MDYuMTI4LDE2MC42NyAgICBDNTEzLjk0NiwxNTIuODY4LDUxMy45NTksMTQwLjIwNSw1MDYuMTU3LDEzMi4zODZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="" className="btn-img px-1 align-middle" />
                </button>
                <div className={`${this.state.isOpen ? 'extended-topic_h' : 'extended-topic'} col-12`}>
                    {this.props.element}
                </div>
            </div>
        )
    }
}
