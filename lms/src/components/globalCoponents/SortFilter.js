import React, { Component } from 'react'
import DropdownMenu from './DropdownMenu'

export class SortFilter extends Component {
    state = {
        submenuShow: false,
        sortOptions: ['date', 'teacher', 'time']
    }
    submenuShow = e => {
        if (this.state.submenuShow) {
            this.setState({ submenuShow: false });
        } else {
            this.setState({ submenuShow: true });
        }
    }
    render() {
        return (
            <div className="d-flex m-3 py-1 px-4 sort-filter rounded mr-lg-0 ml-lg-auto  justify-content-end flex-reverse">
                <div className="d-flex align-items-center justify-content-end mr-5">
                    <label htmlFor="ls-sort-icon" className="m-0 mr-3" onClick={this.submenuShow}>Sort by:</label>
                    <div className="icon text-center rounded p-1" id="ls-sort-icon" onClick={this.submenuShow}>
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yNjcuOTk4LDEyNS42NzFMMTc3Ljk5Nyw1LjY2OWMtNS42NTQtNy41NTktMTguMzQtNy41NTktMjMuOTk0LDBMNjQuMDAyLDEyNS42NzEgICAgYy03LjM5OSw5Ljg0NC0wLjM1NSwyMy45OTQsMTEuOTk3LDIzLjk5NGg0NS4wMDF2Mjg1LjAwM2MwLDguMjkxLDYuNzA5LDE1LDE1LDE1SDE5NmM4LjI5MSwwLDE0LjgtNi43MDksMTQuOC0xNVYxNDkuNjY1aDQ1LjIgICAgQzI2OC4zNjMsMTQ5LjY2NSwyNzUuMzg5LDEzNS41MDUsMjY3Ljk5OCwxMjUuNjcxeiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojNzQ3Rjg3IiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJPC9nPgo8L2c+PGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNDM2LjAwMywzNjIuMDA1aC00NS4yMDFWNzcuMDAxYzAtOC4yOTEtNi41MDktMTUtMTQuOC0xNWgtNjAuMDAxYy04LjI5MSwwLTE1LDYuNzA5LTE1LDE1djI4NS4wMDNoLTQ1LjAwMSAgICBjLTEyLjM1MywwLTE5LjM5NiwxNC4xNS0xMS45OTcsMjMuOTk0TDMzNC4wMDUsNTA2YzUuOTg5LDguMDA2LDE4LjAxNCw3Ljk5NCwyMy45OTQsMEw0NDgsMzg1Ljk5OSAgICBDNDU1LjM5MSwzNzYuMTY1LDQ0OC4zNjUsMzYyLjAwNSw0MzYuMDAzLDM2Mi4wMDV6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiM3NDdGODciIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="" className="btn-img" />
                    </div>
                    <DropdownMenu array={this.state.sortOptions} active={this.state.submenuShow}/>
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <label htmlFor="ls-filter-icon" className="m-0 mr-3">Filter :</label>
                    <div className="icon text-center rounded p-1" id="ls-filter-icon">
                        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDQ1OSA0NTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1OSA0NTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48Zz4KCTxnIGlkPSJmaWx0ZXIiPgoJCTxwYXRoIGQ9Ik0xNzguNSwzODIuNWgxMDJ2LTUxaC0xMDJWMzgyLjV6IE0wLDc2LjV2NTFoNDU5di01MUgweiBNNzYuNSwyNTVoMzA2di01MWgtMzA2VjI1NXoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6Izc0N0Y4NyIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+" alt="" className="btn-img" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SortFilter;
