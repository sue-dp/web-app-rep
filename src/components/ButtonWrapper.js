import { Component } from "react";

export default class ButtonWrapper extends Component {
  render() {
    return (
      <div className="btn-wrapper">
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
        <button className="button">Button 3</button>
        <button className="button">Button 4</button>
        <button className="button">Button 5</button>
      </div>
    );
  }
}
