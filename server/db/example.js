const db = require('./connection')

function getFavJobs () {
  return db('jobs')
}

function saveFavJobs (job) {
  return db('jobs').insert(job)
}

module.exports = {
  getFavJobs,
  saveFavJobs
}
