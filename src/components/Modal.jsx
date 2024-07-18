import React from "react";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`absolute overflow-hidden z-1 inset-0 flex justify-center items-center transition-colors ${open ? "visible backdrop-blur" : "invisible"}`}
    >
      <div
        // onClick={(e) => e.stopPropagation()}
        className={`rounded-xl bg-n-7/70 shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <div className="absolute inset-0 bg-noisy-texture opacity-10" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
