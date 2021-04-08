import React from "react";

const useModal = () => {
  let [modal, setModal] = React.useState(false);
  let [imageId, setImageId] = React.useState(null);

  let handleModal = (imageId = null) => {
    setModal(!modal);
    if (imageId) {
      setImageId(imageId);
    }
  };

  return { modal, handleModal, imageId };
};

export default useModal;
