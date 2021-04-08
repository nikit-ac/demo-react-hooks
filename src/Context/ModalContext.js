import React from "react";
import useModal from "./../Hooks/useModal";
import ImageDetails from "../Components/ImageDetails";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
    let { modal, handleModal, imageId } = useModal();
    return (
        <Provider value={{ modal, handleModal, imageId }}>
            <ImageDetails />
            {children}
        </Provider>
    );
};

export { ModalContext, ModalProvider };
