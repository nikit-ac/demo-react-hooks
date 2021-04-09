import React, {useState} from "react";
import useModal from "./../Hooks/useModal";
import ImageDetails from "../Components/ImageDetails";
import CommentsContext from "../Context/CommentsContext";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
    let { modal, handleModal, imageId } = useModal();
    const [comments, setComments] = useState([]);

    return (
        <Provider value={{ modal, handleModal, imageId }}>
            <CommentsContext.Provider value={[comments, setComments]}>
                <ImageDetails />
            </CommentsContext.Provider>
            {children}
        </Provider>
    );
};

export { ModalContext, ModalProvider };
