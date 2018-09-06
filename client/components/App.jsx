import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import JobDetail from './JobDetail'
import request from 'superagent'
import Favs from './Favs'


class App extends React.Component {
  constructor (props){
  super(props)

    this.state = {
      apiInfo: ''
    }
    this.getData = this.getData.bind(this)
  
  }

  getData(){
      request.get('http://jobs.github.com/positions.json?description=python&location=sf&full_time=true')
     .then(data => {
      this.setState({
        apiInfo: data
      })
      console.log(this.state);
      
     })
}
  
  render (){
  return (
    <div>
  
    <div className='app-container section'>
      <h1>Jinder</h1>
      <button onClick={this.getData}>
           click me</button>
      {this.state.apiInfo && <JobDetail data={this.state.apiInfo}/>} 

    </div>
    <Favs />
  </div>
  )

  }
}

export default App
