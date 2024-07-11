import React from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import { db, serverTimestamp } from "./firebase"; // Import serverTimestamp
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const onSubmit = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, "emails"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      dispatch(closeSendMessage());
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          {...register("to", { required: "To is required" })}
        />
        {errors.to && <p className="sendMail__error">{errors.to.message}</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register("subject", { required: "Subject is required" })}
        />
        {errors.subject && (
          <p className="sendMail__error">{errors.subject.message}</p>
        )}

        <input
          name="message"
          placeholder="Message"
          type="text"
          className="sendMail__message"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="sendMail__error">{errors.message.message}</p>
        )}

        <div className="sendMail__options">
          <Button type="submit" className="sendMail__send">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
