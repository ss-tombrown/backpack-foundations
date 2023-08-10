import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M3 4.5a3 3 0 013-3h9a3 3 0 013 3V6a4.5 4.5 0 110 9v1.5a3 3 0 01-3 3H6a3 3 0 01-3-3v-12zm16.5 6A1.5 1.5 0 0018 9v3a1.5 1.5 0 001.5-1.5zm-4.939-.44a1.5 1.5 0 10-2.122-2.12L9.75 10.631 8.561 9.44a1.5 1.5 0 10-2.122 2.12l2.251 2.254a1.5 1.5 0 002.123 0l3.748-3.754zM3 21a1.5 1.5 0 000 3h15a1.5 1.5 0 000-3H3z" /></svg>);