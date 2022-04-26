const Modal = ({ showModal, children }) => {
  if (showModal)
    return (
      <div className="modal flex justify-center items-center">
        <div className="modal-body card">{children}</div>
      </div>
    );
  else return null;
};

export default Modal;
