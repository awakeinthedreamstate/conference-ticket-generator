import { useForm } from "react-hook-form";
import { useContext } from "react";
import AttendeeBioField from "./AttendeeBioField";
import UploadAvatar from "./UploadAvatar";
import styles from "./ticketform.module.css";
import { TicketContext } from "../context/TicketContext";

export default function TicketForm() {
  const { attendeeBio, setAttendeeBio } = useContext(TicketContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const { fullName, email, github } = data;
    setAttendeeBio({
      ...attendeeBio,
      name: fullName,
      email: email,
      github: github,
    });
    console.log(attendeeBio);
  }
  return (
    <div id={styles.ticketForm}>
      <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <UploadAvatar />
        <AttendeeBioField register={register} errors={errors} />
        <div id={styles.submitButton}>
          <button type="submit">Generate My Ticket</button>
        </div>
      </form>
    </div>
  );
}
