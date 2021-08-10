

import React, { Component } from 'react';
import axios from "axios"
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import dayjs from "dayjs";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

toast.configure();

class SingleQuestion extends Component {
    state = { 
        ritem: false,
        showResponses: false,
        vID : "",
        squest : false,
        loadingQuestions : false,
        response : "",
        modal1 : false,
        modal2 : false, 
        responses : [],
        loadingres : false
  }
  
  cssRacho = n => {
    let sliced = n.slice(0, 17);
    if (sliced !== "Teacher Response ") {
      console.log(sliced);
      return "response-box-";
    } else {
      return "response-box-t";
    }
  };

     sucessMOdalMOdal=()=>{
        return (
          <MDBContainer>
            <MDBModal isOpen={this.state.modal2} toggle={this.toggle2}>
              <MDBModalHeader className="cg-modal">
                <div className="d-flex justify-content-center">
                  <div className="bb text-center">
                    Success
                    <div className="nnnlko">
                      Your question has been submitted to your teacher, but other students in your class might respond to your question.
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
        )
      }

     toggle1 = () => {
        this.setState({
          modal1: !this.state.modal1
        });
      };
      toggle2 = () => {
        this.setState({
          modal2: !this.state.modal2
        });
      };

    
      closeQ=()=>{
          this.setState({
            squest : false
          })
      }

        handleChange=(e)=>{
            this.setState({
                response :  e.target.value
            })
  }
  
  toastNotify = (e, t) => {
    toast(e, { autoClose: false, position: "bottom-right", type: t });
  };
    
  submitResponse = () => {
    this.toastNotify("Sending Reponse, hold on..", toast.TYPE.INFO);
            if (this.state.response) {
              let response = {
                response : this.state.response,
                lessonID : this.props.lessonID,
                qID : this.props.askID
              }
        
              axios.post("/studentaskonask",response)
              .then(()=>{


                
          this.props.refeshChats();
          this.closeRes();
          this.seeResponses();
          return this.toastNotify(
            "Response sent, We'll open all responses",
            toast.TYPE.SUCCESS
          );

               
        
             
              })
              .catch(err=>{
                console.log(err)
              })
            } else {
              this.toggle1()
            }
          }

