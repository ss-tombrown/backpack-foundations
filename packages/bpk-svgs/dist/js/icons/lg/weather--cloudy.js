import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M14.317 5.534a.294.294 0 01-.262.49 6.503 6.503 0 00-6.809 4.721.562.562 0 01-.411.393A5.002 5.002 0 003.006 16a.244.244 0 01-.378.217 3.997 3.997 0 011.494-7.114 1.432 1.432 0 001.064-1.002 5.502 5.502 0 019.131-2.567z" /><path d="M18.506 20a4.852 4.852 0 01-.5-.027V20h-10a3.998 3.998 0 01-.884-7.897 1.432 1.432 0 001.064-1.002 5.502 5.502 0 0110.38-.759 1.341 1.341 0 00.936.77A4.502 4.502 0 0118.506 20z" /></svg>);