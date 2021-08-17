import React from 'react'
import Section1 from "../components/SupportPage_Components/Section1"
import Section2 from "../components/SupportPage_Components/Section2"
import Navbar from "../components/Navbar"
const SupportScreen = () => {
    return (
        <div className="container">
            <Navbar />
            <Section1 />
            <Section2 />
        </div>
    )
}

export default SupportScreen
