import React, { Component } from "react";
import { ReactComponent as Arrow } from '../../Assets/arrow.svg';
import Mic from "../img/mic.png";
import * as B from "./Style";
class PinedLocation extends Component {
    render() {
        return (
            <B.Positioner>
                <B.Header>
                    <Arrow />
                    <span id="My_station">내 정류장</span>
                </B.Header>
                <B.Station>
                    <span>정류장 이름</span>
                    <input type="text" placeholder="정류장 이름 입력하기"></input>
                </B.Station>
                <B.Bus>
                    <span>자주 타는 버스</span>
                    <input type="text" placeholder="내가 타는 버스 입력하기"></input>
                </B.Bus>
                <B.Mic>
                    <img src={Mic} alt="Speck" />
                </B.Mic>
                <B.Save>
                    <button>저장할래요!</button>
                </B.Save>
            </B.Positioner>
        )
    }
}
export default PinedLocation;