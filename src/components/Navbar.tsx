import React, { useState } from 'react'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar = () => {
    const [toggleButton, setToggleButton] = useState(false);

    const handleClick = () => {
        setToggleButton(!toggleButton)
    }

  return (
    <>
    <div className={`nav ${toggleButton && "show"}`}>
        <button className='nav__burger' onClick={handleClick}>
            <MenuIcon/>
        </button>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" className='netflix-logo' />
        <nav className='nav__links'>
            <a href="/" className='nav__link'>Accueil</a>
            <a href="/" className='nav__link'>Series</a>
            <a href="/" className='nav__link'>Films</a>
        </nav>
        <div className="nav__actions">
        <a href="/" className='nav__action'><SearchIcon/></a>
            <a href="/" className='nav__action'><NotificationsNoneIcon/></a>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="avatar" className='avatar_img nav__action'/>
        </div>
    </div>
    </>
  )
}

export default Navbar