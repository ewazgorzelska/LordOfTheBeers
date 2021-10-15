import { useState, useEffect } from "react";

const useCartPreview = () => {
  const [isCartPreviewOpened, setCartPreviewOpened] = useState(false);
  const [offset, setOffset] = useState(0);

  const handleCartPreview = () => {
    setCartPreviewOpened((prevState) => !prevState);
  };

  useEffect(() => {
    window.onscroll = () => {
      setOffset(Math.round(window.pageYOffset));
    };
  }, []);

  useEffect(() => {
    if (isCartPreviewOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartPreviewOpened]);

  return { isCartPreviewOpened, handleCartPreview, offset };
};

export default useCartPreview;
