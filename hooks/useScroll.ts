import { useRef } from "react";

const useScroll = () => {
  const elRef = useRef<null | HTMLDivElement>(null);
  const executeScroll = () => elRef!.current!.scrollIntoView();

  return [executeScroll, elRef];
};

export default useScroll;