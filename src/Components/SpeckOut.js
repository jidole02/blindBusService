import React, { Component } from "react";
import Mic from "./img/mic.png";
import "./SpeckOutStyle.js";

class SpeckOut extends Component {
  render() {
    return (
      <section>
        <div class="section_wrap">
          <div class="section_container">
            <img src={Mic} alt="Speck"/>
            <div class="section_ment">
                <div>최대한 또박또박 말해주세요</div>
            </div>
            <div class="sub_ment">
                <div>Tell me as clearly as you can</div>
            </div>
          </div>
          <div class="tts_value_view">
              <input type="text" name="tts_value" disabled></input>
          </div>
        </div>
      </section>
    );
  }
}
export default SpeckOut;
