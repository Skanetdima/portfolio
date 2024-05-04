import { useRef } from "react";

export const HandleButton = () => {
  const h3Ref = useRef(null);

  const h3Content = h3Ref.current.textContent || h3Ref.current.innerText;

  // copy text value
  console.log(h3Content);
};
