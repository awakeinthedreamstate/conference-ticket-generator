import styles from "./apptitle.module.css";

export default function AppTitle() {
  return (
    <div className={`container ${styles.appTitle}`} role="header">
      <img src="/assets/images/logo-mark.svg" alt="conference logo" />
      <span>Coding Conf</span>
    </div>
  );
}
