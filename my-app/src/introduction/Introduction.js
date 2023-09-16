import React from 'react'
import './introduction.css'

function Introduction() {
    return (
        <div className="intro-container">
            <div className="intro-g1">
                <img className="clarifion-logo" src="/assets/clarifionLogo.png" alt="clarifionLogo" />
                <div className="g1-rh-logos">
                    <img className="mcafee-logo" src="/assets/mcafeeSecure.svg" alt="mcafeeLogo" />
                    <img className="norton-logo" src="/assets/nortonLogo.svg" alt="nortonLogo" />
                </div>
            </div>
            <div className="intro-g2">
                <p>Wait  !  your order in progress</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            </div>
            <div className="intro-g3">
                <div><img className="g3-icons" src="/assets/greenCheck.png" alt="greenCheck" /><p>Step 1 : Cart Review</p></div>
                <div><img className="g3-icons" src="/assets/greenCheck.png" alt="greenCheck" /><p>Step 2 : Checkout</p></div>
                <div><img className="g3-icons" src="/assets/blue3.png" alt="blueNumber3" /><p>Step 3 : Special Offer</p></div>
                <div><img className="g3-icons" src="/assets/blue4.png" alt="blueNumber4" /><p>Step 4 : Confirmation</p></div>
            </div>
        </div>
    )
}

export default Introduction