import React, { Component } from 'react'
import { MDBTabPane, MDBTabContent } from "mdbreact";
import TopicsContent from '../components/lessonsComponents/TopicsContent';

export class lessons extends Component {
    state = {
        activeItem: "1",
    }

    toggle = tab => e => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    isActive = target => {
        if (target === this.state.activeItem) {
            return "lessons-tabs_a";
        } else {
            return undefined;
        }
    };
    render() {
        return (
            <div className="lessons-container text-white">
                <section className="lessons-bunner position-relative">
                    <div className="text-white position-absolute">
                        <span className="coarse-title"> Microsoft Azure DevOps Engineer: <br /> Optimize Feedback Mechanism</span><br />
                        <span>by Steve Physics</span><br />
                        <span>This coarse will educate you on Azure</span>
                        <div className="mt-5">
                            <a href="/watch/cs" target="_blank" rel="noopener noreferrer" className="btn text-white button topic-btn no-outline mx-2">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ5OS45OTkgNDk5Ljk5OSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA0OTkuOTk5IDQ5OS45OTkiIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9Im0xNzEuODc1IDM3Mi4yMzdjLTIuNzAxIDAtNS40MDItLjcwMi03LjgxMi0yLjA5LTQuODM3LTIuNzkyLTcuODEyLTcuOTUtNy44MTItMTMuNTM1di0yMTUuOTg3YzAtNS41ODUgMi45NzUtMTAuNzI3IDcuNzk3LTEzLjUxOSA0LjgzNy0yLjc5MiAxMC43ODgtMi44MzggMTUuNjI1LS4wMTVsMTg3LjUgMTA3Ljk0YzQuODM3IDIuNzc3IDcuODI4IDcuOTUgNy44MjggMTMuNTM1cy0yLjk3NSAxMC43NDItNy44MjggMTMuNTM1bC0xODcuNSAxMDguMDQ3Yy0yLjQxMiAxLjM4OC01LjExMyAyLjA4OS03Ljc5OCAyLjA4OXptMTUuNjI1LTIwNC41ODl2MTYxLjkyNmwxNDAuNTY0LTgxLjAwOWMtLjAwMSAwLTE0MC41NjQtODAuOTE3LTE0MC41NjQtODAuOTE3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTAgNDk5Ljk5OWMtMTM3Ljg0OCAwLTI1MC0xMTIuMTUyLTI1MC0yNTBzMTEyLjE1Mi0yNDkuOTk5IDI1MC0yNDkuOTk5IDI1MCAxMTIuMTUyIDI1MCAyNTAtMTEyLjE1MyAyNDkuOTk5LTI1MCAyNDkuOTk5em0wLTQ2OC43NDljLTEyMC42MiAwLTIxOC43NSA5OC4xMjktMjE4Ljc1IDIxOC43NXM5OC4xMjkgMjE4Ljc1IDIxOC43NSAyMTguNzUgMjE4Ljc0OS05OC4xMyAyMTguNzQ5LTIxOC43NS05OC4xMjktMjE4Ljc1LTIxOC43NDktMjE4Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="" className="btn-img mr-2 align-middle" /> <span className="align-middle">Start Topic</span></a>
                            <a href="/" className="btn text-white mx-2">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2OS4zMzYgNDY5LjMzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY5LjMzNiA0NjkuMzM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ1Ni44MzYsNzYuMTY4bC02NC02NC4wNTRjLTE2LjEyNS0xNi4xMzktNDQuMTc3LTE2LjE3LTYwLjM2NSwwLjAzMUw0NS43NjMsMzAxLjY4MiAgICBjLTEuMjcxLDEuMjgyLTIuMTg4LDIuODU3LTIuNjg4LDQuNTg3TDAuNDA5LDQ1NS43M2MtMS4wNjMsMy43MjItMC4wMjEsNy43MzYsMi43MTksMTAuNDc4YzIuMDMxLDIuMDMzLDQuNzUsMy4xMjgsNy41NDIsMy4xMjggICAgYzAuOTc5LDAsMS45NjktMC4xMzYsMi45MjctMC40MDdsMTQ5LjMzMy00Mi43MDNjMS43MjktMC41LDMuMzAyLTEuNDE4LDQuNTgzLTIuNjlsMjg5LjMyMy0yODYuOTgzICAgIGM4LjA2My04LjA2OSwxMi41LTE4Ljc4NywxMi41LTMwLjE5MlM0NjQuODk5LDg0LjIzNyw0NTYuODM2LDc2LjE2OHogTTI4NS45ODksODkuNzM3bDM5LjI2NCwzOS4yNjRMMTIwLjI1NywzMzMuOTk4ICAgIGwtMTQuNzEyLTI5LjQzNGMtMS44MTMtMy42MTUtNS41LTUuODk2LTkuNTQyLTUuODk2SDc4LjkyMUwyODUuOTg5LDg5LjczN3ogTTI2LjIwMSw0NDMuMTM3TDQwLjA5NSwzOTQuNWwzNC43NDIsMzQuNzQyICAgIEwyNi4yMDEsNDQzLjEzN3ogTTE0OS4zMzYsNDA3Ljk2bC01MS4wMzUsMTQuNTc5bC01MS41MDMtNTEuNTAzbDE0LjU3OS01MS4wMzVoMjguMDMxbDE4LjM4NSwzNi43NzEgICAgYzEuMDMxLDIuMDYzLDIuNzA4LDMuNzQsNC43NzEsNC43NzFsMzYuNzcxLDE4LjM4NVY0MDcuOTZ6IE0xNzAuNjcsMzkwLjQxN3YtMTcuMDgyYzAtNC4wNDItMi4yODEtNy43MjktNS44OTYtOS41NDIgICAgbC0yOS40MzQtMTQuNzEybDIwNC45OTYtMjA0Ljk5NmwzOS4yNjQsMzkuMjY0TDE3MC42NywzOTAuNDE3eiBNNDQxLjc4NCwxMjEuNzJsLTQ3LjAzMyw0Ni42MTNsLTkzLjc0Ny05My43NDdsNDYuNTgyLTQ3LjAwMSAgICBjOC4wNjMtOC4wNjMsMjIuMTA0LTguMDYzLDMwLjE2NywwbDY0LDY0YzQuMDMxLDQuMDMxLDYuMjUsOS4zODUsNi4yNSwxNS4wODNTNDQ1Ljc4NCwxMTcuNzIsNDQxLjc4NCwxMjEuNzJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="" className="btn-img mr-2 align-middle" /> <span className="align-middle">Excercise Files</span></a>
                            <a href="/" className="btn text-white mx-2">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNNDM0LDMzMUg3OGMtNDMuMDEsMC03OCwzNC45OS03OCw3OHMzNC45OSw3OCw3OCw3OGgzNTZjNDMuMDEsMCw3OC0zNC45OSw3OC03OFM0NzcuMDEsMzMxLDQzNCwzMzF6IE00MzQsNDQ3SDc4ICAgICBjLTIwLjk1MywwLTM4LTE3LjA0Ny0zOC0zOHMxNy4wNDctMzgsMzgtMzhoMzU2YzIwLjk1MywwLDM4LDE3LjA0NywzOCwzOFM0NTQuOTUzLDQ0Nyw0MzQsNDQ3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjQxLjg1NywyOTUuMTQzYzcuNzE3LDcuNzE3LDIwLjQ0NCw3Ljg0MSwyOC4yODUsMGw4MC04MGM3LjgxMS03LjgxLDcuODEtMjAuNDc0LDAtMjguMjg1ICAgICBjLTcuODEtNy44MTEtMjAuNDc0LTcuODExLTI4LjI4NSwwTDI3NiwyMzIuNzE2VjQ1YzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwcy0yMCw4Ljk1NC0yMCwyMHYxODcuNzE2bC00NS44NTgtNDUuODU4ICAgICBjLTcuODEtNy44MTEtMjAuNDc0LTcuODEtMjguMjg1LDBjLTcuODExLDcuODEtNy44MTEsMjAuNDc0LDAsMjguMjg1TDI0MS44NTcsMjk1LjE0M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="" className="btn-img mr-2 align-middle" /> <span className="align-middle">Download Topic</span></a>
                        </div>
                    </div>
                </section>
                <section className="mx-2 mx-lg-5">
                    <div className="mt-5 d-flex lessons-tab-cont position-relative">
                        <div to="#" active='this.state.activeItem === "1"' onClick={this.toggle("1")} role="tab" className={`${this.isActive('1')} lessons-tabs mr-3 px-3 py-2 rounded-top`} >Table Of Contents</div>
                        <div to="#" active='this.state.activeItem === "2"' onClick={this.toggle("2")} role="tab" className={`${this.isActive('2')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>Topic Description</div>
                        <div to="#" active='this.state.activeItem === "3"' onClick={this.toggle("3")} role="tab" className={`${this.isActive('3')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>Further Studies</div>
                        <button className="border-0 position-absolute d-none d-md-block">Expand All</button>
                    </div>
                    <MDBTabContent activeItem={this.state.activeItem}>
                        <MDBTabPane tabId="1" role="tabpanel">
                            <TopicsContent url='/videopage' element={<TopicsContent url='/videopage' hideExpand={true} />} />
                            <TopicsContent url='/videopage' element={<TopicsContent url='/videopage' hideExpand={true} />} />
                            <TopicsContent url='/videopage' element={<TopicsContent url='/videopage' hideExpand={true} />} />
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                            <p className="mt-2">
                                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                        reiciendis molestiae placeat unde eos molestias.  </p>
                            <p>
                                Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                voluptate odit minima. Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Nihil odit magnam minima, soluta doloribus
                                        reiciendis molestiae placeat unde eos molestias.  </p>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                            <p className="mt-2"> Further related topics out of the syllabus outline</p>
                        </MDBTabPane>
                    </MDBTabContent>
                </section>
            </div>
        )
    }
}

export default lessons
