import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M11.91 22.77a.424.424 0 01-.8-.217v-6.944a.437.437 0 00-.428-.446H5.427a.446.446 0 01-.373-.663l7.035-13.27a.424.424 0 01.8.217v6.944a.438.438 0 00.429.446h5.255a.446.446 0 01.374.663z" /></svg>);