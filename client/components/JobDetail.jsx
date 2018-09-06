import React from 'react'

export default function JobDetail (props) {
  
    console.log(props);
    

    return (
      <div>
       <ul>
           {props.data.body.map(jobInfo => {
            return    <li>{jobInfo.title}</li>
           })}
         
       </ul>
      </div>
    )
  }