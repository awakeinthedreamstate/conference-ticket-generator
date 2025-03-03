import styles from "./formheader.module.css";
import { useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TicketContext } from "../context/TicketContext";

export default function FormHeader() {
  const { attendeeBio } = useContext(TicketContext);
  // const [showTicketed, setShowTicketed] = useState(false);

  const mainTextTemplates = {
    welcomeText: `Your Journey to Coding Conf\n2025 Starts Here!`,
    ticketedText: `Congrats, <span>${attendeeBio.name}</span>!\nYour ticket is ready.`,
  };
  const subTextTemplates = {
    welcomeText: "Secure your spot at next year's biggest coding conference.",
    ticketedText: `We've emailed your ticket to\n<span>${attendeeBio.email}</span> and will send updates in\nthe run up to the event.`,
  };

  return (
    <AnimatePresence mode="wait">
      {attendeeBio.isTicketGenerated ? (
        <motion.div
          key="ticketed"
          className={styles.formHeaderTicket}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 20 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.h1
            id="welcome-ticket-main"
            aria-label="page header"
            key="ticketed-h1"
            initial={{ fontSize: "2.5rem" }}
            animate={{ fontSize: "2.8rem" }}
            dangerouslySetInnerHTML={{ __html: mainTextTemplates.ticketedText }}
          />
          <motion.p
            id="welcome-ticket-sub"
            key="ticketed-p"
            initial={{ fontSize: "1rem" }}
            animate={{ fontSize: "1.3rem" }}
            dangerouslySetInnerHTML={{ __html: subTextTemplates.ticketedText }}
          />
        </motion.div>
      ) : (
        <motion.div
          key="not-ticketed"
          className={styles.formHeaderNoTicket}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 1.3 } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 id="welcome-no-ticket-main">{mainTextTemplates.welcomeText}</h1>
          <p id="welcome-no-ticket-sub">{subTextTemplates.welcomeText}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
