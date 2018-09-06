import React from 'react'
import {
    HashRouter as Router,
    Route
} from 'react-router-dom'
import JobDetail from './JobDetail'
import request from 'superagent'
import Favs from './Favs'


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            apiInfo: '',
            searchTerm: '',
            location: ''
        }
        this.getData = this.getData.bind(this)

    }

    getData(location, search) {
        request.get(`http://jobs.github.com/positions.json?description=${search}&location=${location}&full_time=true`)
            .then(data => {
                this.setState({
                    apiInfo: data
                })
                console.log(this.state);
            })
    }


    updateInputValue(evt) {
        this.setState({
            searchTerm: evt.target.value
        });

    }
    submit(e) {
        e.preventDefault()
        this.getData(this.state.searchTerm)
    }
    updateLocation(evt) {
        this.setState({
            location: evt.target.value
        });

        this.getData(evt.target.value, this.state.searchTerm)
    }


    render() {
        return (
            <div>
  
    <div className='app-container section'>
    <div class="search">
      <div id="job">Job Type:</div>
        <input class="searchInput" value={this.state.searchTerm} onChange={evt => this.updateInputValue(evt)}/>

            <div id="location">
            Location: 
            </div>
          <input class="searchInput" value={this.state.location} onChange={evt => this.updateLocation(evt)}/>
    </div>
     
      {this.state.apiInfo && <JobDetail data={this.state.apiInfo}/>} 

    </div>
    <Favs />
  </div>
        )

    }
}

export default App