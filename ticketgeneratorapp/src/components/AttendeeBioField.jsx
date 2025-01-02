import "./attendeebiofield.module.css";
import styles from "./attendeebiofield.module.css";

export default function AttendeeBioField() {
  const alertMessage = {
    name: "Please enter your full name",
    email: "Please enter a valid email address",
  };
  const ICON_SVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"
      />
      <path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.004 10.462V7.596M8 5.569v-.042"
      />
    </svg>
  );

  return (
    <div>
      <div id="fullName" className={styles.field}>
        <p>Full Name</p>
        <input type="text" name="fullName" required />
        {/* {(invalidField && (
          <p className={styles.alert}>
            <i className={styles.icons}>{ICON_SVG}</i>
            <span>{alertMessage.name}</span>
          </p>
        )) ||
          null} */}
      </div>
      <div id="email" className={styles.field}>
        <p>Email Address</p>
        <input type="email" name="email" required />
        <p className={styles.alert}>
          <i className={styles.icons}>{ICON_SVG}</i>
          <span>{alertMessage.email}</span>
        </p>
      </div>
      <div className={styles.field}>
        <p>Github Username</p>
        <input type="text" name="github" />
        <span className={styles.spaceholder}></span>
      </div>
    </div>
  );
}
