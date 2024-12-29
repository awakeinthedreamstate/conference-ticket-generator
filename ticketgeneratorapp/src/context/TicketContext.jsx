import { createContext, useReducer, useState } from "react";
const TicketContext = createContext();

function TicketContextProvider({ children }) {
  const [attendeeBio, setAttendeeBio] = useState({
    avatar: "",
    name: "",
    email: "",
    github: "",
  });

  return (
    <TicketContext.Provider value={{ attendeeBio, setAttendeeBio }}>
      {children}
    </TicketContext.Provider>
  );
}
export { TicketContext, TicketContextProvider };
