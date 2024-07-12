import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { IconButton, Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "emails"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setEmails(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="blue" selected />
        <Section Icon={People} title="Social" color="#1a73e8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      {/* <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            time={timestamp}
          />
        ))}
      </div> */}
      <div className="emailList__list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            key={id}
            id={id}
            title={to}
            subject={subject}
            description={message}
            // time={new Date(timestamp?.seconds * 1000).toLocaleTimeString()} // Formatting timestamp
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
