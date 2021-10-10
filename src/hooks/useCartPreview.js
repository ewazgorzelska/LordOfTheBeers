import { useState, useEffect } from "react";

const useCartPreview = () => {
  const [isCartPreviewOpened, setCartPreviewOpened] = useState(false);

  const handleCartPreview = () => {
    setCartPreviewOpened((prevState) => !prevState);
  };

  useEffect(() => {
    if (isCartPreviewOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartPreviewOpened]);

  return { isCartPreviewOpened, handleCartPreview };
};

export default useCartPreview;
