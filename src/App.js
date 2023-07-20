import { Component } from "react";

import "./App.scss";
import SideBarComponent from "./components/SideBarComponent";
import MainContainer from "./components/MainContainer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="page-cont">
          <div className="side-bar">
            <SideBarComponent />
          </div>

          <div className="main-cont">
            <MainContainer />
          </div>
        </div>
      </div>
    );
  }
}
