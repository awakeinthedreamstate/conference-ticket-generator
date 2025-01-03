import { useState } from "react";
import "./app.css";
import AppTitle from "./components/AppTitle";
import MainContainer from "./components/MainContainer";
import FormHeader from "./components/FormHeader";
import { TicketContextProvider } from "./context/TicketContext";
import TicketForm from "./components/TicketForm";

function App() {
  const [isTicketGenerated, setIsTicketGenerated] = useState(false);

  return (
    <div className="App">
      <AppTitle />
      <MainContainer>
        <TicketContextProvider>
          <FormHeader isTicketGenerated={isTicketGenerated} />
          <TicketForm />
        </TicketContextProvider>
      </MainContainer>
    </div>
  );
}

export default App;
