import React from "react";
import { Switch, Route } from "react-router-dom";
import {toast, ToastContainer} from 'react-toastify'
import {BrowserRouter} from 'react-router-dom'
//pages
import Subjects from "./pages/Subjects";
import Subject from "./pages/Subject";
import Notes from "./pages/Notes";
import Lesson from "./pages/Lesson";
import Messages from "./pages/Messages";
import Assignments from "./pages/Assignments";
import Marks from "./pages/Marks";
import Profile from "./pages/Profile"; 
import Login from "./pages/Login"
import lessons from "./pages/lessons"


import AuthRoute from "./util/AuthRoutes";
// import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import WatchPage from "./pages/WatchPage";
import LearningStats from "./pages/LearningStats";
import Calc from "./pages/calc"

class Router extends React.Component {


  showToast = (type, message) => {
    // 0 = warning, 1 = success
    switch (type) {
        case 0:
            toast.warning(message)
            break
        case 1:
            toast.success(message)
            break
        default:
            break
    }
}
  render() { 

  
    return (

      <Switch>
        <AuthRoute exact path="/" component={Subjects} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/videopage" component={VideoPage} />
        <Route exact path="/testingpage" component={Calc} />

        <Route exact path="/stats" component={LearningStats} />
        <Route exact path="/lessons" component={lessons} />
        <Route exact path="/watch/:name" component={WatchPage} />
        <AuthRoute showToast={this.showToast} exact path="/subjects" component={Subjects} />
        <AuthRoute exact path="/subject/:subject" component={Subject} />
        <AuthRoute exact path="/lesson/:name" component={Lesson} />
        <AuthRoute exact path="/messages" component={Messages} />
        <AuthRoute showToast={this.showToast} exact path="/assignments" component={Assignments} />
        <AuthRoute exact path="/profile" component={Profile} />
        <AuthRoute exact path="/marks" component={Marks} />
        <AuthRoute exact path="/Notes" component={Notes} />
        <AuthRoute
          render={function () {
            return <Subjects />;
          }}
        />
      </Switch>
    );
  }
}

export default Router;

// class Routes extends React.Component {
//     render() {
//       return (
//         <Switch>
