import React, { Component } from 'react'

export class SubNav extends Component {
    state = {
        submenuShow: false,
        submenuOptions: [{
            title: 'Account',
            url: 'account',
        }, {
            title: 'History',
            url: 'history',
        }, {
            title: 'Privacy Policy',
            url: 'Privacy Policy',
        }, {
            title: 'Teachers',
            url: 'teachers',
        },]
    }
    render() {
        return (
            <div className="d-flex subNav-search px-3 justify-content-between align-items-center">
                <div className="search-container my-3">
                    <form className="position-ralative w-100">
                        <input type="search" name="naVsearch" className="nav-search border-0 rounded" placeholder="What do you want to learn?" />
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDMwLjIzOSAzMC4yMzkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMwLjIzOSAzMC4yMzk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48Zz4KCTxwYXRoIGQ9Ik0yMC4xOTQsMy40NmMtNC42MTMtNC42MTMtMTIuMTIxLTQuNjEzLTE2LjczNCwwYy00LjYxMiw0LjYxNC00LjYxMiwxMi4xMjEsMCwxNi43MzUgICBjNC4xMDgsNC4xMDcsMTAuNTA2LDQuNTQ3LDE1LjExNiwxLjM0YzAuMDk3LDAuNDU5LDAuMzE5LDAuODk3LDAuNjc2LDEuMjU0bDYuNzE4LDYuNzE4YzAuOTc5LDAuOTc3LDIuNTYxLDAuOTc3LDMuNTM1LDAgICBjMC45NzgtMC45NzgsMC45NzgtMi41NiwwLTMuNTM1bC02LjcxOC02LjcyYy0wLjM1NS0wLjM1NC0wLjc5NC0wLjU3Ny0xLjI1My0wLjY3NEMyNC43NDMsMTMuOTY3LDI0LjMwMyw3LjU3LDIwLjE5NCwzLjQ2eiAgICBNMTguMDczLDE4LjA3NGMtMy40NDQsMy40NDQtOS4wNDksMy40NDQtMTIuNDkyLDBjLTMuNDQyLTMuNDQ0LTMuNDQyLTkuMDQ4LDAtMTIuNDkyYzMuNDQzLTMuNDQzLDkuMDQ4LTMuNDQzLDEyLjQ5MiwwICAgQzIxLjUxNyw5LjAyNiwyMS41MTcsMTQuNjMsMTguMDczLDE4LjA3NHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzgxODE4MSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KPC9nPjwvZz4gPC9zdmc+" alt="" className="position-absolute search-icon" />
                    </form>
                </div>
                <div className="d-flex submenu-activity">
                    <div className="mx-1 py-2 rounded">

                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGc+PGc+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTEwLjY4OCw5NS4xNTZDODAuOTU4LDE1NC42NjcsMjA0LjI2LDI1OS4zNjUsMjQwLjUsMjkyLjAxYzQuODY1LDQuNDA2LDEwLjA4Myw2LjY0NiwxNS41LDYuNjQ2ICAgICBjNS40MDYsMCwxMC42MTUtMi4yMTksMTUuNDY5LTYuNjA0YzM2LjI3MS0zMi42NzcsMTU5LjU3My0xMzcuMzg1LDIyOS44NDQtMTk2Ljg5NmM0LjM3NS0zLjY5OCw1LjA0Mi0xMC4xOTgsMS41LTE0LjcxOSAgICAgQzQ5NC42MjUsNjkuOTksNDgyLjQxNyw2NCw0NjkuMzMzLDY0SDQyLjY2N2MtMTMuMDgzLDAtMjUuMjkyLDUuOTktMzMuNDc5LDE2LjQzOEM1LjY0Niw4NC45NTgsNi4zMTMsOTEuNDU4LDEwLjY4OCw5NS4xNTZ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM1MzU3NUEiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+CgkJCTxwYXRoIGQ9Ik01MDUuODEzLDEyNy40MDZjLTMuNzgxLTEuNzYtOC4yMjktMS4xNDYtMTEuMzc1LDEuNTQyQzQxNi41MSwxOTUuMDEsMzE3LjA1MiwyNzkuNjg4LDI4NS43NiwzMDcuODg1ICAgICBjLTE3LjU2MywxNS44NTQtNDEuOTM4LDE1Ljg1NC01OS41NDItMC4wMjFjLTMzLjM1NC0zMC4wNTItMTQ1LjA0Mi0xMjUtMjA4LjY1Ni0xNzguOTE3Yy0zLjE2Ny0yLjY4OC03LjYyNS0zLjI4MS0xMS4zNzUtMS41NDIgICAgIEMyLjQxNywxMjkuMTU2LDAsMTMyLjkyNywwLDEzNy4wODN2MjY4LjI1QzAsNDI4Ljg2NSwxOS4xMzUsNDQ4LDQyLjY2Nyw0NDhoNDI2LjY2N0M0OTIuODY1LDQ0OCw1MTIsNDI4Ljg2NSw1MTIsNDA1LjMzMyAgICAgdi0yNjguMjVDNTEyLDEzMi45MjcsNTA5LjU4MywxMjkuMTQ2LDUwNS44MTMsMTI3LjQwNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6IzUzNTc1QSIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="" className="mx-4" />
                    </div>
                    <div className="mx-1 py-2 rounded">

                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSItNDMgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIj48Zz48cGF0aCBkPSJtNDEzLjQxNzk2OSAzNjAuODEyNWMtMzIuMjUzOTA3LTI3LjI2NTYyNS01MC43NS02Ny4xMTcxODgtNTAuNzUtMTA5LjMzNTkzOHYtNTkuNDc2NTYyYzAtNzUuMDcwMzEyLTU1Ljc2NTYyNS0xMzcuMjE0ODQ0LTEyOC0xNDcuNjI1di0yMy4wNDI5NjljMC0xMS43OTY4NzUtOS41NTg1OTQtMjEuMzMyMDMxLTIxLjMzNTkzOC0yMS4zMzIwMzEtMTEuNzczNDM3IDAtMjEuMzMyMDMxIDkuNTM1MTU2LTIxLjMzMjAzMSAyMS4zMzIwMzF2MjMuMDQyOTY5Yy03Mi4yNTc4MTIgMTAuNDEwMTU2LTEyOCA3Mi41NTQ2ODgtMTI4IDE0Ny42MjV2NTkuNDc2NTYyYzAgNDIuMjE4NzUtMTguNDk2MDk0IDgyLjA3MDMxMy01MC45NDUzMTIgMTA5LjUwMzkwNy04LjI5Njg3NiA3LjEwNTQ2OS0xMy4wNTQ2ODggMTcuNDI5Njg3LTEzLjA1NDY4OCAyOC4zNTE1NjIgMCAyMC41ODk4NDQgMTYuNzQ2MDk0IDM3LjMzNTkzOCAzNy4zMzIwMzEgMzcuMzM1OTM4aDM1MmMyMC41ODk4NDQgMCAzNy4zMzU5MzgtMTYuNzQ2MDk0IDM3LjMzNTkzOC0zNy4zMzU5MzggMC0xMC45MjE4NzUtNC43NTc4MTMtMjEuMjQ2MDkzLTEzLjI1LTI4LjUxOTUzMXptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojNTM1NzVBIj48L3BhdGg+PHBhdGggZD0ibTIxMy4zMzIwMzEgNTEyYzM4LjYzNjcxOSAwIDcwLjk1NzAzMS0yNy41NDI5NjkgNzguMzc4OTA3LTY0aC0xNTYuNzU3ODEzYzcuNDI1NzgxIDM2LjQ1NzAzMSAzOS43NDYwOTQgNjQgNzguMzc4OTA2IDY0em0wIDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM1MzU3NUEiPjwvcGF0aD48L2c+IDwvc3ZnPg==" alt="" className="mx-4" />
                    </div>
                    <div className="mx-1 py-2 rounded" onClick={() => this.state.submenuShow ? this.setState({ submenuShow: false }) : this.setState({ submenuShow: true })}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00OTIsMjM2SDIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMGMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMGg0NzJjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBTNTAzLjA0NiwyMzYsNDkyLDIzNnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM1MzU3NUEiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5Miw3NkgyMEM4Ljk1NCw3NiwwLDg0Ljk1NCwwLDk2czguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMFM1MDMuMDQ2LDc2LDQ5Miw3NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM1MzU3NUEiPjwvcGF0aD4KCTwvZz4KPC9nPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ5MiwzOTZIMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwYzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwaDQ3MmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMCAgICBDNTEyLDQwNC45NTQsNTAzLjA0NiwzOTYsNDkyLDM5NnoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIHN0eWxlPSJmaWxsOiM1MzU3NUEiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" alt="" className="mx-4" />
                    </div>
                    <div className={` ${this.state.submenuShow ? 'd-inline-block' : 'd-none'} "position-ralative "`}>
                        <div className="subNav-arrow position-absolute"></div>
                        <ul className="header-submenu position-absolute border shadow pt-2">

                            {this.state.submenuOptions.map((item, index) => {
                                return (
                                    <li key={index} className="px-3 pt-1">
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )
                            })}

                            <li className="border-top pt-2 pb-3 px-3 position-relative">
                                <a href="https://app.pluralsight.com/id/signout">
                                    <svg role="img" viewBox="0 0 160 24" className="pt-1">
                                        <path className="svg-linkIcon" d="M14 9h-2.001L12 5H4v14h7.997l.001-4H14v4c0 1.103-.897 2-2 2H4c-1.104 0-2-.897-2-2V5c0-1.104.896-2 2-2h8c1.103 0 2 .896 2 2v4zm2.293-.293l1.414-1.414L22.414 12l-4.707 4.707-1.414-1.414L18.586 13H10v-2h8.586l-2.293-2.293z">
                                        </path>
                                    </svg>
                                    <span className="position-absolute signOut">Sign Out</span ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SubNav
