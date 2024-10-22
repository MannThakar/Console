import { createContext, useState } from "react";
import { CARD_DATA } from "../utils/constant";

// Create the context
const CardContext = createContext();

// Create the provider
const CardProvider = ({ children }) => {
  const [cardData, setCardData] = useState(CARD_DATA);

  return (
    <CardContext.Provider value={{ cardData, setCardData }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
export default CardProvider;
