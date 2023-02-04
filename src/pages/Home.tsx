import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from '../components/Row'
import Footer from "../components/Footer";
import "./Home.css";
import { Movie } from "../typings";
import axios from 'axios';
import requests from '../config/Request';

interface Props {
  title: string,
  movies: string,
  
}

const Home = () => {
  
  return (
    <>
      <Navbar />
      <Banner />
      {/* <Row title='Ajout récents' movies={requests.fetchLatest}/> */}
      <Row title='Populaires' movies={requests.fetchPopular}/>
      <Row title='Mieux notés' movies={requests.fetchTopRated}/>
      <Row title='Prochainement' movies={requests.fetchUpcoming}/>
      <Row title='Actions' movies={requests.fetchActionMovies}/>
      <Row title='Comédies' movies={requests.fetchComedyMovies}/>
      <Row title='Horreurs' movies={requests.fetchHorrorMovies}/>
      <Row title='Romances' movies={requests.fetchRomanceMovies}/>
      <Row title='Documentaires' movies={requests.fetchDocumentary}/>

      <Footer />
    </>
  );
};

export default Home;

// export const getServerSideProps = async () => {
  // const [
  //   trendingNow,
  //   latest,
  //   popular,
  //   topRated,
  //   actionMovies,
  //   comedyMovies,
  //   horrorMovies,
  //   romanceMovies,
  //   documentary,
  // ] = await Promise.all([
  //   axios.get(requests.fetchTrending).then((res) => res.data),
  //   axios.get(requests.fetchLatest).then((res) => res.data),
  //   axios.get(requests.fetchPopular).then((res) => res.data),
  //   axios.get(requests.fetchTopRated).then((res) => res.data),
  //   axios.get(requests.fetchActionMovies).then((res) => res.data),
  //   axios.get(requests.fetchComedyMovies).then((res) => res.data),
  //   axios.get(requests.fetchHorrorMovies).then((res) => res.data),
  //   axios.get(requests.fetchRomanceMovies).then((res) => res.data),
  //   axios.get(requests.fetchDocumentary).then((res) => res.data),
  // ]);

  // console.log(trendingNow);

  // return {
  //   props: {
  //     trendingNow: trendingNow.results,
  //     topRated: topRated.results,
  //     actionMovies: actionMovies.results,
  //     comedyMovies: comedyMovies.results,
  //     horrorMovies: horrorMovies.results,
  //     romanceMovies: romanceMovies.results,
  //     documentaries: documentary.results,
  //   },
  // };
// };
