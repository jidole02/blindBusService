import React, {Component} from 'react';
import * as B from './Style'

class Alarm extends Component{
    render(){
        return(
            <section>
                <div style={{background: this.props.color}}>{this.props.busNum}</div>
                <div><a href="">{this.props.busNum} 번 버스 </a>
                <a href="">도착 : {this.props.time} 전</a>
                </div>
            </section>
        )
    }
}

export default Alarm;