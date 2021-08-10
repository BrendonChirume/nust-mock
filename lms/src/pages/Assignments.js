import React, { Component } from "react";
import axios from "axios"
import Loading from "./Loader";

import AssignmentRow from "../components/globalCoponents/AssignmentRow"




class Assignments extends Component {
  state = {
    loading : true, 
    data : []
  };


  componentDidMount = () => {
    let subID = this.props.match.params.subject;
    console.log(subID);
    axios
      .get("/assignments")
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
      <div>
        <div className="p-3 panel-header">
          <h4>Assignments</h4>
        </div>
        <div className="inline-block mt-3 p-3 panel-header">
          <h4>Upcoming</h4>
        </div>
        <div className="bdr"></div>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th style={{width : "400px"}}>Subject</th>
                    <th style={{width : "120px"}}>Date Received</th>
                    <th style={{width : "120px"}}>Due Date</th>
                    <th style={{width : "100px"}}>Download</th>
                    <th style={{width : "100px"}}>Submit</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.data.map((a,index)=>(
        <AssignmentRow
       prop = {a}
        />
                ))}
                
                </tbody>
              </table>
            </div>
      </div>
    );
  }
}

export default Assignments;
