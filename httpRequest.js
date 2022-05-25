const axios = require('axios');

axios.get('https://knowledgebase.aspiresys.com')
.then(result => {
    console.log(result);
})
.catch(error =>{
    console.log(error)
})