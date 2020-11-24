import React from 'react'
import Maps from '../../Components/Maps/Maps';
import BusAlarm from '../../Component/busAlarm'
import Footer from '../../Component/footer'

const MainContainer = () => {
    return (
        <div>
            <Maps />
            <BusAlarm></BusAlarm>
        </div>
    )
}

export default MainContainer;