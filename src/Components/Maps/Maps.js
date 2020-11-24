import React, { useEffect } from 'react'
import * as B from './Style.js'
import { Map, GoogleApiWrapper } from "google-maps-react";

import { ReactComponent as Background } from '../../Assets/Background.svg';

const style = {
    width: '280px',
    height: '220px',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0px 0px 5px gray',
    marginLeft: '1.5rem'
    
}

const getLocation = () => {
    return (
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;

            console.log("Latitude is :", lat);
            console.log("Longitude is :", lng);
          })
    )
}

const Maps = (props) => {
    useEffect(() => {
        if("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
        return () => {
           setInterval(getLocation, 5000); 
        }
    }, [])

    return (
        <B.Background>
            <Background />
            <div className="MapAPI">
                <Map
                    style={style}
                    google={props.google}
                    zoom={19}
                    initialCenter={{ lat: 33.506875, lng: 126.5268889 }}
                ></Map>
            </div>
        </B.Background>
    )
}

export default GoogleApiWrapper({
    apiKey: process.env.API_KEY,
})(Maps);