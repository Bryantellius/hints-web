import Header from "./Header";
import Footer from "./Footer";
import Modal from "./Modal";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const Layout = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="base">
      <Header setShowModal={setShowModal} />
      <Modal showModal={showModal}>
        <div className="flex">
          <div className="grow flex items-center p-4">
            <h2 className="modal-title">What is this?</h2>
          </div>
          <div className="flex justify-end items-center p-4">
            <XIcon
              width={30}
              height={30}
              className="cursor-pointer"
              onClick={(e) => setShowModal(false)}
            />
          </div>
        </div>
        <div className="p-4">
          <p>This is a game...</p>
        </div>
      </Modal>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
