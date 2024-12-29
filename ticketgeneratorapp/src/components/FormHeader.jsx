import styles from "./formheader.module.css";

export default function FormHeader({ isTicketGenerated }) {
  const mainTextTemplates = {
    welcomeText: `Your Journey to Coding Conf\n2025 Starts Here!`,
    ticketedText: "Congrats John Doe! Your icket is ready.",
  };
  const subTextTemplates = {
    welcomeText: "Secure your spot at next year's biggest coding conference.",
    ticketedText: "Secure your spot at next year's biggest coding conference.",
  };

  return (
    <div className={styles.formHeader}>
      <h1>
        {isTicketGenerated
          ? mainTextTemplates.ticketedText
          : mainTextTemplates.welcomeText}
      </h1>
      <p>
        {isTicketGenerated
          ? subTextTemplates.ticketedText
          : subTextTemplates.welcomeText}
      </p>
    </div>
  );
}
