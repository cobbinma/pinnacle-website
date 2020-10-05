import React from "react";
import {
  AppBar,
  createStyles,
  IconButton,
  Theme,
  Toolbar,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

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

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Pinnacle Acoustic Consultants
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
};

export default Layout;
