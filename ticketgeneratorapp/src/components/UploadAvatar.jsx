import { useReducer, useRef, useState } from "react";
import styles from "./uploadavatar.module.css";

export default function UploadAvatar() {
  const MAX_FILE_SIZE = 500 * 1024;
  const DEFAULT_ALERT = "Upload your photo (JPG or PNG, max size: 500KB).";
  const [image, setImage] = useState(null);
  const [alertMessage, setAlertMessage] = useState(DEFAULT_ALERT);
  const avatarUploadInputRef = useRef(null);

  function handleAvatarUpload(e) {
    const avatar = e.target.files[0];
    const reader = new FileReader();
    if (!avatar) {
      setImage(null);
      return;
    }
    if (!avatar.type.startsWith("image/")) {
      setImage(null);
      setAlertMessage("The uploaded file is not an image.");
      return;
    }
    if (avatar.size > MAX_FILE_SIZE) {
      setImage(null);
      setAlertMessage("File too large. Please upload a photo under 500KB.");
      return;
    }
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(avatar);
    setAlertMessage(avatar.name);
    console.log("onChange triggered");
  }

  function handleRemoveImage() {
    setImage(null);
    setAlertMessage(DEFAULT_ALERT);
    avatarUploadInputRef.current.value = "";
  }

  return (
    <div id="uploadSection">
      <p>Upload Avatar</p>
      <div id="avatarUploadArea">
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={handleAvatarUpload}
          ref={avatarUploadInputRef}
        />
        {!image ? (
          <div>
            <img src="/assets/images/icon-upload.svg" alt="upload icon" />
            <p>Drag and drop or click to upload</p>
          </div>
        ) : (
          <div>
            <img src={image} alt="user avatar" />
            <button
              onClick={() => {
                handleRemoveImage;
              }}
            >
              Remove Image
            </button>
            <button
              type="button"
              onClick={() => avatarUploadInputRef.current.click()}
            >
              Change Image
            </button>
          </div>
        )}
      </div>
      <p className={styles.alert}>
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