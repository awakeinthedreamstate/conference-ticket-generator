import { useRef, useState, useContext } from "react";
import styles from "./uploadavatar.module.css";
import { TicketContext } from "../context/TicketContext";

export default function UploadAvatar() {
  const MAX_FILE_SIZE = 500 * 1024;
  const DEFAULT_ALERT = "Upload your photo (JPG or PNG, max size: 500KB).";
  const { attendeeBio, setAttendeeBio } = useContext(TicketContext);
  const [alertMessage, setAlertMessage] = useState(DEFAULT_ALERT);
  const [errorState, setErrorState] = useState(false);
  const avatarUploadInputRef = useRef(null);

  function handleAvatarUpload(e) {
    const avatar = e.target.files[0];
    const reader = new FileReader();
    if (!avatar) {
      setAttendeeBio({ ...attendeeBio, avatar: null });
      return;
    }
    if (!avatar.type.startsWith("image/")) {
      setAttendeeBio({ ...attendeeBio, avatar: null });
      setAlertMessage("The uploaded file is not an image.");
      setErrorState(true);
      return;
    }
    if (avatar.size > MAX_FILE_SIZE) {
      setAttendeeBio({ ...attendeeBio, avatar: null });
      setAlertMessage("File too large. Please upload a photo under 500KB.");
      setErrorState(true);
      return;
    }
    reader.onloadend = () => {
      setAttendeeBio({ ...attendeeBio, avatar: reader.result });
    };
    reader.readAsDataURL(avatar);
    setAlertMessage(avatar.name);
    setErrorState(false);
  }

  function handleRemoveAvatar() {
    setAttendeeBio({ ...attendeeBio, avatar: null });
    setAlertMessage(DEFAULT_ALERT);
    avatarUploadInputRef.current.value = "";
  }

  return (
    <div id={styles.uploadSection}>
      <label aria-label="Upload your photo">Upload Avatar</label>
      <div
        id={styles.avatarUploadArea}
        className={
          errorState ? styles.uploadAreaInvalidHalo : styles.uploadAreaValidHalo
        }
      >
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleAvatarUpload}
          style={attendeeBio.avatar ? { zIndex: -1 } : { zIndex: 2 }}
          ref={avatarUploadInputRef}
          aria-describedby="upload-alert"
        />
        {!attendeeBio.avatar ? (
          <div id={styles.noAvatar}>
            <img src="/assets/images/icon-upload.svg" alt="upload icon" />
            <p>Drag and drop or click to upload</p>
          </div>
        ) : (
          <div id={styles.yesAvatar}>
            <img src={attendeeBio.avatar} alt="user avatar" />
            <button
              type="button"
              onClick={() => {
                handleRemoveAvatar();
              }}
            >
              Remove image
            </button>
            <button
              type="button"
              onClick={() => {
                avatarUploadInputRef.current.click();
              }}
            >
              Change image
            </button>
          </div>
        )}
      </div>
      <p
        id="upload-alert"
        className={errorState ? styles.errorState : styles.alert}
      >
        <i>
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
        </i>
        <span>{alertMessage}</span>
      </p>
    </div>
  );
}
