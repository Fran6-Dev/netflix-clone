import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className='footer__links'>
            <a href="/" className='footer__link'><FacebookIcon fontSize="large"/></a>
            <a href="/" className='footer__link'><InstagramIcon fontSize="large"/></a>
            <a href="/" className='footer__link'><TwitterIcon fontSize="large"/></a>
            <a href="/" className='footer__link'><YouTubeIcon fontSize="large"/></a>
        </div>
        <div className="footer__infos">
            <a href="/" className='footer__info'>Audiodescription</a>
            <a href="/" className='footer__info'>Centre d'aide</a>
            <a href="/" className='footer__info'>Cartes cadeaux</a>
            <a href="/" className='footer__info'>Presse</a>
            <a href="/" className='footer__info'>Relation Investisseurs</a>
            <a href="/" className='footer__info'>Recrutement</a>
            <a href="/" className='footer__info'>Conditions d'utilisation</a>
            <a href="/" className='footer__info'>Confidentialité</a>
            <a href="/" className='footer__info'>Informations légales</a>
            <a href="/" className='footer__info'>Préférences de cookies</a>
            <a href="/" className='footer__info'>Mentions légales</a>
            <a href="/" className='footer__info'>Nous contacter</a>
        </div>
        <button className='footer__btn'>Code de service</button>
        <p className='footer__text'>© 1997-2023 Netflix, Inc.</p>
    </div>
    
    </>
  )  
}

export default Footer