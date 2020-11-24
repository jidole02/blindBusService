import React, {Component} from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

import * as F from './Style'

class Footer extends Component{
    render(){
        const activeStyle = {
           color: 'red',
        }
        return(
            <F.footer>
                <NavLink to="/path" activeStyle={activeStyle} style={{fontSize: '14px', textDecoration: 'none', color: 'gray'}}><i class="fas fa-hourglass-end"></i> Arrive</NavLink> 
                <NavLink to="/sdf"activeStyle={activeStyle}style={{fontSize: '14px', textDecoration: 'none',color: 'gray'}}><i class="fas fa-microphone"></i> Speak</NavLink>
                <NavLink to="/dd"activeStyle={activeStyle}style={{fontSize: '14px', textDecoration: 'none',color: 'gray'}}><i class="fas fa-users"></i> Share</NavLink> 
            </F.footer>
        )
    }
}

export default Footer;