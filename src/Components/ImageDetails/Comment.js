import React from 'react';
import './Comment.css';

function Comment(props) {
    const date = new Date(props.date);
    return (
        <div className="comment" data-id={props.id}>
            <time className="date" dateTime={date.toDateString()}>{date.toDateString()}</time>
            <div className="content">{props.text}</div>
        </div>
    );
}


export default Comment;
