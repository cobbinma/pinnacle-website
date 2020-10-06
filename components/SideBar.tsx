import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import DirectionsTransitIcon from "@material-ui/icons/DirectionsTransit";
import EmailIcon from "@material-ui/icons/Email";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

interface SideBarProps {
  toggleDrawer(
    open: boolean
  ): (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SideBar: React.FC<SideBarProps> = ({ toggleDrawer }) => {
  const classes = useStyles();

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Home", "About us", "Services", "Contact"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {(() => {
                switch (text) {
                  case "Home":
                    return <HomeIcon />;
                  case "About us":
                    return <PeopleIcon />;
                  case "Services":
                    return <DirectionsTransitIcon />;
                  case "Contact":
                    return <EmailIcon />;
                  default:
                }
              })()}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default SideBar;
