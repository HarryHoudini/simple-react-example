import React, { useCallback, useState } from 'react';

import Modal from './components/modal/Modal';

import './App.scss';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <div className="App">
      <button
        className="open-modal-button"
        onClick={() => {
          setIsVisible(true);
        }}
        type="button"
      >
        ✨ Открыть окно
      </button>

      <Modal handleClose={onClose} isAnimated isVisible={isVisible} />
    </div>
  );
}

export default App;
