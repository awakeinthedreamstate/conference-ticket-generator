import { useContext } from "react";
import "./app.css";
import { TicketContext } from "./context/TicketContext";
import AppTitle from "./components/AppTitle";
import MainContainer from "./components/MainContainer";
import FormHeader from "./components/FormHeader";
import TicketForm from "./components/TicketForm";
import TicketCard from "./components/TicketCard";

function App() {
  const { attendeeBio } = useContext(TicketContext);

  return (
    <div className="App">
      <AppTitle />
      <MainContainer>
        <FormHeader />
        {attendeeBio.isTicketGenerated ? <TicketCard /> : <TicketForm />}
      </MainContainer>
    </div>
  );
}

export default App;
