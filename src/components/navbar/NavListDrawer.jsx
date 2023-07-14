import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

export const NavListDrawer = ({MenuNav,setdrawer}) => {
  
  const cambiarDrawer = ()=>{
    setdrawer(false)
  }
  
  
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 280,
        // bgcolor: "primary.main",
        minHeight: "100vh",
        // color: "white",
      }}
    >
      <List>
      {
        MenuNav.map(menu=>(
        <ListItem disablePadding key={menu.name} >
          <ListItemButton component={Link} to={menu.path}   >
            {menu.icon}
            <ListItemText sx={{ ml: 2 }} primary={menu.name}  onClick={cambiarDrawer}  ></ListItemText>
          </ListItemButton>
          <Divider />
        </ListItem>
        ))
      }

      </List>
      
    </Box>
  );
};
