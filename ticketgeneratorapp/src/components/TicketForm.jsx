import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import AttendeeBioField from "./AttendeeBioField";
import UploadAvatar from "./UploadAvatar";
import styles from "./ticketform.module.css";
import { TicketContext } from "../context/TicketContext";
import { motion, AnimatePresence } from "framer-motion";

export default function TicketForm() {
  const { attendeeBio, setAttendeeBio } = useContext(TicketContext);
  const [isLoading, setIsLoading] = useState(false);

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
    <motion.div className={styles.ticketForm} id="form-area">
      <fieldset>
        <form id={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <UploadAvatar />
          <AttendeeBioField register={register} errors={errors} />
          <div id={styles.submitButton}>
            <button type="submit" aria-label="generate ticket">
              {isLoading ? (
                <div className={styles.loader}></div>
              ) : (
                "Generate Ticket"
              )}
            </button>
          </div>
        </form>
      </fieldset>
    </motion.div>
  );
}
