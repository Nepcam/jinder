import React from 'react'

export default class Job extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
     
    }
    
  }



  render(){
    
    return (
      
       <div class="jobDescription">
       <h2>{this.props.job.company}</h2>
      {this.props.job.type}<br/>
       {this.props.job.location}<br/>
       <a href={this.props.job.url}>Link to Company Website</a>
       <div dangerouslySetInnerHTML={{__html: this.props.job.description}} /><br/>
      Application Link Below:
       <div className="lukesLink" dangerouslySetInnerHTML={{__html: this.props.job.how_to_apply}} /><br/>
       {/* {this.props.job.how_to_apply} */}
       
       <a href={this.props.job.url}>GitHub URL</a>
       </div>
      
    )
  }
  }