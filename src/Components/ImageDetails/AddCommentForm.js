import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

function AddCommentForm(props) {

    return (
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Your name"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Comment"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddCommentForm;
