import React from "react";
import "./EmailRow.css";
import { IconButton, Checkbox } from "@mui/material";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";

function EmailRow({ id, title, subject, description, time }) {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div className="emailRow__title">{title}</div>
      <div className="emailRow__message">
        <h4>{subject}</h4>
        <span className="emailRow__description">{description}</span>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
}

export default EmailRow;
