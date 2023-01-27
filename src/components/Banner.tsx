import React from 'react'
import { useState, useEffect } from 'react';
import './Banner.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';
import axios from 'axios';
import requests from '../config/Request';
import { Movie } from '../typings';

interface Props {
    trendingNow: Movie[]
}


const Banner = ({trendingNow} : Props) => {

    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
            setMovie(
                trendingNow[Math.floor(Math.random() * trendingNow.length)]
            )
    }, []);


    console.log(movie)
    

  return (
    <>
    <header className='banner'>
        <div className="banner__content">
            <h1 className='banner__title'>{movie?.name}</h1>
            <p className='banner__description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum veritatis neque commodi libero cum adipisci numquam quo aliquid optio molestias.</p>
        <div className='banner__buttons'>
            <button className='banner__button banner__button--white'><PlayArrowIcon/> Lecture</button>
            <button className='banner__button'><InfoIcon/> Plus d'infos</button>
        </div>
        </div>
    </header>
    </>
  )
}

export default Banner