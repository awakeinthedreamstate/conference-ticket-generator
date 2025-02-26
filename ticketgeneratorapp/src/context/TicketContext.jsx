import { createContext, useState } from "react";
const TicketContext = createContext();

function TicketContextProvider({ children }) {
  const [attendeeBio, setAttendeeBio] = useState({ isTicketGenerated: false });

  return (
    <TicketContext.Provider value={{ attendeeBio, setAttendeeBio }}>
      {children}
    </TicketContext.Provider>
  );
}
export { TicketContext, TicketContextProvider };
