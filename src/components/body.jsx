import React from 'react'
import Family from '../images/family.webp'
import Broadband from '../images/broadband.png'
import Phone from '../images/phone.png'
import Business from '../images/business.png'

const Body = () => {
  return (
    <div>
        <div>
            <img src={Family} alt="" />
        </div>
        {/* // Cards */}
        
        <div className="container gap-20 mt-8 mb-60 flex justify-center items-center">
            <div>
                <a href="https://www.cablelynx.com/broadband">
                <img className='image' src={Broadband} alt=""/>
                </a>
            </div>
            <div>
                <a href="https://www.cablelynx.com/phone">
                    <img className='image' src={Phone}
                    alt=""/>
                </a>
            </div>
            <div>
                <a href="https://www.cablelynx.com/business-services">
                    <img className='image' src={Business}
                    alt=""/>
                </a>
            </div>
        </div>
        
    </div>
    
  )
}

export default Body