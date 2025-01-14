import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import AttendeeBioField from "./AttendeeBioField";
import UploadAvatar from "./UploadAvatar";
import styles from "./ticketform.module.css";
import { TicketContext } from "../context/TicketContext";

export default function TicketForm() {
  const { attendeeBio, setAttendeeBio } = useContext(TicketContext);
  const [submitTransition, setSubmitTransition] = useState({
    transitioning: false,
    loading: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // useEffect(() => {
  //   console.log(attendeeBio);
  // }, [attendeeBio]);

  function onSubmit(data) {
    const { fullName, email, github } = data;
    setSubmitTransition({ transitioning: true, loading: true });
    setTimeout(() => {
      setAttendeeBio({
        ...attendeeBio,
        name: fullName,
        email: email,
        github: github,
        isTicketGenerated: true,
      });
      setSubmitTransition({ ...submitTransition, transitioning: false });
    }, 1000);
  }
  return (
    <div id={styles.ticketForm}>
      <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <UploadAvatar />
        <AttendeeBioField register={register} errors={errors} />
        <div id={styles.submitButton}>
          <button type="submit">
            {submitTransition.loading ? (
              <div class={styles.loader}></div>
            ) : (
              "Generate Ticket"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
