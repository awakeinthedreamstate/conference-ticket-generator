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
    <motion.div
      className={styles.ticketForm}
      // key="ticket-form"
      // initial={{ opacity: 0, x: 0 }}
      // animate={{ opacity: 1, x: 0 }}
      // exit={{ opacity: 0, x: -50, transition: { delay: 5 } }}
      // transition={{ duration: 0.5, ease: "easeOut" }}
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
    </motion.div>
  );
}
