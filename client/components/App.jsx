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
            location: '',
            return: false,
            seeFaves: false
        }
        this.getData = this.getData.bind(this)
        this.seeFaves = this.seeFaves.bind(this)

    }

    getData(location, search) {
        request.get(`http://jobs.github.com/positions.json?description=${search}&location=${location}&full_time=true`)
            .then(data => {
                this.setState({
                    apiInfo: data,
                    return: true
                })
                console.log(this.state);
            })
    }


    seeFaves(){
      this.setState(prevState => ({
        seeFaves: !prevState.seeFaves
      }));
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
    <div className="search">
      <div id="job">Job Type:</div>
        <input className="searchInput" value={this.state.searchTerm} onChange={evt => this.updateInputValue(evt)}/>

            <div id="location">
            Location: 
            </div>
          <input className="searchInput" value={this.state.location} onChange={evt => this.updateLocation(evt)}/>
    </div>
     
      {this.state.return && <JobDetail data={this.state.apiInfo}/>} 

    </div>
    <a href="#" onClick={this.seeFaves}>See Favourites</a>
    {this.state.seeFaves && <Favs />}
  </div>
        )

    }
}

export default App