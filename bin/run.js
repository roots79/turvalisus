const axios = require('axios');
const cheerio = require('cheerio');
const download = require('image-downloader');

for(i=2270; i>=2260;i--){
axios.get('https://xkcd.com/'+ i +'/')
.then(function(response) {
    //console.log(response);
    const $ = cheerio.load(response.data)
    let title=$('#ctitle').text();
    console.log(title);
    let imgURL=$('#comic img').attr('src');
    console.log(imgURL)

    const options = {
        url: 'https:'+imgURL,
        dest: 'img'                // Save to /path/to/dest/image.jpg
      }
       
      download.image(options)
        .then(({ filename, image }) => {
          console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
        })
        .catch((err) => console.error(err))
})}