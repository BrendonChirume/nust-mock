import React, { Component } from 'react';
import { MDBTabPane, MDBTabContent } from "mdbreact";
import Chat from '../components/globalCoponents/Chat';
import Loading from "./Loader";
import { Link } from 'react-router-dom';
import axios from "axios"

class VideoPage extends Component {
    state = {
        loading: true,
        data: {},
        activeItem: "1"
    }
    isActive = target => {
        if (target === this.state.activeItem) {
            return "lessons-tabs_a";
        } else {
            return undefined;
        }
    };
    toggle = tab => e => {
        console.log(e)
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };

    componentDidMount = () => {
        let vID = this.props.match.params.name;
        console.log(vID);
        axios
          .get(`/lesson/${vID}`)
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

    render() {
        if (this.state.loading) {
            return <Loading />;
          }
        return (
            <div className="videopage-container pb-5">
                <div className="videopage-bunner position-relative d-flex w-100 pb-5 pt-2">
                    <div className="video-player-cont col-4 p-0 row">
                        <div className="col-12 pl-lg-4">
                            <video controls>
                                <source src="https://firebasestorage.googleapis.com/v0/b/backroomclasses.appspot.com/o/statue-of-admiral-yi-no-audio.mp4?alt=media&token=3b231e23-cbbd-4feb-bdf6-12925969a67b" type="video/mp4" /> Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-12 my-3 pl-lg-3">
                            <Link to="/watch/ns" target="blank_" className="border-0 rounded btn btn-primary no-outline mx-2 text-uppercase text-white">
                                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDQ5OS45OTkgNDk5Ljk5OSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA0OTkuOTk5IDQ5OS45OTkiIHdpZHRoPSI1MTIiPjxnPjxwYXRoIGQ9Im0xNzEuODc1IDM3Mi4yMzdjLTIuNzAxIDAtNS40MDItLjcwMi03LjgxMi0yLjA5LTQuODM3LTIuNzkyLTcuODEyLTcuOTUtNy44MTItMTMuNTM1di0yMTUuOTg3YzAtNS41ODUgMi45NzUtMTAuNzI3IDcuNzk3LTEzLjUxOSA0LjgzNy0yLjc5MiAxMC43ODgtMi44MzggMTUuNjI1LS4wMTVsMTg3LjUgMTA3Ljk0YzQuODM3IDIuNzc3IDcuODI4IDcuOTUgNy44MjggMTMuNTM1cy0yLjk3NSAxMC43NDItNy44MjggMTMuNTM1bC0xODcuNSAxMDguMDQ3Yy0yLjQxMiAxLjM4OC01LjExMyAyLjA4OS03Ljc5OCAyLjA4OXptMTUuNjI1LTIwNC41ODl2MTYxLjkyNmwxNDAuNTY0LTgxLjAwOWMtLjAwMSAwLTE0MC41NjQtODAuOTE3LTE0MC41NjQtODAuOTE3eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjxwYXRoIGQ9Im0yNTAgNDk5Ljk5OWMtMTM3Ljg0OCAwLTI1MC0xMTIuMTUyLTI1MC0yNTBzMTEyLjE1Mi0yNDkuOTk5IDI1MC0yNDkuOTk5IDI1MCAxMTIuMTUyIDI1MCAyNTAtMTEyLjE1MyAyNDkuOTk5LTI1MCAyNDkuOTk5em0wLTQ2OC43NDljLTEyMC42MiAwLTIxOC43NSA5OC4xMjktMjE4Ljc1IDIxOC43NXM5OC4xMjkgMjE4Ljc1IDIxOC43NSAyMTguNzUgMjE4Ljc0OS05OC4xMyAyMTguNzQ5LTIxOC43NS05OC4xMjktMjE4Ljc1LTIxOC43NDktMjE4Ljc1eiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRiI+PC9wYXRoPjwvZz4gPC9zdmc+" alt="" className="btn-img mr-2 align-middle" /> <span className="align-middle">begin lesson</span></Link>
                        </div>
                    </div>
                    <div className="text-white col-8 video-description pl-lg-4 pr-lg-3">
                        <span className="video-title"> Microsoft Azure DevOps Engineer</span><br />
                        <p className="mt-3">Chrome deserves special mention since Google will actually be removing support for one of the three HTML5 video formats. After its acquisition of On2, a developer and sponsor of the WebM format, Google announced that future versions of Chrome will no longer support H.264. Instead they’ve released WebM under a BSD license, granting worldwide users a free, non-exclusive, royalty-free patent license. So while Chrome is currently the only browser to support all three formats, the market will soon split between the two OS default browsers, Internet Explorer and Safari, supporting only H.264, and all other browsers supporting everything but H.264.</p>
                    </div>
                </div>
                <div className="discussion-room mt-3 py-3 mb-5 mx-4 pt-1">
                    <section className="mx-5 text-white">
                        <div className="d-flex vid-tabs-cont mb-3">
                            <div to="#" active='this.state.activeItem === "1"' onClick={this.toggle("1")} role="tab" className={`${this.isActive('1')} lessons-tabs mr-3 px-3 py-2 rounded-top discuss-title`}>Table Of Contents</div>
                            <div to="#" active='this.state.activeItem === "2"' onClick={this.toggle("2")} role="tab" className={`${this.isActive('2')} lessons-tabs mr-3 px-3 py-2 rounded-top discuss-title`}>Table Of Contents</div>
                            <div to="#" active='this.state.activeItem === "3"' onClick={this.toggle("3")} role="tab" className={`${this.isActive('3')} lessons-tabs mr-3 px-3 py-2 rounded-top discuss-title`}>Table Of Contents</div>

                        </div>
                        <MDBTabContent activeItem={this.state.activeItem}>
                            <MDBTabPane tabId="1" role="tabpanel">
                                <div>
                                    <div className="mx-4">
                                        <textarea id="form19" spellCheck="true" className="border-0 w-100 px-3 no-outline py-2 rounded-top comment-area" placeholder="Join the Discussion..." rows="4"></textarea>
                                        <div className="coment-controls rounded-bottom d-flex">
                                            {this.state.cmtBtnsList.map((btn, index) => {
                                                return (<div className="icon-bg d-flex justify-content-center align-items-center rounded mr-3" key={index}>
                                                    <div className={`${btn} "mx-2"`}></div>
                                                </div>)
                                            })}

                                        </div>
                                    </div>
                                    <div className="">
                                        <Chat />
                                    </div>
                                </div>
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
            </div>
        )
    }
}

export default VideoPage;