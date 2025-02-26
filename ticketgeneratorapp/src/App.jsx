import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        <AnimatePresence mode="wait">
          {attendeeBio.isTicketGenerated ? (
            <motion.div
              className="motionDiv"
              key="ticket-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 5, ease: "easeOut" }}
            >
              <TicketCard />
            </motion.div>
          ) : (
            <motion.div
              className="motionDiv"
              key="ticket-form"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50, transition: { delay: 1 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <TicketForm />
            </motion.div>
          )}
        </AnimatePresence>
      </MainContainer>
    </div>
  );
}

export default App;