          errorMOdal=()=>{
            return (
              <MDBContainer>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle1}>
                  <MDBModalHeader className="cg-modal">
                    <div className="d-flex justify-content-center">
                      <div className="bb text-center">
                        But wait...
                        <div className="nnnlko">
                          You can't send an empty question. Please type in something then send. 
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
            )
          }

          showResponseITem = () => {
            if (this.state.showResponses) {
              return (
                <div className=" py-1 py-lg-3 py-md-2 position-relative">
                  <div className="px-2 py-lg-5 py-md-3">
                    <div onClick={this.closeResponses} className="mb-2 see-resp w-100">
                      close responses
                    </div>
        
                    {this.state.responses.map((r, index) => (
                      <div className={this.cssRacho(r.studentName)} key={index}>
                        <div className="chat-name-re mb-1 pt-1">
                          {r.studentName}
                          <span className="ml-2 chat-date small text-muted">
                            {dayjs(r.respOn).format("llll")}
                          </span>
                        </div>
                        <p className="text-white pl-1 chat-msg-re">{r.response}</p>
                        <div className="add-comment px-3"></div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            if (this.state.ritem) {
              return (
                <div className="w-100 px-5">
                  <div className="w-100">
                    <textarea
                      id="form19"
                      spellCheck="true"
                      onChange={this.handleChange}
                      className="border-0 w-100 px-lg-3 no-outline py-2 rounded-top comment-area"
                      placeholder="Type a response..."
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="mb-3 ">
                    <button
                      onClick={this.closeRes}
                      className="btn btn-outline-danger px-3 float-right ml-1"
                    >
                      Close
                    </button>
                    <button
                      onClick={this.submitResponse}
                      className="btn btn-outline-secondary px-3 float-right"
                    >
                      Send
                    </button>
                  </div>
                  <span>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0yNCA0ODAgNDgwIiB3aWR0aD0iNTEyIj48Zz48cGF0aCBkPSJtNDA4IDBoLTMzNmMtMzkuNzQ2MDk0LjA0Mjk2ODgtNzEuOTU3MDMxMiAzMi4yNTM5MDYtNzIgNzJ2MjA4Yy4wNDI5Njg4IDM5Ljc0NjA5NCAzMi4yNTM5MDYgNzEuOTU3MDMxIDcyIDcyaDIyLjIzODI4MWwtMTQuMDc4MTI1IDcwLjM5ODQzOGMtLjYwNTQ2OCAzLjAyNzM0My41ODU5MzggNi4xMjg5MDYgMy4wNTQ2ODggNy45NzY1NjJzNS43ODEyNSAyLjEwOTM3NSA4LjUxMTcxOC42NzE4NzVsMTUwLjI1LTc5LjA0Njg3NWgxNjYuMDIzNDM4YzM5Ljc0NjA5NC0uMDQyOTY5IDcxLjk1NzAzMS0zMi4yNTM5MDYgNzItNzJ2LTIwOGMtLjA0Mjk2OS0zOS43NDYwOTQtMzIuMjUzOTA2LTcxLjk1NzAzMTItNzItNzJ6bTU2IDI4MGMtLjAzNTE1NiAzMC45MTQwNjItMjUuMDg1OTM4IDU1Ljk2NDg0NC01NiA1NmgtMTY4Yy0xLjMwMDc4MSAwLTIuNTc4MTI1LjMxNjQwNi0zLjcyNjU2Mi45MjE4NzVsLTEzNy4xMjg5MDcgNzIuMTc1NzgxIDEyLjY5NTMxMy02My40OTYwOTRjLjQ4MDQ2OC0yLjM1NTQ2OC0uMTIxMDk0LTQuODAwNzgxLTEuNjQwNjI1LTYuNjYwMTU2LTEuNTE5NTMxLTEuODYzMjgxLTMuNzk2ODc1LTIuOTQxNDA2LTYuMTk5MjE5LTIuOTQxNDA2aC0zMmMtMzAuOTE0MDYyLS4wMzUxNTYtNTUuOTY0ODQ0LTI1LjA4NTkzOC01Ni01NnYtMjA4Yy4wMzUxNTYtMzAuOTE0MDYyIDI1LjA4NTkzOC01NS45NjQ4NDQgNTYtNTZoMzM2YzMwLjkxNDA2Mi4wMzUxNTYgNTUuOTY0ODQ0IDI1LjA4NTkzOCA1NiA1NnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+PC9nPiA8L3N2Zz4="
                      alt=""
                      className="btn-img"
                    />
                    <span className="ml-2 comment-number">{this.props.responses}</span>
                  </span>
                </div>
              );
            } else {
              return (
                <div className=" w-100 px-2 px-lg-5 px-md-3">
                  <span>
                    <div onClick={this.seeResponses} className="see-resp w-100">
                      {this.textontext()}
                    </div>
                    <div className="float-right">
                      <button
                        onClick={this.respond}
                        style={{ top: "-15px", position: "relative" }}
                        className="btn btn-outline-secondary"
                      >
                        Respond
                      </button>
                    </div>
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIC0yNCA0ODAgNDgwIiB3aWR0aD0iNTEyIj48Zz48cGF0aCBkPSJtNDA4IDBoLTMzNmMtMzkuNzQ2MDk0LjA0Mjk2ODgtNzEuOTU3MDMxMiAzMi4yNTM5MDYtNzIgNzJ2MjA4Yy4wNDI5Njg4IDM5Ljc0NjA5NCAzMi4yNTM5MDYgNzEuOTU3MDMxIDcyIDcyaDIyLjIzODI4MWwtMTQuMDc4MTI1IDcwLjM5ODQzOGMtLjYwNTQ2OCAzLjAyNzM0My41ODU5MzggNi4xMjg5MDYgMy4wNTQ2ODggNy45NzY1NjJzNS43ODEyNSAyLjEwOTM3NSA4LjUxMTcxOC42NzE4NzVsMTUwLjI1LTc5LjA0Njg3NWgxNjYuMDIzNDM4YzM5Ljc0NjA5NC0uMDQyOTY5IDcxLjk1NzAzMS0zMi4yNTM5MDYgNzItNzJ2LTIwOGMtLjA0Mjk2OS0zOS43NDYwOTQtMzIuMjUzOTA2LTcxLjk1NzAzMTItNzItNzJ6bTU2IDI4MGMtLjAzNTE1NiAzMC45MTQwNjItMjUuMDg1OTM4IDU1Ljk2NDg0NC01NiA1NmgtMTY4Yy0xLjMwMDc4MSAwLTIuNTc4MTI1LjMxNjQwNi0zLjcyNjU2Mi45MjE4NzVsLTEzNy4xMjg5MDcgNzIuMTc1NzgxIDEyLjY5NTMxMy02My40OTYwOTRjLjQ4MDQ2OC0yLjM1NTQ2OC0uMTIxMDk0LTQuODAwNzgxLTEuNjQwNjI1LTYuNjYwMTU2LTEuNTE5NTMxLTEuODYzMjgxLTMuNzk2ODc1LTIuOTQxNDA2LTYuMTk5MjE5LTIuOTQxNDA2aC0zMmMtMzAuOTE0MDYyLS4wMzUxNTYtNTUuOTY0ODQ0LTI1LjA4NTkzOC01Ni01NnYtMjA4Yy4wMzUxNTYtMzAuOTE0MDYyIDI1LjA4NTkzOC01NS45NjQ4NDQgNTYtNTZoMzM2YzMwLjkxNDA2Mi4wMzUxNTYgNTUuOTY0ODQ0IDI1LjA4NTkzOCA1NiA1NnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+PC9nPiA8L3N2Zz4="
                      alt=""
                      className="btn-img"
                    />
                    <span className="ml-2 comment-number">{this.props.responses}</span>
                  </span>
                </div>
              );
            }
          };
    textontext =()=>{
      if (this.state.loadingres) {
          return "Loading Responses..."
      } else {
          return "See Responses"
      }
    }
      closeRes=()=>{
        this.setState({
            ritem : false
        })
    }
    respond=()=>{
      this.setState({
          ritem : true
      })
    }
  
    seeResponses=()=>{

        this.setState({
            loadingres : true
        })
let req ={
	lessonID : this.props.lessonID,
	qID : this.props.askID
}
        axios.post("/getstudent/response",req)
        .then(res=>{
            console.log(res.data)
            this.setState({
                    showResponses : true ,responses : res.data , loadingres : false
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    closeResponses=()=>{
      this.setState({
              showResponses : false
      })
    }
    

    
    
    render() { 
        return ( 
            <div>
                      <div className="chat position-realtive m-lg-3 m-md-2 m-1 ">
                      <div className=" py-lg-3 py-md-2 px-2 chat-msg-cont position-relative">
                <div className="px-lg-5 px-md-3 px-2">
                    {this.errorMOdal()}
                    {this.sucessMOdalMOdal()}
                  <div className="chat-name mb-1 pt-1">
                   {this.props.studentName}
                    <span className="ml-2 chat-date small text-muted">{this.props.askOn}</span>
                  </div> <button hidden id="btnCloseQuestionArea" onClick={this.closeQ}>x </button>
                  <p className="text-white pl-1 chat-msg">
                   {this.props.question}
                  </p>
                  <div className="add-comment px-3"></div>
                </div> 
      
                {this.showResponseITem()}
              </div>
      </div>
            </div>
         );
    }
}


 
export default SingleQuestion;