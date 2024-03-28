import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
/* eslint-disable-next-line */
export interface ModalProps {
  children?: React.ReactNode;
  button?: JSX.Element,
  open?: boolean,
  setIsOpen?: any
}

export function Modal(props: ModalProps) {

  const customContentStyle = {
    width: 'revert-layer',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px'
  };

  const openModal = () => {
    props.setIsOpen(true);
  };

  const handleModalClose = () => {
    props.setIsOpen(false);    // Close the modal and update the state
  };


  return (
    <>
      {props.button && React.cloneElement(props.button, { onClick: openModal })}
      <Popup open={props.open} closeOnDocumentClick contentStyle={customContentStyle} onClose={handleModalClose}>
        {props.children}
      </Popup>
    </>
  );
}

export default Modal;
