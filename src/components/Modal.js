import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
    close() {
      dialog.current.close();
    },
  }));
  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-5 rounded-md shadow-md w-1/5"
      ref={dialog}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
