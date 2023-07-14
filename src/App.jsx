import './components/navbar/estilosNav.css'
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Papel } from "./components/Papel";
import { Cards } from "./components/Card";
import { Navbar } from "./components/navbar/Navbar";
import { useState } from "react";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import MenuIcon from "@mui/icons-material/Menu";
import {
  NavLink,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { HomePage } from "./pages/Home";

export const App = () => {
  const [drawer, setdrawer] = useState(false);

  const OpenDrawer = () => {
    setdrawer(true);
  };

  const MenuNav = [
    {
      name: "Home",
      path: "/",
      icon: <InboxIcon />,
    },
    {
      name: "About",
      path: "/about",
      icon: <DraftsIcon />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <PermContactCalendarIcon />,
    },
  ];

  return (
    <Router>
      {/* <Papel /> */}
      {/* <Cards/> */}

      <AppBar position="static">
        <Toolbar sx={{alignItems:'center'}} >
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            News
          </Typography>
          <Box>
            <IconButton onClick={OpenDrawer} color="inherit" size="large">
              <MenuIcon
                sx={{
                  display: {
                    xs: "flex",
                    sm: "none",
                  },
                }}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            {MenuNav.map(({ name, path }, id) => (
              <NavLink
                key={id}
                to={path}
                className={({ isActive }) =>
                   isActive ? "activo " : ""
                }
              >
                {name}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={drawer}
        anchor="right"
        onClose={() => setdrawer(false)}
        sx={{
          display: {
            sm: "none",
          },
        }}
      >
        <Navbar MenuNav={MenuNav} setdrawer={setdrawer}  />
      </Drawer>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
