import React, {Component, useState} from 'react';
import './busAlarm.css'
import * as B from './Style'
import Alarm from './Container/Alarm'
import Arrive from './Container/Arrive'
import Footer from './footer'

function speak(num, time){
    console.log('1')
    window.speechSynthesis.cancel();

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1
    speechMsg.pitch = 1.8
    speechMsg.lang = "ko-KR"
    speechMsg.text = num + ',번 버스' + time + '분, 남았습니다.';

    speechSynthesis.speak(speechMsg)
}
function speakMin(text){
    console.log('1')
    window.speechSynthesis.cancel();

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1
    speechMsg.pitch = 1.8
    speechMsg.lang = "ko-KR"
    speechMsg.text = text + '남았습니다.';

    speechSynthesis.speak(speechMsg)
}
let i=0;

window.onload=function(){
    setInterval(() => {
        i++;
        if(i==2){
            speak();
        }
    }, 1000);
}

const Alarms = [{
    num: 605,
    time: '2분 1초'
},
{
    num:301,
    time:'5분 3초',
},
{
    num:418,
    time:'4분 32초',
}
];

const AlarmList = Alarms.map(({num, time})=>(
<section>
    <div style={{backgroundColor:'rgb(' + 47 + ',' + num/3 + ',' + num/2.3 + ')'}}>{num}</div>
    <div><a href="">{num} 번 버스 </a><a href="">도착 : {time} 전</a>
    </div>
</section>
)) 

const Arrives = [
    {
        distance: 301,
        num: 201
    },
    {
        distance: 604,
        num: 604
    },
    {
        distance: 204,
        num: 301
    }
];
const ArriveList = Arrives.map(({distance, num})=>(<section><div className="graph"></div><div className="graph"></div><a href="">{num}</a></section>))

const BusAlarm =()=>{
    return(
        <B.Background>
        <Footer></Footer>
            <article>
                <a><i class="far fa-clock"></i> 어느 버스가 먼저 도착할까요?</a>
                {AlarmList}
            </article>
            <B.ArriveDiv>
                <a href=""><i class="fas fa-bus"></i> 버스 현재 거리를 확인하세요!</a>
                <article>
                    {ArriveList}
                </article>
            </B.ArriveDiv>
        </B.Background> 
    )
}

export default BusAlarm;