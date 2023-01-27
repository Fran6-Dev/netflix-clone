import React from "react";
import Navbar  from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import axios from 'axios'
import requests from "../config/Request";
import "./Home.css";
import { Movie } from "../typings";

interface Props {
  trendingNow: Movie[]
}

const Home = ({trendingNow} : Props ) => {
  console.log(trendingNow)
  return (
    <>
      <Navbar />
      <Banner trendingNow={[]} />
      <Footer />
    </>
  );
};

export default Home;


export const getServerSideProps = async () => {
  

  const [
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentary,
  ] = await Promise.all([
    // axios.get(requests.fetchTrending).then((res) => res.data),
    fetch(requests.fetchTrending).then((res) => res.json()),
    axios.get(requests.fetchTopRated).then((res) => res.data),
    axios.get(requests.fetchActionMovies).then((res) => res.data),
    axios.get(requests.fetchComedyMovies).then((res) => res.data),
    axios.get(requests.fetchHorrorMovies).then((res) => res.data),
    axios.get(requests.fetchRomanceMovies).then((res) => res.data),
    axios.get(requests.fetchDocumentary).then((res) => res.data),
  ])

  console.log(trendingNow)

  return {
    props: {
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentary.results,
    }
  }
  
}

