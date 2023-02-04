import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Movie } from '../typings';
import requests from '../config/Request';
import axios from 'axios';
import './Row.css'
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface Props {
    title: string
    movies: string
  }

const Row = ({title, movies} : Props) => {

    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)



    const [isMovies, setIsMovies] = useState<Movie[] | null>([]);

    useEffect(() => {
      const fetchMovies = async () => {
        const response = await axios.get(movies);
        setIsMovies(response.data.results);
      };
      fetchMovies();
    }, [movies]);
  
    if (!isMovies) {
      return <div>LOADING !!!</div>;

    }

    const handleClick = (direction: string) => {
        setIsMoved(true)

        if(rowRef.current) {
            const {scrollLeft, clientWidth} = rowRef.current

            const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth

            rowRef.current.scrollTo({left: scrollTo, behavior: 'smooth'})
        }
    }
    

  return (
    <>
    <div className="row">
        <h3 className="row__title">{title}</h3>
        <div className="row__items">
           <ChevronLeft onClick={() => handleClick("left")} className={`chevronleft ${!isMoved && 'hidden'}`}/>
           <div ref={rowRef} className="row__images">
            {isMovies.map((movie) => (
                <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.backdrop_path || movie.poster_path}`} alt="" className='row__image' />
                </div>
            ))}
            </div>
           <ChevronRight onClick={() => handleClick("right")} className="chevronright"/>

        </div>
    </div>
    </>
  )
}

export default Row