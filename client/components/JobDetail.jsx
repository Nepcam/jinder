import React from 'react'

export default function JobDetail (props) {
  
    console.log(props);
    

    return (
      <div className="jobList">
       <ul>
           {props.data.body.map(jobInfo => {
            return (
              <div className="listings">
                <li><img className='logo' src={jobInfo.company_logo}></img><a href='#' onClick={}>{jobInfo.title}</a></li>
                <hr/>
              </div>
            )
          })}
       </ul>
      </div>
    )
  }