import React, { useContext } from 'react';
import Comment from "./Comment"
import CommentsContext from "../../Context/CommentsContext";

function Comments() {
    const commentsData = useContext(CommentsContext)[0];

    return (
        <div className="comments">
                {commentsData.map((commentData) => {
                    return (<Comment key={commentData.id} text={commentData.text} date={commentData.date}/>)
                })}
        </div>
    );
}

export default Comments;
