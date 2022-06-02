import { createContext, useState } from "react";

const OpenCarouselContext = createContext();

const initialOpenCarousel = false;

const OpenCarouselProvider = ({ children }) => {
  const [openCarousel, setOpenCarousel] = useState(initialOpenCarousel);

  const handleCarousel = () => {
    setOpenCarousel((current) => !current);
  };
  
  const data = { openCarousel, handleCarousel };

  return (
    <OpenCarouselContext.Provider value={data}>
      {children}
    </OpenCarouselContext.Provider>
  );
};

export { OpenCarouselProvider };

export default OpenCarouselContext;