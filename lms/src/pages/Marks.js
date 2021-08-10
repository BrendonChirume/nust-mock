import React, { Component } from 'react';
import Loading from "./Loader";
import axios from "axios"
import dayjs from "dayjs"
import LocalizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(LocalizedFormat)
class Marks extends Component {
  state = {
    loading: true,
    data: [],
  };


  componentDidMount = () => {
    let subID = this.props.match.params.subject;
    console.log(subID);
    axios
      .get("/marks")
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
      <div className="p-4">
        <div className="mb-3 panel-header p-3">
          <h4> Marks </h4>
        </div>
        <div className="row d-none">
          <div className="col-3 p-3">
            <div className="panel-header text-center">
              <h1 className="learning-streak">20</h1>
            </div>
          </div>
          <div className="col-3 p-3">
            <div className="panel-header text-center">
              <h1 className="learning-streak">20</h1>
            </div>
          </div>
          <div className="col-3 p-3">
            <div className="panel-header text-center">
              <h1 className="learning-streak">20</h1>
            </div>
          </div>
          <div className="col-3 p-3">
            <div className="panel-header text-center">
              <h1 className="learning-streak">20</h1>
            </div>
          </div>
        </div>
        <table className="table border-0 marks-table text-center">
          <thead className="panel-header border-bottom-0">
            <tr className="border-bottom-0">
              <th scope="col" className="border-0"><h4 className="my-0 learning-streak">Subject</h4></th>
              <th scope="col" className="border-0"><h4 className="my-0 learning-streak">Name</h4></th>
              <th scope="col" className="border-0"><h4 className="my-0 learning-streak">Date</h4></th>
              <th scope="col" className="border-0"><h4 className="my-0 learning-streak">Mark</h4></th>
            </tr>
          </thead>
          <tbody className="">
            {this.state.data.map((m, index) => (
              <tr key={index}>
                <td className="border-0 text-capitalize">{m.subject}</td>
                <td className="border-0 text-capitalize">{m.name}</td>
                <td className="border-0 ">{dayjs(m.date).format("l") }</td>
                <td className="border-0 ">{m.mark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      // <div className="p-4">
      //   <div className="mb-3 panel-header p-3">
      //     <h4> Marks </h4>
      //   </div>
      //   <div>
      //     <div className="table-responsive">
      //       <table className="table table-striped">
      //         <thead>
      //           <tr>
      //             <th style={{ width: "400px" }}>Name</th>
      //             <th style={{ width: "200px" }}>Subject</th>
      //             <th style={{ width: "120px" }}>Date</th>
      //             <th style={{ width: "100px" }}>Mark</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {this.state.data.map((m, index) => (
      //             <tr key={index}>
      //               <td >{m.name}</td>
      //               <td >{m.subject}</td>
      //               <td >{m.date}</td>
      //               <td >{m.mark}</td>
      //             </tr>
      //           ))}

      //         </tbody>
      //       </table>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Marks;