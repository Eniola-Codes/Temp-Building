import {useState, useEffect} from 'react';

const useWidth = (breakPoint : number, breakPoint2? : number) => {
  const [width, setWidth] = useState<any>();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  const responsive = width > breakPoint ? true : false;
  const responsive2 = breakPoint2 && width > breakPoint2 ? true : false;

  return {
    responsive,
    responsive2
  };
};

export default useWidth;
