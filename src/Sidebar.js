import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import { Duo, ExpandMore, Person, Phone } from "@mui/icons-material";
import { IconButton } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        className="sidebar_compose"
        startIcon={<CreateIcon fontSize="large" />}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={54} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOption Icon={ExpandMore} title="More" number={54} />

      <div className="sidebar__footer">
        <IconButton>
          <Person />
        </IconButton>
        <IconButton>
          <Duo />
        </IconButton>
        <IconButton>
          <Phone />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
