import { Component } from "react";

import HeaderWrapper from "./HeaderWrapper";
import MainContentComponent from "./MainContentComponent";
import QuadBoxWrapper from "./QuadBoxWrapper";
import FooterWrapper from "./FooterWrapper";

export default class MainContainer extends Component {
  render() {
    return (
      <div className="mains">
        <div className="header-container">
          <HeaderWrapper />
        </div>
        <div className="main-content-wrapper">
          <MainContentComponent />
          <QuadBoxWrapper />
          <MainContentComponent />
        </div>
        <div className="footer-container">
          <FooterWrapper />
        </div>
      </div>
    );
  }
}
