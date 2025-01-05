import styles from "./attendeebiofield.module.css";

export default function AttendeeBioField({ register, errors }) {
  const ALERT_MESSAGE = {
    name: "Please enter your full name.",
    email: "Please enter a valid email address.",
    github: "Please enter your Github username.",
  };
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
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
    <div className={styles.attendeeBio}>
      <div id="fullName" className={styles.field}>
        <p>Full Name</p>
        <input
          {...register("fullName", { required: ALERT_MESSAGE.name })}
          type="text"
          className={errors.fullName && styles.invalidInput}
        />
        {errors.fullName && (
          <p className={styles.alert}>
            <i className={styles.icons}>{ICON_SVG}</i>
            <span>{errors.fullName.message}</span>
          </p>
        )}
      </div>
      <div id="email" className={styles.field}>
        <p>Email Address</p>
        <input
          type="text"
          {...register("email", {
            required: ALERT_MESSAGE.email,
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              if (!emailRegex.test(value)) {
                return "Please enter a valid email address";
              }
              return true;
            },
          })}
          placeholder="example@email.com"
          className={errors.email && styles.invalidInput}
        />
        {errors.email && (
          <p className={styles.alert}>
            <i className={styles.icons}>{ICON_SVG}</i>
            <span>{errors.email.message}</span>
          </p>
        )}
      </div>
      <div id="github" className={styles.field}>
        <p>Github Username</p>
        <input
          {...register("github", {
            required: ALERT_MESSAGE.github,
            pattern: { value: /^@.+/, message: "username must start with @" },
          })}
          type="text"
          placeholder="@yourusername"
          className={errors.github && styles.invalidInput}
        />
        {errors.github && (
          <p className={styles.alert}>
            <i className={styles.icons}>{ICON_SVG}</i>
            <span>{errors.github.message}</span>
          </p>
        )}
      </div>
    </div>
  );
}
