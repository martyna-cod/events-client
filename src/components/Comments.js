import React from 'react'
//import CreateCommentContainer from './CreateCommentContainer'

export default function Comments(props) {
    console.log(props,"Are there any props here")
    return (
        <div>
      {/* <CreateCommentContainer/> */}
        <h2>Comments</h2>
        {props.comments.map(comment => (
        <div key={comment.id}>
           <h2> {comment.author}</h2> 
           <p> {comment.description} </p>
           <h4>see detailes</h4>
    
        </div>
      ))}
    </div>
   
  );
}