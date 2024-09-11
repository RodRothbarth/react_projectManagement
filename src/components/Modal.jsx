import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

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
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{title}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
