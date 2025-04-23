import React from 'react'
import './Header.css'
import netflixlogo from '../../assets/neflixlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PortraitIcon from '@mui/icons-material/Portrait';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
function Header() {
  return (
    <>
    <section className='outer-container '>
    
         <div className='nav-container'>
            <ul>
                <li><img src={netflixlogo} alt=""/></li>
                <li>Home</li>
                <li>TvShow</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>Mylist</li>
                <li>Browse by languge</li>
            </ul>
         </div>
<div className='icon'>
<ul>
    <li className='search'><SearchIcon/></li>
    <li className='search'><NotificationsNoneIcon/></li>
    <li className='search'><PortraitIcon/></li>
    <li className='search' ><ArrowDropDownRoundedIcon/></li>
   
</ul>

</div>


      </section>
    </>
  )
}

export default Header
