import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "./Button.jsx";

export const Modal = forwardRef(function Modal(
  { children, title, ...props },
  ref,
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      openModal() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialog}
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{title}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
