import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from 'react-icons/io5'
const MainModal = ({ modalOpen, setModalOpen, children }) => {
  const cancelButtonRef = useRef();
  return (
    <Transition show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className={"fixed inset-0 z-30 overflow-y-auto text-center"}
        initialFocus={cancelButtonRef}
        onClose={() => setModalOpen(!modalOpen)}
      >
        <div className="min-h-screen px-4">
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveForm="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {children}
          </Transition.Child>

        </div>
      </Dialog>
    </Transition>
  );
};

export default MainModal;
