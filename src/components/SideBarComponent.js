import { Component } from "react";

import ButtonWrapper from "./ButtonWrapper";

export default class SideBarComponent extends Component {
  render() {
    return (
      <div className="left-side">
        <div className="logo-one">Logo 1</div>
        <div className="button-wrapper">
          <ButtonWrapper />
        </div>
        <div className="logo-two">Logo 2</div>
      </div>
    );
  }
}
