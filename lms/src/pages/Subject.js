import React, { Component } from "react";
import Loading from "./Loader";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBTabPane, MDBTabContent } from "mdbreact";
import dayjs from "dayjs"
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import TopicsContent from "../components/lessonsComponents/TopicsContent";

dayjs.extend(LocalizedFormat)
class Subject extends Component {
  state = {
    loading: true,
    data: {}, 
    thumb: "",
    activeItem: "1"
  };

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

  gotolesson = () => {
    window.location.href = "/lesson/dopplereffect";
  };

  handleThumbnail = t => {
    this.setState({
      thumb: t
    });
  };

  renderThumb = () => {
    if (this.state.thumb) {
      return (
        <img
          width=""
          src={this.state.thumb}
          class="thumbnail-image image-of img-responsive"
          alt="Generic placeholder thumbnail"
        />
      );
    } else {
      return (
        <div>
          <div className="no-image thumbnail-imag">
            <i className="fa fa-photo"></i>
          </div>
        </div>
      );
    }
  };

  SliceTextTitle = e => {
    const actualText = e;
    let slicedTItle = actualText.slice(0, 22);
    const title = (slicedTItle += actualText.length > 22 ? "..." : "");
    return title;
  };

  componentDidMount = () => {
    let subID = this.props.match.params.subject;
    console.log(subID);
    axios
      .get(`/suject/${subID}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          loading: false,
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  iconVN = () => {
    if (this.state.data.videoLessons[0].isVideo === "yes") {
      return (
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ5OS45OTkgNDk5Ljk5OSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA0OTkuOTk5IDQ5OS45OTkiIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9Im0xNzEuODc1IDM3Mi4yMzdjLTIuNzAxIDAtNS40MDItLjcwMi03LjgxMi0yLjA5LTQuODM3LTIuNzkyLTcuODEyLTcuOTUtNy44MTItMTMuNTM1di0yMTUuOTg3YzAtNS41ODUgMi45NzUtMTAuNzI3IDcuNzk3LTEzLjUxOSA0LjgzNy0yLjc5MiAxMC43ODgtMi44MzggMTUuNjI1LS4wMTVsMTg3LjUgMTA3Ljk0YzQuODM3IDIuNzc3IDcuODI4IDcuOTUgNy44MjggMTMuNTM1cy0yLjk3NSAxMC43NDItNy44MjggMTMuNTM1bC0xODcuNSAxMDguMDQ3Yy0yLjQxMiAxLjM4OC01LjExMyAyLjA4OS03Ljc5OCAyLjA4OXptMTUuNjI1LTIwNC41ODl2MTYxLjkyNmwxNDAuNTY0LTgxLjAwOWMtLjAwMSAwLTE0MC41NjQtODAuOTE3LTE0MC41NjQtODAuOTE3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTAgNDk5Ljk5OWMtMTM3Ljg0OCAwLTI1MC0xMTIuMTUyLTI1MC0yNTBzMTEyLjE1Mi0yNDkuOTk5IDI1MC0yNDkuOTk5IDI1MCAxMTIuMTUyIDI1MCAyNTAtMTEyLjE1MyAyNDkuOTk5LTI1MCAyNDkuOTk5em0wLTQ2OC43NDljLTEyMC42MiAwLTIxOC43NSA5OC4xMjktMjE4Ljc1IDIxOC43NXM5OC4xMjkgMjE4Ljc1IDIxOC43NSAyMTguNzUgMjE4Ljc0OS05OC4xMyAyMTguNzQ5LTIxOC43NS05OC4xMjktMjE4Ljc1LTIxOC43NDktMjE4Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjwvZz4gPC9zdmc+"
          alt=""
          className="btn-img mr-2 align-middle"
        />
      );
    } else {
      return (
        <svg
          className="lesson-no-video-svg"
          xmlns="http://www.w3.org/2000/svg"
          // width="20"
          // height="20"
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
      );
    }
  };

  firstLesson = () => {
    if (this.state.data.videoLessons.length > 0) {
      return (
        <a
          href={`/lesson/${this.state.data.videoLessons[0].videoId}`}
          rel="noopener noreferrer"
          className="btn text-white button topic-btn no-outline mx-2"
        >
          {this.iconVN()}{" "}
          <span className="align-middle">Open Latest Lesson</span>
        </a>
      );
    }
  };

  lessonAvail = () => {
    if (this.state.data.videoLessons.length > 0) {
      return "";
    } else {
      return "d-none";
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="mt-5 pt-5">
          <Loading />
        </div>
      );
    }
    return (
      <div className="lessons-container text-white">
        <section className="lessons-bunner position-relative">
          <div className="text-white position-absolute">
            <span className="coarse-title">
              {this.state.data.class.className}{" "}
              {this.state.data.class.subjectName}
            </span>
            <br />
            <span>by Teacher : {this.state.data.class.subjectTeacher}</span>
            <br />
            <span>Open the latest lesson by pressing the button below</span>
            <div className="mt-lg-5 mt-md-3 mt-3">
              {this.firstLesson()}
              <a
                href="#"
                onClick={this.toggle("2")}
                className="btn text-white mx-2"
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ2OS4zMzYgNDY5LjMzNiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDY5LjMzNiA0NjkuMzM2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTQ1Ni44MzYsNzYuMTY4bC02NC02NC4wNTRjLTE2LjEyNS0xNi4xMzktNDQuMTc3LTE2LjE3LTYwLjM2NSwwLjAzMUw0NS43NjMsMzAxLjY4MiAgICBjLTEuMjcxLDEuMjgyLTIuMTg4LDIuODU3LTIuNjg4LDQuNTg3TDAuNDA5LDQ1NS43M2MtMS4wNjMsMy43MjItMC4wMjEsNy43MzYsMi43MTksMTAuNDc4YzIuMDMxLDIuMDMzLDQuNzUsMy4xMjgsNy41NDIsMy4xMjggICAgYzAuOTc5LDAsMS45NjktMC4xMzYsMi45MjctMC40MDdsMTQ5LjMzMy00Mi43MDNjMS43MjktMC41LDMuMzAyLTEuNDE4LDQuNTgzLTIuNjlsMjg5LjMyMy0yODYuOTgzICAgIGM4LjA2My04LjA2OSwxMi41LTE4Ljc4NywxMi41LTMwLjE5MlM0NjQuODk5LDg0LjIzNyw0NTYuODM2LDc2LjE2OHogTTI4NS45ODksODkuNzM3bDM5LjI2NCwzOS4yNjRMMTIwLjI1NywzMzMuOTk4ICAgIGwtMTQuNzEyLTI5LjQzNGMtMS44MTMtMy42MTUtNS41LTUuODk2LTkuNTQyLTUuODk2SDc4LjkyMUwyODUuOTg5LDg5LjczN3ogTTI2LjIwMSw0NDMuMTM3TDQwLjA5NSwzOTQuNWwzNC43NDIsMzQuNzQyICAgIEwyNi4yMDEsNDQzLjEzN3ogTTE0OS4zMzYsNDA3Ljk2bC01MS4wMzUsMTQuNTc5bC01MS41MDMtNTEuNTAzbDE0LjU3OS01MS4wMzVoMjguMDMxbDE4LjM4NSwzNi43NzEgICAgYzEuMDMxLDIuMDYzLDIuNzA4LDMuNzQsNC43NzEsNC43NzFsMzYuNzcxLDE4LjM4NVY0MDcuOTZ6IE0xNzAuNjcsMzkwLjQxN3YtMTcuMDgyYzAtNC4wNDItMi4yODEtNy43MjktNS44OTYtOS41NDIgICAgbC0yOS40MzQtMTQuNzEybDIwNC45OTYtMjA0Ljk5NmwzOS4yNjQsMzkuMjY0TDE3MC42NywzOTAuNDE3eiBNNDQxLjc4NCwxMjEuNzJsLTQ3LjAzMyw0Ni42MTNsLTkzLjc0Ny05My43NDdsNDYuNTgyLTQ3LjAwMSAgICBjOC4wNjMtOC4wNjMsMjIuMTA0LTguMDYzLDMwLjE2NywwbDY0LDY0YzQuMDMxLDQuMDMxLDYuMjUsOS4zODUsNi4yNSwxNS4wODNTNDQ1Ljc4NCwxMTcuNzIsNDQxLjc4NCwxMjEuNzJ6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIHN0eWxlPSJmaWxsOiNGRkZGRkYiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIj48L3BhdGg+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg=="
                  alt=""
                  className="btn-img mr-2 align-middle"
                />{" "}
                <span className="align-middle">Notes and Papers</span>
              </a>
              {/* <a href="/" className="btn text-white mx-2">
                          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIj48Zz48Zz4KCTxnPgoJCTxnPgoJCQk8cGF0aCBkPSJNNDM0LDMzMUg3OGMtNDMuMDEsMC03OCwzNC45OS03OCw3OHMzNC45OSw3OCw3OCw3OGgzNTZjNDMuMDEsMCw3OC0zNC45OSw3OC03OFM0NzcuMDEsMzMxLDQzNCwzMzF6IE00MzQsNDQ3SDc4ICAgICBjLTIwLjk1MywwLTM4LTE3LjA0Ny0zOC0zOHMxNy4wNDctMzgsMzgtMzhoMzU2YzIwLjk1MywwLDM4LDE3LjA0NywzOCwzOFM0NTQuOTUzLDQ0Nyw0MzQsNDQ3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBzdHlsZT0iZmlsbDojRkZGRkZGIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCI+PC9wYXRoPgoJCQk8cGF0aCBkPSJNMjQxLjg1NywyOTUuMTQzYzcuNzE3LDcuNzE3LDIwLjQ0NCw3Ljg0MSwyOC4yODUsMGw4MC04MGM3LjgxMS03LjgxLDcuODEtMjAuNDc0LDAtMjguMjg1ICAgICBjLTcuODEtNy44MTEtMjAuNDc0LTcuODExLTI4LjI4NSwwTDI3NiwyMzIuNzE2VjQ1YzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwcy0yMCw4Ljk1NC0yMCwyMHYxODcuNzE2bC00NS44NTgtNDUuODU4ICAgICBjLTcuODEtNy44MTEtMjAuNDc0LTcuODEtMjguMjg1LDBjLTcuODExLDcuODEtNy44MTEsMjAuNDc0LDAsMjguMjg1TDI0MS44NTcsMjk1LjE0M3oiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiPjwvcGF0aD4KCQk8L2c+Cgk8L2c+CjwvZz48L2c+IDwvc3ZnPg==" alt="" className="btn-img mr-2 align-middle" /> <span className="align-middle">Download Topic</span></a> */}
            </div>
          </div>
        </section>
        <section className="mx-2 mx-lg-5">
          <div className="mt-5 d-flex lessons-tab-cont position-relative">
            <div
              to="#"
              active='this.state.activeItem === "1"'
              onClick={this.toggle("1")}
              role="tab"
              className={`${this.isActive(
                "1"
              )} lessons-tabs mr-3 px-3 py-2 rounded-top`}
            >
              Lessons
            </div>
            <div
              to="#"
              active='this.state.activeItem === "2"'
              onClick={this.toggle("2")}
              role="tab"
              className={`${this.isActive(
                "2"
              )} lessons-tabs mr-3 px-3 py-2 rounded-top`}
            >
              Documents/Uploads
            </div>
            {/* <div to="#" active='this.state.activeItem === "3"' onClick={this.toggle("3")} role="tab" className={`${this.isActive('3')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>Further Studies</div> */}
            <button
              disabled
              className="border-0 position-absolute d-none d-md-block"
            >
              Expand All
            </button>
          </div>
          <MDBTabContent activeItem={this.state.activeItem}>
            <MDBTabPane tabId="1" role="tabpanel">
              {this.state.data.videoLessons.map((v, index) => (
                <TopicsContent
                  isVideo={v.isVideo}
                  hideExpand={true}
                  Name={v.videoName}
                  datePosted={v.datePosted}
                  key={index}
                  url={`/lesson/${v.videoId}`}
                  element={
                    <TopicsContent
                      url={`/lesson/${v.videoId}`}
                      hideExpand={true}
                    />
                  }
                />
              ))}
            </MDBTabPane>
            <MDBTabPane tabId="2" role="tabpanel">
              <table className="table table-striped">
                <tbody>
                  {this.state.data.notes.map((r, index) => {
                    return (
                      <tr key={index}>
                        <td style={{ width: "300px" }}>{r.uploadName}</td>
                        <td style={{ width: "100px" }}>{dayjs(r.uploadDate).format("l") }</td>
                        <td>
                          <div className="d-flex">
                            <a href={r.urlR}>
                              <button className="btn-sm btn btn-secondary px-3">
                                Download
                              </button>
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </MDBTabPane>
            <MDBTabPane tabId="3" role="tabpanel">
              <p className="mt-2">
                {" "}
                Further related topics out of the syllabus outline
              </p>
            </MDBTabPane>
          </MDBTabContent>
        </section>
      </div>
    );
  }
}

export default Subject;
