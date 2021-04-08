import React from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./../Context/ModalContext";
import './ImageDetails.css';
import AddCommentForm from "./ImageDetails/AddCommentForm"
import Comments from "./ImageDetails/Comments"

const ImageDetails = () => {
    let { imageId, handleModal, modal } = React.useContext(ModalContext);
    if (modal) {
        return ReactDOM.createPortal(
            <div className="modal-overlay">
                <div className="modal-wrapper">
                    <button className="close-btn" onClick={() => { handleModal() }}>&times;</button>
                    <div className="left">
                        <img src="https://picsum.photos/id/242/300/200" alt="123" />
                        <AddCommentForm />
                    </div>
                    <Comments />
                </div>
            </div>,
            document.querySelector("#modal-root")
        );
    } else return null;
};

export default ImageDetails;
