import React, { Component } from 'react'
import { MDBTabPane, MDBTabContent } from "mdbreact";
import VideoWatchProg from '../components/globalCoponents/VideoWatchProg';
import SortFilter from '../components/globalCoponents/SortFilter';

export class LearningStats extends Component {
    state = {
        activeItem: "1",
        vidComplete: false,
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
    render() {
        return (
            <div className="p-3">
                <div className="p-3 panel-header rounded">
                    <h4>Learning Satistics</h4>
                </div>
                <section className="mx-2 mx-lg-5">
                    <div className="mt-5 d-flex lessons-tab-cont position-relative">
                        <div to="#" active='this.state.activeItem === "1"' onClick={this.toggle("1")} role="tab" className={`${this.isActive('1')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>Watching Progress</div>
                        <div to="#" active='this.state.activeItem === "2"' onClick={this.toggle("2")} role="tab" className={`${this.isActive('2')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>Aditional Infomation</div>

                        <div to="#" active='this.state.activeItem === "3"' onClick={this.toggle("3")} role="tab" className={`${this.isActive('3')} lessons-tabs mr-3 px-3 py-2 rounded-top`}>Activities</div>
                    </div>
                    <MDBTabContent activeItem={this.state.activeItem}>
                        <MDBTabPane tabId="1" role="tabpanel">
                            <SortFilter />
                            <div className="discussion-room mt-3 py-3 px-4 mb-5 mx-4 pt-1">
                                <VideoWatchProg status={false} progress={4} />
                                <VideoWatchProg status={false} progress={57} />
                                <VideoWatchProg status={true} progress={100} />
                            </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel">
                            <div className="prof-tab-cnt">
                                <div className="my-2 py-2 prof-detal-rw d-flex flex-wrap px-3 rounded">
                                    <div className="col-12 col-md-6 pb-1">Gender&nbsp;:</div><div className="col-12 col-md-6 pb-1">Male</div>
                                </div>
                            </div>
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel">
                            <p className="mt-2"> Coming soon...</p>
                        </MDBTabPane>
                    </MDBTabContent>
                </section>
            </div>
        )
    }
}

export default LearningStats
