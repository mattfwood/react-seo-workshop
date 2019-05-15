const axios = require('axios');
const pretty = require('pretty');

const scrape = async () => {
  const [url] = process.argv.slice(2);

  if (!url) {
    console.error('Please Provide a URL')
    process.exit(1);
  }

  // const res = await axios.get('https://blog.matthewfwood.com/');
  const res = await axios.get(url);
  console.log(pretty(res.data));
}

scrape('http://localhost:3000/');