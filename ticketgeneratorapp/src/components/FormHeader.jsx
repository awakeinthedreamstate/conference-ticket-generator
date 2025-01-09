import styles from "./formheader.module.css";
import { useContext } from "react";
import { TicketContext } from "../context/TicketContext";

export default function FormHeader({ isTicketGenerated }) {
  const { attendeeBio } = useContext(TicketContext);
  const mainTextTemplates = {
    welcomeText: `Your Journey to Coding Conf\n2025 Starts Here!`,
    ticketedText: `Congrats, <span>${attendeeBio.name}</span>!\nYour ticket is ready.`,
  };
  const subTextTemplates = {
    welcomeText: "Secure your spot at next year's biggest coding conference.",
    ticketedText:
      "We've emailed your ticket to\nyour email and will send updates in\nthe run up to the event.",
  };

  return (
    <div className={styles.formHeaderTicket}>
      <h1
        dangerouslySetInnerHTML={{ __html: mainTextTemplates.ticketedText }}
      />
      <p>
        {isTicketGenerated
          ? subTextTemplates.ticketedText
          : subTextTemplates.welcomeText}
      </p>
    </div>
  );
}
