import React from 'react'
import {getFavJobs, saveFavJobs} from '../../server/db/example'

export default class Favs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            location: '',
            type: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.saveFavJobs = this.saveFavJobs.bind(this)

    }

    handleSubmit (e) {
        e.preventDefault();
        this.setState({
          [e.target.name]: e.target.value
        })
      }

    saveFavJobs(e) {
  
    }
    render () {
        // getFavJobs().then((favJob) =>
        // console.log(favJob))

    return (
      <div className="Favs">
        <h1>This is Favs</h1>
      </div>
    )
  }
}