import React, { FC, useEffect, useRef } from "react";
import Portal from "../portal/Portal";

const Sidebar: FC = () => {
  return (
    <Portal renderToElementId="modal">
      <div>This is portalled Sidebar</div>
    </Portal>
  );
};

export default Sidebar;
