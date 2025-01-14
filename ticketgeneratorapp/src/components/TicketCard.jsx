import styles from "./ticketcard.module.css";
import { TicketContext } from "../context/TicketContext";
import { useContext } from "react";

export default function TicketCard() {
  const { attendeeBio } = useContext(TicketContext);
  const randomFiveDigitNumber = Math.floor(10000 + Math.random() * 90000);
  return (
    <div className={styles.card}>
      <img
        className={styles.cardBackground}
        src="./assets/images/pattern-ticket.svg"
        alt="ticket"
      />
      <div className={styles.cardContent}>
        <div className={styles.titleDateVenue}>
          <img src="/assets/images/logo-mark.svg" alt="conference logo" />
          <span>Coding Conf</span>
          <span>Jan 31, 2025 / Austin, TX</span>
        </div>
        <div className={styles.attendeeDetails}>
          <img
            src={
              (attendeeBio.avatar && attendeeBio.avatar) ||
              "/assets/images/placeholder-avatar.png"
            }
            alt="attendee avatar"
          />
          <span>{attendeeBio.name}</span>
          <img src="/assets/images/icon-github.svg" alt="github logo" />
          <span>{attendeeBio.github}</span>
          {/* <img src="/assets/images/icon-upload.svg" alt="upload icon" />
          <span>{attendeeBio.name}</span>
          <img src="/assets/images/icon-github.svg" alt="github logo" />
          <span>@mainman</span> */}
        </div>
        <div className={styles.ticketNumber}>
          <span>#{randomFiveDigitNumber}</span>
        </div>
      </div>
    </div>
  );
}
