import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import { FiFacebook } from 'react-icons/fi'
import { SiEyeem } from 'react-icons/si'

function Footer() {
    return (
        <div className='footer1'>
        <span className='footerIcon'>
            <span className='insta'><a className="instaLink" href="https://www.instagram.com/sammagham/" target="_blank">< FiInstagram /></a></span>
           <span className='eye'><a className="fbLink" href="https://www.eyeem.com/u/sama123456" target="_blank">< SiEyeem /></a></span>
           <span className='fb'><a className="eyeLink" href="https://www.facebook.com" target="_blank">< FiFacebook /></a></span>
        </span>
        </div>
    )
}


export default Footer