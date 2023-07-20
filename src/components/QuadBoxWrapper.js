import { Component } from "react";

import SmallBoxComponent from "./SmallBoxComponent";

export default class QuadBoxWrapper extends Component {
  render() {
    return (
      <div className="quad-box">
        <div className="top-boxes">
          <SmallBoxComponent />
          <SmallBoxComponent />
        </div>

        <div className="bottom-boxes">
          <SmallBoxComponent />
          <SmallBoxComponent />
        </div>
      </div>
    );
  }
}
