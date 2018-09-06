const db = require('./connection')

function exampleDbFunction () {
  return db('jobs')
}

module.exports = {
  exampleDbFunction
}
