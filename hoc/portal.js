import { createPortal } from 'react-dom';

const Portal = ({ children, visible }) => {
  // check if document is loaded
  if (typeof window === 'object') {
    return visible && createPortal(children, document.getElementById('portal'));
  }

  return null;
};

export default Portal;
