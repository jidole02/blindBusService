import React, { Component } from "react";
import Mic from "./img/mic.png";
import * as B from "./Style";

class SpeckOut extends Component {
  render() {
    return (
      <B.Background>
        <img src={Mic} alt="Speck" />
        <span>최대한 또박또박 말해주세요</span>
        <div>Tell me as clearly as you can</div>
        <span id="value_wrap">첨단 09번</span>
      </B.Background>
    //   <B.footer>
          
    //   </B.footer>
    );
  }
}
export default SpeckOut;
