const fetchCategories = require('./fetchcategories.js');
const categoryURI = 'http://jservice.io/api/categories?count=100&offset=';
const fs = require('fs');
const randomOffset = () => Math.floor(Math.random()*18000);

const data = fetchCategories(categoryURI + randomOffset);
data.then(response => {
    fs.writeFile('categories.txt', response, (err) => {
        if(err) throw err;
    })
})