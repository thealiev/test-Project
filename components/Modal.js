import React from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-gray-800 bg-opacity-80 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2">{children}</div>
      <button
        className="absolute top-4 right-4 backdrop-blur-2xl rounded-xl focus:bg-gray-600"
        onClick={closeModal}
      >
        <MdClose size={40} color="white"/>
      </button>
    </div>
  );
};

export default Modal;
