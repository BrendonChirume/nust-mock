import React, { Component } from "react";
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader } from "mdbreact";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import dayjs from "dayjs"
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

toast.configure();
dayjs.extend(LocalizedFormat)
class AssRow extends Component {
  state = {
    modal1: false,
    modal2: false,
    file: "",
    isSubmited: ""
  };

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

  toastNotify = (e, t) => {
    toast(e, { autoClose: false, position: "bottom-right", type: t });
  };
    

  uploadAssign = () => {

    this.toastNotify("Uploading assignment, hold on..",toast.TYPE.INFO)
    let urlR;

    let file = this.state.file;
    let formData = new FormData();
    formData.append("image", file, file.name);

    if (!this.state.file) {
      document.getElementById("studentUploadFile").value = "No selected file";
    } else {
        this.toggle1();
      axios
        .post("/file/upload", formData)
        .then(res => {
          urlR = res.data;
        })
        .then(() => {
          let assign = {
            assignmentID: this.props.prop.id,
            urlR: urlR.downloadUrl
          };

          axios.post("/assignment/submit", assign).then(() => {
            // this.props.showToast(1, 'Assignment Submitted successfully')
        
            this.setState({
              isSubmited: true
            });
            // window.location.reload();
            this.toastNotify("Assignment Uploaded successfully..",toast.TYPE.SUCCESS)
          });
        })
        .catch(err => {
          console.log(err);
          this.toastNotify("Upload Unsuccessful. ER#3")
        });
    }
  };

  submitBtns = () => {
    if (this.state.isSubmited === "") {
      return <button className="btn btn-outline-secondary btn-sm">--</button>;
    }
    if (this.state.isSubmited) {
      return (
        <button
          onClick={this.toggle2}
          className="btn btn-outline-danger btn-sm"
        >
          Delete
        </button>
      );
    } else {
      return (
        <button
          onClick={this.toggle1}
          className="btn btn-outline-secondary btn-sm"
        >
          Upload
        </button>
      );
    }
  };

  deleteAssign = () => {
    this.toastNotify("Deleting Assignment, wait..",toast.TYPE.INFO)
    this.toggle2();
    axios
      .get(`/assignment/delete/${this.props.prop.id}`)
      .then(() => {
        this.setState({
          isSubmited: false
        });
    
    this.toastNotify("Deletion Successful. Be sure to upload your assignment in time",toast.TYPE.SUCCESS)
      })
      .catch(err => {
        console.log(err);
        this.toastNotify("Deletion Unsuccessful. ER#3")
      });
  };

  componentDidMount = () => {
    axios.get(`/assignmentconfirm/${this.props.prop.id}`).then(res => {
      console.log(res.data);
      if (res.data.isSubmited === "true") {
        this.setState({
          isSubmited: true
        });
      } else {
        this.setState({
          isSubmited: false
        });
      }
    });
  };

  handleChange = e => {
    let filename = e.target.value
      .split("\\")
      .pop()
      .split("/")
      .pop();
    document.getElementById("studentUploadFile").value = filename;
    this.setState({
      file: e.target.files[0]
    });
    console.log(this.state.file);
  };
  selectFile = () => {
    var element1 = document.createElement("INPUT");
    element1.name = "k";
    element1.type = "file";
    element1.onchange = this.handleChange;
    element1.accept =
      "application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    element1.click();
  };

  assignDel = () => {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal2} toggle={this.toggle2}>
          <MDBModalHeader className="cg-modal">
            <div className="d-flex justify-content-center">
              <div className="bb text-center">Submit Assignment</div>
            </div>
          </MDBModalHeader>
          <MDBModalBody className="cg-modal">
            <div>
              <div className="text-center panel-text mb-2"></div>
              <div className="text-center">
                <div>
                  Are you sure want to delete your previous submission for this
                  assignment ?
                </div>
                <div className="my-3 tr p-3">
                  <button
                    onClick={this.deleteAssign}
                    className="mt-2 btn btn-secondary w-100 "
                  >
                    Yes Delete Assignment
                  </button>
                  <button
                    className="mt-2 btn btn-danger w-100 "
                    type="button"
                    onClick={this.toggle2}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  };
  submitModal = () => {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle1}>
          <MDBModalHeader className="cg-modal">
            <div className="d-flex justify-content-center">
              <div className="bb text-center">Submit Assignment</div>
            </div>
          </MDBModalHeader>
          <MDBModalBody className="cg-modal">
            <div>
              <div className="text-center panel-text mb-2">
                Make sure you submit the correct assignment.
              </div>

              <div className="text-cente">
                <div>
                  <div className="row">
                    <div className="col-4">Assignment Name</div>
                    <div className="col-8">
                      : {this.props.prop.assignmentName}
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">Date Received</div>
                    <div className="col-8">: {dayjs(this.props.prop.uploaded).format("ll") }</div>
                  </div>
                  <div className="row">
                    <div className="col-4">Due Date</div>
                    <div className="col-8">: {dayjs(this.props.prop.due).format("ll")}</div>
                  </div>
                </div>
              </div>
              <div className="my-3 card c-tr p-3">
                <form>
                  <div>
                    <h6>Select File</h6>
                  </div>

                  {/* <input
                    hidden
                    id="studentSubmitAssignment"
                    className="form-control"
                    accept="application/msword,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    required
                    type="file"
                  /> */}

                  <div class="input-group mb-3">
                    <input
                      id="studentUploadFile"
                      type="text"
                      readOnly
                      class="form-control"
                      placeholder="Choose File"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button
                        onClick={this.selectFile}
                        class="btn btn-outline-secondary"
                        type="button"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </form>

                <button
                  onClick={this.uploadAssign}
                  className="mt-2 btn btn-secondary w-100 "
                  type="submit"
                >
                  Upload Assignment
                </button>
                <button
                  className="mt-2 btn btn-danger w-100 "
                  type="button"
                  onClick={this.toggle1}
                >
                  Cancel
                </button>
              </div>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }; 
  render() {
    return (
      <tr>
        <td style={{ width: "400px" }}>
          {this.submitModal()}
          {this.assignDel()}
          {this.props.prop.assignmentName}
        </td>
        <td style={{ width: "140px" }}>{dayjs(this.props.prop.uploaded).format("ll") }</td>
        <td style={{ width: "140px" }}>{dayjs(this.props.prop.due).format("ll") }</td>
        <td style={{ width: "120px" }}>
          {" "}
          <a href={this.props.prop.urlR}>{" "}
          <button
           
            className="btn btn-outline-secondary btn-sm"
          >
            Download
          </button>
          </a>
        </td>
        <td style={{ width: "120px" }}>{this.submitBtns()}</td>
      </tr>
    );
  }
}

export default AssRow;
