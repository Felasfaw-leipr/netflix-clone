import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {
  return (
    <>
    <footer className='footer'>
      
<div className='iconsm'>
<ul>

<li className='foot'><FacebookIcon/></li>
<li className='foot'><InstagramIcon/></li>
<li className='foot'><YouTubeIcon/></li>
  
</ul>
</div>



<div className='words'>



<div className='firstlist'>
<ul>
<li>Audio Description</li>
<li>Investor Relation</li>
<li>Legal Notice</li>
<div className='service'>Service Code</div>
<li className='copy'>&copy;1997-2024 Netflix,Inc</li>

</ul>

</div>

<div className='secondlist'>
  <ul>
    <li>Help Center</li>
    <li>Jobs</li>
    <li>Cookie Preferences</li>
  </ul>
</div>

<div className='thirdlist'>
  <ul>
    <li>Gift Card</li>
    <li>Terms of Use</li>
    <li>corporate Information</li>
  </ul>
</div>

<div className='fourthlist'>
  <ul>
  <li>Midea Center</li>
  <li>Privacy</li>
  <li>Contact Us</li>
  </ul>
</div>

</div>
    </footer>
    </>
  )
}

export default Footer
