import { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  const backdropHandler = () => {
    props.onBackdropClick(false);
  };
  return <div className={classes.backdrop} onClick={backdropHandler}></div>;
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
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onBackdropClick = {props.onBackdropClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
