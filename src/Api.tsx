import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://netflix54.p.rapidapi.com/languages/',
  headers: {
    'X-RapidAPI-Key': '06247b6bc8msh8e6df70b13c7bc3p14178ejsn554ca7bc8ebd',
    'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});