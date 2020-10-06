import React from "react";
import {
  AppBar,
  createStyles,
  IconButton,
  Theme,
  Toolbar,
  makeStyles,
  Typography,
  Drawer,
  Button,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideBar from "./SideBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  const classes = useStyles();

  const [showDrawer, setShowDrawer] = React.useState<boolean>(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setShowDrawer(open);
  };

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            Pinnacle Acoustic Consultants
          </Typography>
          <Hidden smDown>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Contact</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer open={showDrawer} onClose={toggleDrawer(false)}>
        <SideBar toggleDrawer={toggleDrawer} />
      </Drawer>
      {children}
    </div>
  );
};

export default Layout;
