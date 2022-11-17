import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

// Portals 이용
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  /** portal을 사용하지 않으면 이렇게
  return <Fragment>
      <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay>
  </Fragment>
  **/
  /* 최종 애플리케이션에서 HTML코드가 여러 군데 흩어져 있지 않도록
    portal 사용 */
  return (
    <Fragment>
      {/* (무엇을 포탈, 어디로 포탈) */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
