import styles from "./formheader.module.css";
import { useContext, useEffect, useState } from "react";
import { TicketContext } from "../context/TicketContext";

export default function FormHeader() {
  const { attendeeBio, animationTimer } = useContext(TicketContext);
  const [ticketView, setTicketView] = useState(false);
  const mainTextTemplates = {
    welcomeText: `Your Journey to Coding Conf\n2025 Starts Here!`,
    ticketedText: `Congrats, <span>${attendeeBio.name}</span>!\nYour ticket is ready.`,
  };
  const subTextTemplates = {
    welcomeText: "Secure your spot at next year's biggest coding conference.",
    ticketedText: `We've emailed your ticket to\n<span>${attendeeBio.email}</span> and will send updates in\nthe run up to the event.`,
  };

  useEffect(() => {
    if (attendeeBio.isTicketGenerated) {
      animationTimer(setTicketView, 1300);
    }
  }, [attendeeBio.isTicketGenerated]);

  return (
    <div
      // Add a ternary operator to conditionally apply the styles based on the ticketView state
      className={
        ticketView ? styles.formHeaderTicket : styles.formHeaderNoTicket
      }
    >
      {attendeeBio.isTicketGenerated ? (
        <h1
          dangerouslySetInnerHTML={{ __html: mainTextTemplates.ticketedText }}
        />
      ) : (
        <h1>{mainTextTemplates.welcomeText}</h1>
      )}
      {attendeeBio.isTicketGenerated ? (
        <p
          dangerouslySetInnerHTML={{ __html: subTextTemplates.ticketedText }}
        />
      ) : (
        <p>{subTextTemplates.welcomeText}</p>
      )}
    </div>
  );
}
