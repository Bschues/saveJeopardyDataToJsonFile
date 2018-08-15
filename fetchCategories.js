module.exports = function(uri) {
    const fetch = require('node-fetch')
    const logSpacing= "\n\n\n"
    return fetch(uri)
    .then(response => {return response.json()})
    .then(data => {return JSON.stringify(data);})
}