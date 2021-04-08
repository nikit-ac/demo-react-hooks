import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import { ModalContext } from "./../Context/ModalContext";
import './ImageDetails.css';
import AddCommentForm from "./ImageDetails/AddCommentForm"
import Comments from "./ImageDetails/Comments"
import apiClient from "../Helpers/ApiClient";

const ImageDetails = () => {

    const [imageData, setImageData] = useState(false);

    let { imageId, handleModal, modal } = React.useContext(ModalContext);

    useEffect(() => {
        async function fetchData() {
            let response = await apiClient.get('/images/' + imageId);
            setImageData(response.data);
        }

        if (imageId) {
            fetchData()
        }
    }, [imageId])

    if (modal && imageData) {
        return ReactDOM.createPortal(
            <div className="modal-overlay">
                <div className="modal-wrapper">
                    <button className="close-btn" onClick={() => { handleModal() }}>&times;</button>
                    <div className="left">
                        <img src={imageData.url} alt={imageData.id} />
                        <AddCommentForm imageId={imageData.id} />
                    </div>
                    <Comments commentsData={imageData.comments} />
                </div>
            </div>,
            document.querySelector("#modal-root")
        );
    } else return null;
};

export default ImageDetails;
