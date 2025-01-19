import { useContext, useState, useEffect } from "react";
import "./app.css";
import { TicketContext } from "./context/TicketContext";
import AppTitle from "./components/AppTitle";
import MainContainer from "./components/MainContainer";
import FormHeader from "./components/FormHeader";
import TicketForm from "./components/TicketForm";
import TicketCard from "./components/TicketCard";

function App() {
  const { animationTimer, attendeeBio } = useContext(TicketContext);
  const [ticketView, setTicketView] = useState(false);

  useEffect(() => {
    if (attendeeBio.isTicketGenerated) {
      animationTimer(setTicketView, 1400);
    }
  }, [attendeeBio.isTicketGenerated]);

  return (
    <div className="App">
      <AppTitle />
      <MainContainer>
        <FormHeader />
        {ticketView ? <TicketCard /> : <TicketForm />}
      </MainContainer>
    </div>
  );
}

export default App;
