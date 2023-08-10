import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5A10.5 10.5 0 1022.5 12 10.5 10.5 0 0012 1.5zm4.16 7.085l-3.19 8.295a.577.577 0 01-.978.167.563.563 0 01-.086-.158l-1.019-2.59a2.1 2.1 0 00-1.186-1.186l-2.59-1.019a.564.564 0 01-.158-.086.577.577 0 01.167-.978l8.295-3.19a.577.577 0 01.745.745z" /></svg>);