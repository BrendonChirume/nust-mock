import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBTabPane, MDBTabContent } from "mdbreact";
import axios from "axios"
import Loading from "./Loader";

class Profile extends Component {
  state = {
    activeItem: "1",
    data : {} , 
    loading : true
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



  componentDidMount=()=>{
    axios.get("/profile")
    .then(res=>{
      console.log(res.data);
      this.setState({
        data : res.data , loading : false
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }


 
  render() {
    if (this.state.loading) {
      return (
        <div className="mt-5 pt-5">
          <Loading />
        </div>
      )
    }
    return (
      <div className="container-fluid">
        <div className="py-4">
         
          <div className="col-12 col-md-9">
            <section className="mx-2 mx-lg-5">
              <div className="mt-5 d-flex lessons-tab-cont position-relative">
                <div to="#" active='this.state.activeItem === "1"' onClick={this.toggle("1")} role="tab" className={`${this.isActive('1')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>My Details</div>
                <div to="#" active='this.state.activeItem === "2"' onClick={this.toggle("2")} role="tab" className={`${this.isActive('2')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>My Subjects</div>

                {/* <div to="#" active='this.state.activeItem === "3"' onClick={this.toggle("3")} role="tab" className={`${this.isActive('3')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>Activities</div> */}
              </div>
              <MDBTabContent activeItem={this.state.activeItem}>
                <MDBTabPane tabId="1" role="tabpanel">
                  <div className="prof-tab-cnt">
                    <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
                      <div className="col-12 col-md-6 pb-1">First&nbsp;Name&nbsp;:</div><div className="col-12 col-md-6 pb-1">{this.state.data.name}</div>
                    </div>
                    <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
                      <div className="col-12 col-md-6 pb-1">Surname&nbsp;&nbsp;:</div><div className="col-12 col-md-6 pb-1">{this.state.data.surname}</div>
                    </div>
                    <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
                      <div className="col-12 col-md-6 pb-1">School&nbsp;:</div><div className="col-12 col-md-6 pb-1">ICN</div>
                    </div>
                    <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
    <div className="col-12 col-md-6 pb-1">Grade&nbsp;:</div><div className="col-12 col-md-6 pb-1">{this.state.data.grade}</div>
                    </div>
                    <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
    <div className="col-12 col-md-6 pb-1">Grade&nbsp;:</div><div className="col-12 col-md-6 pb-1">{this.state.data.class}</div>
                    </div>
                    <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
    <div className="col-12 col-md-6 pb-1">C. Number&nbsp;:</div><Link to='#' className="col-12 col-md-6 pb-1">{this.state.data.phoneNumber}</Link>
                    </div>
                    <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
    <div className="col-12 col-md-6 pb-1">Student&nbsp;I.Num&nbsp;:</div><div className="col-12 col-md-6 pb-1">{this.state.data.phone}</div>
                    </div>
                    {/* <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
                      <div className="col-12 col-md-6 pb-1">Password&nbsp;:</div><div className="col-12 col-md-6 pb-1"><a href="javascript:void(0)">Change&nbsp;Password</a></div>
                    </div> */}
                  </div>
                </MDBTabPane>
                <MDBTabPane tabId="2" role="tabpanel">
                  <div className="prof-tab-cnt">

                    {
                      this.state.data.subjects.map((x,index)=>(
                        
                    <div key={index} className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
                      <div className="col-12 col-md-6 pb-1">{x}</div><div className="col-12 col-md-6 pb-1"></div>
                    </div>
                      ))
                    }

                  
                  </div>
                </MDBTabPane>
                <MDBTabPane tabId="3" role="tabpanel">
                  <p className="mt-2"> Coming soon...</p>
                </MDBTabPane>
              </MDBTabContent>
            </section>
          </div>
        </div>
       
      </div>
    );
  }
}

export default Profile;
