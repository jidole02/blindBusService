import React from 'react'
import Maps from '../../Components/Maps/Maps';
import BusAlarm from '../../Components/BusAlarm/busAlarm'

const MainContainer = () => {
    return (
        <div>
            <Maps />
            <BusAlarm></BusAlarm>
        </div>
    )
}

export default MainContainer;