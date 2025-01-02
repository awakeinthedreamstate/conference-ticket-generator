import AttendeeBioField from "./AttendeeBioField";
import UploadAvatar from "./UploadAvatar";
import styles from "./ticketform.module.css";

export default function TicketForm() {
  return (
    <div id={styles.ticketForm}>
      <form id="attendeeForm">
        <UploadAvatar />
        <AttendeeBioField />
      </form>
    </div>
  );
}
