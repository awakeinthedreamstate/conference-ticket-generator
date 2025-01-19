import { createContext, useReducer, useState } from "react";
const TicketContext = createContext();

function TicketContextProvider({ children }) {
  const [attendeeBio, setAttendeeBio] = useState({ isTicketGenerated: false });
  const animationTimer = (setState, timer) => {
    setTimeout(() => {
      setState(true);
    }, timer);
    // console.log("timed");
  };

  return (
    <TicketContext.Provider
      value={{ attendeeBio, setAttendeeBio, animationTimer }}
    >
      {children}
    </TicketContext.Provider>
  );
}
export { TicketContext, TicketContextProvider };
