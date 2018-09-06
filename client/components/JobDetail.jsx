import React from 'react'

export default function JobDetail (props) {
  
    console.log(props);
    

    return (
      <div className="jobList">
       <ul>
           {props.data.body.map(jobInfo => {
            return <li><img className='logo' src={jobInfo.company_logo}></img><a href={jobInfo.url}>{jobInfo.title}</a></li>
           })}
         
       </ul>
      </div>
    )
  }