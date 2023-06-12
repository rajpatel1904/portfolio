import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import LinkdinIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon />
        <FacebookIcon/>
        <LinkdinIcon/>
      </div>
        {/*<p>&copy;2022</p>*/}

    </div>
  )
}

export default Footer