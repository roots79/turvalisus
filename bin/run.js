const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://xkcd.com/')
.then(function(response) {
    //console.log(response);
    const $ = cheerio.load(response.data)
    let title=$('#ctitle').text();
    console.log(title);
    let imgURL=$('#comic img').attr('src');
    console.log(imgURL)
})