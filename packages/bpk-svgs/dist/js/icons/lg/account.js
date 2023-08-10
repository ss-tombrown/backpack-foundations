import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 12c1.5 0 3-.8 3-2.378V4.6a1.179 1.179 0 00-.608-1.102A5.619 5.619 0 0012 3a5.833 5.833 0 00-2.428.499A1.13 1.13 0 009 4.568v5.054C9 11.2 10.5 12 12 12zm-1-3h2v.028a1 1 0 01-2 0zm7.988 6.6a17.328 17.328 0 00-7.016-1.6 16.866 16.866 0 00-6.982 1.598A1.77 1.77 0 004 17.232v.995A2.951 2.951 0 007.045 21h10.182A2.712 2.712 0 0020 18.227v-.977a1.784 1.784 0 00-1.012-1.65z" /></svg>);