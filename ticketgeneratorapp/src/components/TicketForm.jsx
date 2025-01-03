import { useForm } from "react-hook-form";
import AttendeeBioField from "./AttendeeBioField";
import UploadAvatar from "./UploadAvatar";
import styles from "./ticketform.module.css";

export default function TicketForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <div id={styles.ticketForm}>
      <form id="attendeeForm" onSubmit={handleSubmit(onSubmit)}>
        <UploadAvatar />
        <AttendeeBioField register={register} errors={errors} />
        <div id={styles.submitButton}>
          <button type="submit">Generate Ticket</button>
        </div>
      </form>
    </div>
  );
}
