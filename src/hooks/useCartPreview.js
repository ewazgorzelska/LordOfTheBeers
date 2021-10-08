import { useState } from "react";

const useCartPreview = () => {
  const [isCartPreviewOpened, setCartPreviewOpened] = useState(false);

  const handleCartPreview = () => {
    setCartPreviewOpened(!isCartPreviewOpened);
  };

  return { isCartPreviewOpened, handleCartPreview };
};

export default useCartPreview;
