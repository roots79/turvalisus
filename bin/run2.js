const axios = require('axios');

axios.post('https://kinnisvara24.delfi.ee/search/count')
.then(function(response) {
    console.log(response.data);
    console.log(response.data.count)
    
})