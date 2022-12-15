import { createPortal } from "react-dom";
import ExitIcon from "../exitIcon/ExitIcon";
const PopUpModal = ({
  children,
  onClose,
}: {
  children: JSX.Element | string | JSX.Element[];
  onClose: () => void;
}) => {
  return createPortal(
    <div className="pop-up-modal">
      <button aria-label="close-pop-up" onClick={onClose}></button>
      <div className="pop-up-modal-inner">
        <button
          className="pop-up-modal-close-btn"
          aria-label="close-pop-up"
          onClick={onClose}
        >
          <ExitIcon />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
export default PopUpModal;
