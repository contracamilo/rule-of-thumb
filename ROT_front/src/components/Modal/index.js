import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

const modalContainer = document.getElementById('root__portal');

const Modal = ({ children, type, fade = false, defaultOpened = false }, ref) => {
  const [isOpen, setIsOpen] = useState(defaultOpened);
  const close = useCallback(() => setIsOpen(false), []);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen && (
      <div className={`modal ${fade ? 'modal--fade' : ''} modal--${type}`}>
        <div className="modal__overlay" onClick={close} />
        <span role="button" className="modal__close" aria-label="close" onClick={close}>
          x
        </span>
        <div className="modal__body">{children}</div>
      </div>
    ),
    modalContainer
  );
};

export default forwardRef(Modal);
