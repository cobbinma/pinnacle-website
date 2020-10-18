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
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import DirectionsTransitIcon from "@material-ui/icons/DirectionsTransit";
import EmailIcon from "@material-ui/icons/Email";
import Link from "next/link";

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
    logo: {
      maxHeight: 60,
    },
  })
);

export interface Page {
  title: string;
  link: string;
  icon: React.ReactNode;
}

const pages: Array<Page> = [
  { title: "Home", link: "/", icon: <HomeIcon /> },
  { title: "About", link: "/about", icon: <PeopleIcon /> },
  {
    title: "Services",
    link: "/services",
    icon: <DirectionsTransitIcon />,
  },
  { title: "Contact", link: "/contact", icon: <EmailIcon /> },
];

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
            {pages.map((page) => {
              return (
                <Link key={page.title} href={page.link} passHref>
                  <Button color="inherit" href={page.link}>
                    {page.title}
                  </Button>
                </Link>
              );
            })}
            <img
              className={classes.logo}
              src="images/logo-white.png"
              alt="logo"
            />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer open={showDrawer} onClose={toggleDrawer(false)}>
        <SideBar toggleDrawer={toggleDrawer} pages={pages} />
      </Drawer>
      {children}
    </div>
  );
};

export default Layout;
