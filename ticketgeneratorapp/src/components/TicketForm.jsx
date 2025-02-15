import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import AttendeeBioField from "./AttendeeBioField";
import UploadAvatar from "./UploadAvatar";
import styles from "./ticketform.module.css";
import { TicketContext } from "../context/TicketContext";

export default function TicketForm() {
  const { attendeeBio, setAttendeeBio, animationTimer } =
    useContext(TicketContext);
  const [isLoading, setIsLoading] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (attendeeBio.isTicketGenerated) {
      animationTimer(setTransitioning, 1000);
    }
  }, [attendeeBio]);

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
    setIsLoading(true);
    setAttendeeBio({
      ...attendeeBio,
      name: fullName,
      email: email,
      github: github,
      isTicketGenerated: true,
    });
  }

  return (
    <div
      className={
        transitioning
          ? `${styles.ticketForm} ${styles.transitioning}`
          : styles.ticketForm
      }
    >
      <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <UploadAvatar />
        <AttendeeBioField register={register} errors={errors} />
        <div id={styles.submitButton}>
          <button type="submit">
            {isLoading ? (
              <div className={styles.loader}></div>
            ) : (
              "Generate Ticket"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
