import styles from "./ticketcard.module.css";
import { TicketContext } from "../context/TicketContext";
import { useContext, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TicketCard() {
  const { attendeeBio } = useContext(TicketContext);

  const randomFiveDigitNumber = Math.floor(10000 + Math.random() * 90000);

  return (
    <motion.div className={styles.card} id="card-area">
      <img
        className={styles.cardBackground}
        src="./assets/images/pattern-ticket.svg"
        alt="ticket"
      />
      <div className={styles.cardContent}>
        <div className={styles.titleDateVenue}>
          <img src="/assets/images/logo-mark.svg" alt="conference logo" />
          <span id="card-title">Coding Conf</span>
          <span id="conference-date">Jan 31, 2025 / Austin, TX</span>
        </div>
        <div className={styles.attendeeDetails}>
          <img
            id="card-photo"
            src={
              (attendeeBio.avatar && attendeeBio.avatar) ||
              "/assets/images/placeholder-avatar.png"
            }
            alt="attendee photo"
          />
          <span id="attendee-name">{attendeeBio.name}</span>
          <img src="/assets/images/icon-github.svg" alt="github logo" />
          <span id="attendee-git">{attendeeBio.github}</span>
          {/* <img src="/assets/images/icon-upload.svg" alt="upload icon" />
          <span>{attendeeBio.name}</span>
          <img src="/assets/images/icon-github.svg" alt="github logo" />
          <span>@mainman</span> */}
        </div>
        <div className={styles.ticketNumber}>
          <span>#{randomFiveDigitNumber}</span>
        </div>
      </div>
    </motion.div>
  );
}
