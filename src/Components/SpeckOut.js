import React, { Component } from "react";
import Mic from "./img/Speck_Group.png";
import "./SpeckOutStyle.css";

class SpeckOut extends Component {
  render() {
    return (
      <section>
        <div class="section_wrap">
          <div class="section_container">
            <img src={Mic} alt="Speck"/>
          </div>
        </div>
      </section>
    );
  }
}
export default SpeckOut;
