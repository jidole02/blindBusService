import React from 'react'
import Maps from '../../Components/Maps/Maps';
import BusAlarm from '../../Components/Maps/busAlarm'
import Footer from '../../Components/Maps/footer'

const MainContainer = () => {
    return (
        <div>
            <Maps />
            <BusAlarm></BusAlarm>
        </div>
    )
}

export default MainContainer;