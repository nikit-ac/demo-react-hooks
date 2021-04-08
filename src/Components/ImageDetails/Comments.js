import React from 'react';
import Comment from "./Comment"

function Comments(props) {

    return (
        <div className="comments">
                {props.commentsData.map((commentData) => {
                    return (<Comment key={commentData.id} text={commentData.text} date={commentData.date}/>)
                })}
        </div>
    );
}


export default Comments;
