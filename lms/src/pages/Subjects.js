import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loader";
import { Link } from "react-router-dom"

class Subjects extends Component {
  state = {
    loading: true,
    subs: []
  };

  gotoSubject = (e) => {
    let targetSub = e.target.name;
    window.location.href = `/subject/${targetSub}`;
  };

  componentDidMount = () => {
    axios
      .get("/sujects")
      .then(res => {
        console.log(res.data);
        this.setState({
          subs: res.data, loading: false
        })
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
      <div className="p-lg-4 pREs">
        <div className="mb-4 header-panel p-lg-3 ">
          <h3 class="page-header">My Subjects</h3>
          <h6 class="page-header text-secondary">Showing only subjects that you take </h6>
        </div>

        <div class="row">
          {
            this.state.subs.map((s, index) => (
              <div key={index} name={s.sid} class="col-lg-4 col-md-6 pREs p-lg-3 col-12" >
                <div className="p-2 subject-container rounded mx-lg-2">
                  <Link to={`/subject/${s.sid}`} >
                    <div className="align-item-center  d-flex justify-content-center rounded sub-card-img">
                      <img src={s.featuredImage} className="sub-img" alt="Generic placeholder thumbnail" />
                    </div>
                    <div className="my-2">
                      <h4>{s.subjectName}</h4>
                      <span class="text-muted">{s.subjectTeacher}</span>
                    </div>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default Subjects;
