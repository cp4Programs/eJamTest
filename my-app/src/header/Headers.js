import React from 'react'
import './header.css'

function Headers() {
    return (
        <div className="header-container">
            <div className="header-grp"><img className="header-icons" src="/assets/checkmark.png" alt="checkmark" /><p>30-DAY SATISFACTION GUARANTEE</p></div>
            <div className="header-grp"><img className="header-icons" src="/assets/truck.png" alt="truck" /><p>FREE DELIVERY ON ORDERS OVER $40.00</p></div>
            <div className="header-grp"><img className="header-icons" src="/assets/heart.png" alt="heart" /> <p>50,000+ HAPPY CUSTOMERS</p></div>
            <div className="header-grp"><img className="header-icons" src="/assets/checkReturn.png" alt="checkReturn" /><p>100% MONEY BACK GUARANTTEE</p></div>
        </div>
    )
}

export default Headers