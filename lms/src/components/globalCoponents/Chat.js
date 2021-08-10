import React, { Component } from "react";
import axios from "axios";
import SingleChat from "./SingleQuestion";
import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(LocalizedFormat);

class Chat extends Component {
  state = {
    questions: [],
    vID: "",
    squest: false,
    loadingQuestions: false
  };

  loadingQuestions = () => {
    if (this.state.loadingQuestions) {
      return (
        <button
          disabled
          onClick={this.sQ}
          className="mt-2 btn btn-outline-secondary w-100"
        >
          Loading Wait...
        </button>
      );
    } else {
      return (
        <button
          onClick={this.sQ}
          className="mt-2 btn btn-outline-secondary w-100"
        >
          Show Recently Asked Question's
        </button>
      );
    }
  };

  showQuestions = () => {
    if (this.state.squest) {
      return (
        <div>
          {this.state.questions.map((q, index) => (
            <SingleChat
              refeshChats={this.refeshChats}
              key={index}
              askID={q.askID}
              studentName={q.studentName}
              lessonID={q.lessonID}
              question={q.question}
              askOn={dayjs(q.askOn).format("llll")}
              responses={q.responses}
            />
          ))}
        </div>
      );
    } else {
      return this.loadingQuestions();
    }
  };

  refeshChats = () => {
    axios.get(`/lesson/questions/${this.state.vID}`).then(res => {
      console.log(res.data);
      console.log(this.state.vID);
      this.setState({
        questions: res.data
      });
    });
  };

  sQ = () => {
    this.setState({
      loadingQuestions: true
    });
    axios
      .get(`/lesson/questions/${this.state.vID}`)
      .then(res => {
        console.log(res.data);
        console.log(this.state.vID);
        this.setState({
          loadingQuestions: false,
          questions: res.data,
          squest: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  closeQuestions = () => {
    this.setState({
      squest: false
    });
  };

  componentDidMount = () => {
    console.log(this.props.FID);
    this.setState({
      vID: this.props.FID
    });
  };

  render() {
    return (
      <div>
        <button
          className="d-none"
          id="uiesom"
          onClick={this.closeQuestions}
        ></button>
        {this.showQuestions()}
      </div>
    );
  }
}

export default Chat;
