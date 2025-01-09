import styles from "./ticketcard.module.css";

export default function TicketCard() {
  return (
    <div className={styles.card}>
      <img src="./assets/images/pattern-ticket.svg" alt="ticket" />
    </div>
  );
}
