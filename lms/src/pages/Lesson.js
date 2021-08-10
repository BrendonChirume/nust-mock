import React, { Component } from 'react';
import { MDBTabPane, MDBTabContent } from 'mdbreact';
import Chat from '../components/globalCoponents/Chat';
import Loading from './Loader';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
// import 'mathlive/dist/mathlive.css';
// import 'mathlive/dist/mathlive.core.css';
// import MathLive from 'mathlive/dist/mathlive';

toast.configure();

class VideoPage extends Component {
  state = {
    vID: '',
    loading: true,
    data: {},
    activeItem: '1',
    resources: [],
    question: '',
    modal1: false,
    modal2: false,
  };
  isActive = (target) => {
    if (target === this.state.activeItem) {
      return 'lessons-tabs_a';
    } else {
      return undefined;
    }
  };

  toastNotify = (e, t) => {
    toast(e, { autoClose: false, position: 'bottom-right', type: t });
  };

  toggle1 = () => {
    this.setState({
      modal1: !this.state.modal1,
    });
  };
  toggle2 = () => {
    this.setState({
      modal2: !this.state.modal2,
    });
  };

  toggle = (tab) => (e) => {
    console.log(e);

    if (this.state.activeItem !== tab) {
      localStorage.setItem('tabChat', tab);
      this.setState({
        activeItem: tab,
      });
    }
  };

