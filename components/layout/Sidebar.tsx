import React, { FC, useEffect, useRef } from "react";
import Portal from "../portal/Portal";

const Sidebar: FC = () => {
  return (
    <Portal renderToElementId="modal">
      <aside>This is portalled Sidebar</aside>
    </Portal>
  );
};

export default Sidebar;
