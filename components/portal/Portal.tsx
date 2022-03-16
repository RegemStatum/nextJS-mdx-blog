import React, { FC } from "react";
import { createPortal } from "react-dom";

const ModalPortal: FC<{ renderToElementId: string }> = ({
  children,
  renderToElementId,
}) => {
  if (typeof document !== "undefined") {
    const modalRootEl = document.getElementById(
      renderToElementId
    ) as HTMLElement;

    return createPortal(children, modalRootEl);
  }

  return <></>;
};

export default ModalPortal;