  errorMOdal = () => {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle1}>
          <MDBModalHeader className="cg-modal">
            <div className="d-flex justify-content-center">
              <div className="bb text-center">
                But wait...
                <div className="nnnlko">
                  You can't send an empty question. Please type in something then
                  send.
                </div>
              </div>
            </div>
          </MDBModalHeader>
          <MDBModalBody className="cg-modal">
            <div>
              <button
                className="mt-2 btn btn-bd w-100 "
                type="button"
                onClick={this.toggle1}
              >
                Okay
              </button>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  };
  sucessMOdal = () => {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal2} toggle={this.toggle2}>
          <MDBModalHeader className="cg-modal">
            <div className="d-flex justify-content-center">
              <div className="bb text-center">
                Success
                <div className="nnnlko">
                  Your question has been submitted to your teacher, but other
                  students in your class might respond to your question.
                </div>
              </div>
            </div>
          </MDBModalHeader>
          <MDBModalBody className="cg-modal">
            <div>
              <button
                className="mt-2 btn btn-bd w-100 "
                type="button"
                onClick={this.toggle2}
              >
                Okay
              </button>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  };

  componentDidMount = () => {
    // if (localStorage.getItem("tabChat") === "") {
    //       this.setState({
    //         activeItem :  "1"
    //       })
    //     } else {

    //       this.setState({
    //         activeItem :  localStorage.getItem("tabChat")
    //       })
    //     }

    this.setState({
      activeItem: '1',
    });

    let vID = this.props.match.params.name;
    this.setState({
      vID: vID,
    });

    axios
      .get(`/lesson/${vID}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          loading: false,
          data: res.data,
        });

        if (!(res.data.doc1 === 'na')) {
          let dlist = this.state.resources;
          dlist.push(res.data.doc1);
          this.setState({
            resources: dlist,
          });
        }
        if (!(res.data.doc2 === 'na')) {
          let dlist = this.state.resources;
          dlist.push(res.data.doc2);
          this.setState({
            resources: dlist,
          });
        }
        if (!(res.data.doc3 === 'na')) {
          let dlist = this.state.resources;
          dlist.push(res.data.doc3);
          this.setState({
            resources: dlist,
          });
        }
        if (!(res.data.doc4 === 'na')) {
          let dlist = this.state.resources;
          dlist.push(res.data.doc4);
          this.setState({
            resources: dlist,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({
      question: e.target.value,
    });
  };

  submitQuestion = () => {
    if (this.state.question) {
      let question = {
        lessonID: this.state.vID,
        question: this.state.question,
      };
      this.toastNotify('Sending question, hold on..', toast.TYPE.INFO);
      axios
        .post('/studentask', question)
        .then(() => {
          // this.setState({
          //   modal2 : true
          // })
          this.toastNotify(
            "Question sent.. You'll see you question below after you refresh your page.",
            toast.TYPE.SUCCESS
          );

          document.getElementById('sasktext').value = '';
          document.getElementById('btnCloseQuestionArea').click();

          // window.location.reload()
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.toggle1();
    }
  };

  isVideo1 = () => {
    if (this.state.data.isVideo === 'yes') {
      return 'col-lg-6 col-md-6 col-sm-12 col-12';
    } else {
      return 'd-none';
    }
  };
  isVideo2 = () => {
    if (this.state.data.isVideo === 'yes') {
      return 'col-lg-6 col-md-6 col-sm-12 col-12 px-lg-2 px-md-2';
    } else {
      return 'col-lg-12 col-md-12 col-sm-12 col-12 px-lg-2 px-md-2';
    }
  };

  // conv = () => {
  //   MathLive.makeMathField('mf', {
  //     smartMode: true,
  //     virtualKeyboardMode: 'manual',
  //     onContentDidChange: (mf) => {
  //       const latex = mf.$text();
  //       document.getElementById('latex').innerHTML = escapeHtml(latex);

  //       const mathJSON = MathLive.latexToAST(latex);
  //       document.getElementById('mathjson').innerHTML = escapeHtml(
  //         JSON.stringify(mathJSON)
  //       );
  //     },
  //   });

  // function escapeHtml(string) {
  //   return String(string).replace(/[&<>"'`=/\u200b]/g, function (s) {
  //     return (
  //       {
  //         '&': '&amp;',
  //         '<': '&lt;',
  //         '>': '&gt;',
  //         '"': '&quot;',
  //         "'": '&#39;',
  //         '/': '&#x2F;',
  //         '`': '&#x60;',
  //         '=': '&#x3D;',
  //         '\u200b': '&amp;#zws;',
  //       }[s] || s
  //     );
  //   });
  // }
  // };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    console.log('opes=>', this.state.vID);

    return (
      <div className="videopage-container pb-lg-5">
        {this.errorMOdal()}
        {this.sucessMOdal()}
        <div class="mathfield" id="mf">
          f(x)=43^4
        </div>
        <div id="output"></div>
        <button onClick="conv">es</button>
        <div className="container-fluid">
          <div className="row m-lg-3 m-md-3 lesson-top-content">
            <div className={this.isVideo1()}>
              <div className="videopage-bunner position-relative d-flex w-100">
                <div className="video-player-cont w-100">
                  <div className="">
                    {/* <video controls>
                                <source src="httpss://firebasestorage.googleapis.com/v0/b/backroomclasses.appspot.com/o/statue-of-admiral-yi-no-audio.mp4?alt=media&token=3b231e23-cbbd-4feb-bdf6-12925969a67b" type="video/mp4" /> Your browser does not support the video tag.
                            </video> */}
                    <VideoPlayer src={this.state.data.videoUrl} />
                  </div>
                </div>
              </div>
            </div>
            <div className={this.isVideo2()}>
              <div className="text-white video-description overflow-auto">
                <span className="video-title"> {this.state.data.videoName}</span>
                <br />
                <p className="mt-2">{this.state.data.videoAbout}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="discussion-room mt-3 py-3 mb-5 mx-lg-4 mx-md-2 pt-1">
          <section className="mx-lg-5 mx-md-3 mx-sm-2 mx-2 text-white">
            <div className="d-flex vid-tabs-cont mb-3">
              <div
                to="#"
                active='this.state.activeItem === "1"'
                onClick={this.toggle('1')}
                role="tab"
                className={`${this.isActive(
                  '1'
                )} lessons-tabs mr-3 px-3 py-2 rounded-top discuss-title`}
              >
                Lesson Resources
              </div>
              <div
                to="#"
                active='this.state.activeItem === "2"'
                onClick={this.toggle('2')}
                role="tab"
                className={`${this.isActive(
                  '2'
                )} lessons-tabs mr-3 px-3 py-2 rounded-top discuss-title`}
              >
                Ask Question
              </div>
            </div>
            <MDBTabContent activeItem={this.state.activeItem}>
              <MDBTabPane tabId="1" role="tabpanel">
                <div>
                  <table className="table table-responsive">
                    <tbody>
                      {this.state.resources.map((r, index) => {
                        let filename = r;
                        filename = filename.replace(
                          'https://firebasestorage.googleapis.com/v0/b/backroomclasses.appspot.com/o/',
                          ''
                        );
                        filename = filename.replace('?alt=media', '');
                        return (
                          <tr key={index}>
                            <td style={{ width: '300px' }}>{filename}</td>
                            <td>
                              <div className="d-flex">
                                <a href={r}>
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
                </div>
              </MDBTabPane>
              <MDBTabPane tabId="2" role="tabpanel">
                <div>
                  <div className="mx-lg-3">
                    <textarea
                      id="sasktext"
                      onChange={this.handleChange}
                      spellCheck="true"
                      className="border-0 w-100 px-lg-3 no-outline py-2 rounded-top comment-area"
                      placeholder="Ask Something..."
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={this.submitQuestion}
                      className="btn btn-outline-secondary px-5"
                    >
                      Send
                    </button>
                  </div>
                  <div className="">
                    <Chat FID={this.state.vID} />
                  </div>
                </div>
              </MDBTabPane>
              <MDBTabPane tabId="3" role="tabpanel">
                <p className="mt-2">
                  {' '}
                  Further related topics out of the syllabus outline
                </p>
              </MDBTabPane>
            </MDBTabContent>
          </section>
        </div>
      </div>
    );
  }
}

export default VideoPage;
