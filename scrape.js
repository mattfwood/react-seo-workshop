const axios = require('axios');

const scrape = async (url) => {
  // const res = await axios.get('https://blog.matthewfwood.com/');
  const res = await axios.get(url);
  console.log(res.data);
}

scrape('http://localhost:8080/');