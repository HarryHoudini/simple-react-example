import React from 'react';

interface ModalProps {
  handleClose: () => void;
  isAnimated: boolean;
  isVisible: boolean;
}

const Modal = ({ handleClose, isAnimated, isVisible }: ModalProps) => (
  <div
    className={`overlay ${isAnimated ? 'animated' : ''} ${
      isVisible ? 'visible' : ''
    }`}
  >
    <div className="modal">
      <svg height="200" onClick={handleClose} viewBox="0 0 200 200" width="200">
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      <img
        alt="open modal img"
        src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"
      />
    </div>
  </div>
);

export default Modal;
