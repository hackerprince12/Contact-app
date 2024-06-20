import React from "react";
import { AiOutlineClose } from "react-icons/ai"
import { createPortal } from 'react-dom'

const Modal = ({ onClose, isOpen, children }) => {

  return createPortal(
  <>
    {
      isOpen && (

        <div
          // onClick={onClose} 
          className="absolute top-0 z-40 h-screen w-screen  grid place-items-center 
          backdrop-blur" >
          <div className="min-h-[200px] z-50  m-auto relative min-w-[80%] bg-white p-4">
            <div className="flex justify-end ">
              <AiOutlineClose onClick={onClose}
                className="text-2xl self-end  cursor-pointer " />

            </div>
            {children}
          </div>
          </div>
          
  )}
        </>, document.getElementById("model-root"));
    };

    export default Modal;
