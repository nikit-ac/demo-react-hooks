import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import apiClient from './../../Helpers/ApiClient';
import CommentsContext from "../../Context/CommentsContext";

function AddCommentForm(props) {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useContext(CommentsContext);

    const handleSubmit = async event => {
        event.preventDefault();
        if (name.length && comment.length) {
            const response = await apiClient.post(`/images/${props.imageId}/comments`, {
                name: name,
                comment: comment
            });
            if (response.status === 204) {
                const datetime = new Date().getTime()
                comments.push({id: datetime, text: comment, date: datetime })
                setComments(comments)
            }
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasic">
                <Form.Control type="text" placeholder="Your name" onChange={e => setName(e.target.value)} value={name}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Comment" onChange={e => setComment(e.target.value)} value={comment}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddCommentForm;
