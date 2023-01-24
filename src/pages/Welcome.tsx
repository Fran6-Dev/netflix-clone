import React from 'react'
import { Link } from 'react-router-dom'
import './Welcome.css'

const Welcome = () => {
  return (
    <>
    <div className="allPage">
        <h2>Qui est-ce ?</h2>
        <div className="allProfil">
            <Link to="/welcome">
            <div className="profil">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="profil-pic" className='profil-img'/>
                <p className="profil-text">Francis</p>
            </div>
            </Link>
            <Link to="/welcome">
            <div className="profil">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="profil-pic" className='profil-img'/>
                <p className="profil-text">Johana</p>
            </div>
            </Link>
            <Link to="/welcome">
            <div className="profil">
                <img src="https://i.pinimg.com/originals/c0/8e/6c/c08e6c9595e03202a46a95f66578799f.png" alt="profil-pic" className='profil-img'/>
                <p className="profil-text">Baudry</p>
            </div>
            </Link>
        </div>
        <div className='button'>
            <button>Gérer les profils</button>
        </div>
    </div>
    </>
  )
}

export default Welcome