import { createContext, useState } from "react";

const CarouselContext = createContext();
const initialCarousel = "none"

const CarouselProvider = ({children}) => {
    const [carousel, setCarousel] = useState(initialCarousel)

    const handleCarousel = (e) => {
        if (e.target.value === "none") {
            setCarousel("none");
        } else {
            setCarousel("")
        }
    }

    const data = { carousel, handleCarousel }

    return(
        <CarouselContext.Provider value={data}>{children}</CarouselContext.Provider>
    )
}

export {CarouselProvider};
export default CarouselContext;