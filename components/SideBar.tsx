import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Page } from "./layout";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

interface SideBarProps {
  pages: Array<Page>;
  toggleDrawer(
    open: boolean
  ): (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const SideBar: React.FC<SideBarProps> = ({ toggleDrawer, pages }) => {
  const classes = useStyles();

  const getListItem = (page: Page) => {
    return (
      <ListItem button key={page.title} component="a" href={page.link}>
        <ListItemIcon>{page.icon}</ListItemIcon>
        <ListItemText primary={page.title} />
      </ListItem>
    );
  };

  return (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>{pages.map(getListItem)}</List>
    </div>
  );
};

export default SideBar;
