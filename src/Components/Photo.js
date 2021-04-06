import React from 'react';
import { ModalContext } from "../Context/ModalContext";
import './Photo.css';

function Photo(props) {
    let { handleModal } = React.useContext(ModalContext);

    return (
        <div className="Photo">
            <img src={props.url} alt={'image-' + props.id} onClick={() => handleModal('a s df lb fjhsdbkhj fbsd fshd fbjsd fbsdjsd')}/>
        </div>
    );
}


export default Photo;
