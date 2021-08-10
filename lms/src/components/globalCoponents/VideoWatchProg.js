import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ProgressBar extends Component {
    state = {
        progress: this.props.progress,
    }
    render() {
        return (
            <div className="watch-progress my-2 rounded">
                <Link to="/" className="wach-prg-title text-white">Rapid ES6 Training</Link>
                <div className="ls-vid-info my-2 d-flex justify-content-between">
                    <span>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ5OS45OTkgNDk5Ljk5OSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA0OTkuOTk5IDQ5OS45OTkiIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9Im0xNzEuODc1IDM3Mi4yMzdjLTIuNzAxIDAtNS40MDItLjcwMi03LjgxMi0yLjA5LTQuODM3LTIuNzkyLTcuODEyLTcuOTUtNy44MTItMTMuNTM1di0yMTUuOTg3YzAtNS41ODUgMi45NzUtMTAuNzI3IDcuNzk3LTEzLjUxOSA0LjgzNy0yLjc5MiAxMC43ODgtMi44MzggMTUuNjI1LS4wMTVsMTg3LjUgMTA3Ljk0YzQuODM3IDIuNzc3IDcuODI4IDcuOTUgNy44MjggMTMuNTM1cy0yLjk3NSAxMC43NDItNy44MjggMTMuNTM1bC0xODcuNSAxMDguMDQ3Yy0yLjQxMiAxLjM4OC01LjExMyAyLjA4OS03Ljc5OCAyLjA4OXptMTUuNjI1LTIwNC41ODl2MTYxLjkyNmwxNDAuNTY0LTgxLjAwOWMtLjAwMSAwLTE0MC41NjQtODAuOTE3LTE0MC41NjQtODAuOTE3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTAgNDk5Ljk5OWMtMTM3Ljg0OCAwLTI1MC0xMTIuMTUyLTI1MC0yNTBzMTEyLjE1Mi0yNDkuOTk5IDI1MC0yNDkuOTk5IDI1MCAxMTIuMTUyIDI1MCAyNTAtMTEyLjE1MyAyNDkuOTk5LTI1MCAyNDkuOTk5em0wLTQ2OC43NDljLTEyMC42MiAwLTIxOC43NSA5OC4xMjktMjE4Ljc1IDIxOC43NXM5OC4xMjkgMjE4Ljc1IDIxOC43NSAyMTguNzUgMjE4Ljc0OS05OC4xMyAyMTguNzQ5LTIxOC43NS05OC4xMjktMjE4Ljc1LTIxOC43NDktMjE4Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="" className="btn-img mr-2" id="ls-vid-stats" />
                        <span className="ls-vid-teacher mx-1 small">by:&nbsp;<i>Mr Stanely Chikari</i></span>.
                        <Link to="" className="ls-vid-teacher mx-1 small"><i>Combined Science</i></Link>
                    </span>
                    <span>
                        <label htmlFor="ls-vid-stats" className="mb-0 mr-4 small">Status:</label>
                        {this.props.status ? <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgaGVpZ2h0PSI1MTJweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI1NiIgeDI9IjI1NiIgeTE9IjAiIHkyPSI1MTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJhZjU5OCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOWVmZCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZD0ibTI1OC4yNTc4MTIgMzEwLjM0NzY1NiAyMjMuOTU3MDMyLTI0NS44MjAzMTIgMjkuNTY2NDA2IDI2LjkzNzUtMjUxLjQ3MjY1NiAyNzYuMDE5NTMxLTEzNy4wODk4NDQtMTMwLjMyMDMxMyAyNy41NjI1LTI4Ljk5MjE4N3ptMjM3Ljk5MjE4OC0xNDMuMDkzNzUtMzEuMTkxNDA2IDM0LjM0Mzc1YzQuNTI3MzQ0IDE3LjM4NjcxOSA2Ljk0MTQwNiAzNS42MTcxODggNi45NDE0MDYgNTQuNDAyMzQ0IDAgMTE5LjEwMTU2Mi05Ni44OTg0MzggMjE2LTIxNiAyMTZzLTIxNi05Ni44OTg0MzgtMjE2LTIxNiA5Ni44OTg0MzgtMjE2IDIxNi0yMTZjNTUuMTc1NzgxIDAgMTA1LjU3NDIxOSAyMC44MDQ2ODggMTQzLjc5Njg3NSA1NC45Njg3NWwyNi45NjQ4NDQtMjkuNjkxNDA2Yy00Ny4wMDc4MTMtNDIuMTkxNDA2LTEwNy4xMDkzNzUtNjUuMjc3MzQ0LTE3MC43NjE3MTktNjUuMjc3MzQ0LTY4LjM3ODkwNiAwLTEzMi42Njc5NjkgMjYuNjI4OTA2LTE4MS4wMTk1MzEgNzQuOTgwNDY5LTQ4LjM1MTU2MyA0OC4zNTE1NjItNzQuOTgwNDY5IDExMi42NDA2MjUtNzQuOTgwNDY5IDE4MS4wMTk1MzFzMjYuNjI4OTA2IDEzMi42Njc5NjkgNzQuOTgwNDY5IDE4MS4wMTk1MzFjNDguMzUxNTYyIDQ4LjM1MTU2MyAxMTIuNjQwNjI1IDc0Ljk4MDQ2OSAxODEuMDE5NTMxIDc0Ljk4MDQ2OXMxMzIuNjY3OTY5LTI2LjYyODkwNiAxODEuMDE5NTMxLTc0Ljk4MDQ2OWM0OC4zNTE1NjMtNDguMzUxNTYyIDc0Ljk4MDQ2OS0xMTIuNjQwNjI1IDc0Ljk4MDQ2OS0xODEuMDE5NTMxIDAtMzAuNzczNDM4LTUuNDEwMTU2LTYwLjcxMDkzOC0xNS43NS04OC43NDYwOTR6bTAgMCIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPgo=" alt="" className="btn-img" /> : <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSItMjEgLTIxIDY4Mi42NjY2OSA2ODIuNjY2NjkiIHdpZHRoPSI1MTIiIGNsYXNzPSJob3ZlcmVkLXBhdGhzIj48Zz48cGF0aCBkPSJtMzIyLjgyMDMxMiAzODcuOTMzNTk0IDI3OS45NDkyMTktMzA3LjI3MzQzOCAzNi45NTcwMzEgMzMuNjcxODc1LTMxNC4zMzk4NDMgMzQ1LjAyMzQzOC0xNzEuMzYzMjgxLTE2Mi45MDIzNDQgMzQuNDUzMTI0LTM2LjIzODI4MXptMjk3LjQ5MjE4OC0xNzguODY3MTg4LTM4Ljk4ODI4MSA0Mi45Mjk2ODhjNS42NjAxNTYgMjEuNzM0Mzc1IDguNjc1NzgxIDQ0LjUyMzQzNyA4LjY3NTc4MSA2OC4wMDM5MDYgMCAxNDguODc1LTEyMS4xMjUgMjcwLTI3MCAyNzBzLTI3MC0xMjEuMTI1LTI3MC0yNzAgMTIxLjEyNS0yNzAgMjcwLTI3MGM2OC45Njg3NSAwIDEzMS45Njg3NSAyNi4wMDc4MTIgMTc5Ljc0NjA5NCA2OC43MTA5MzhsMzMuNzA3MDMxLTM3LjExMzI4MmMtNTguNzYxNzE5LTUyLjczODI4MS0xMzMuODg2NzE5LTgxLjU5NzY1Ni0yMTMuNDUzMTI1LTgxLjU5NzY1Ni04NS40NzI2NTYgMC0xNjUuODM1OTM4IDMzLjI4NTE1Ni0yMjYuMjczNDM4IDkzLjcyNjU2Mi02MC40NDE0MDYgNjAuNDM3NS05My43MjY1NjIgMTQwLjgwMDc4Mi05My43MjY1NjIgMjI2LjI3MzQzOHMzMy4yODUxNTYgMTY1LjgzNTkzOCA5My43MjY1NjIgMjI2LjI3MzQzOGM2MC40Mzc1IDYwLjQ0MTQwNiAxNDAuODAwNzgyIDkzLjcyNjU2MiAyMjYuMjczNDM4IDkzLjcyNjU2MnMxNjUuODM1OTM4LTMzLjI4NTE1NiAyMjYuMjczNDM4LTkzLjcyNjU2MmM2MC40NDE0MDYtNjAuNDM3NSA5My43MjY1NjItMTQwLjgwMDc4MiA5My43MjY1NjItMjI2LjI3MzQzOCAwLTM4LjQ2ODc1LTYuNzYxNzE5LTc1Ljg5MDYyNS0xOS42ODc1LTExMC45MzM1OTR6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRTNFOUVEIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="" className="btn-img mr-2" id="ls-vid-stats" />}
                    </span>
                </div>
                <div className="align-items-center justify-content-end">
                    <div className="d-flex justify-content-between">
                        <div className="text-center rounded p-1" id="ls-sort-icon">1hr 26min</div>
                        <div className="ls-progr-badge bar h-100 text-center rounded p-1" id="ls-sort-icon">{this.state.progress}%</div>
                    </div>
                    <div className="mb-3 mt-1 progress w-100">
                        <div className="bg-primary h-100" style={{ width: `${this.state.progress}%` }}> </div>
                        {/* <div className={`${this.state.progress >= 75 ? "bg-success" : ""}  ${this.state.progress < 5 ? "bg-warning" : ""} ${this.state.progress < 10 ? "bg-secondary" : ""} ${this.state.progress >= 25 ? "bg-primary" : ''} bar h-100`} style={{ width: `${this.state.progress}%` }}> </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProgressBar
