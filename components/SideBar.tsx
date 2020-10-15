import React from "react";
import {
  createStyles,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Page } from "./layout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
  })
);

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
      <List>
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {pages.map(getListItem)}
      </List>
    </div>
  );
};

export default SideBar;
