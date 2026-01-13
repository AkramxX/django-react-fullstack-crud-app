import * as React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddBoxIcon from "@mui/icons-material/AddBox";

export default function Menu() {
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleClick = () => {
    setOpen(!open);
  };

  const handleCountryFilter = (country) => {
    navigate(`/?country=${country}`);
  };

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Football clubs
          </ListSubheader>
        }
      >
        <ListItemButton
          onClick={handleClick}
          component={Link}
          to="/"
          selected={currentPath === "/"}
        >
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="All clubs" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleCountryFilter("England")}
            >
              <ListItemIcon>
                <DashboardCustomizeIcon />
              </ListItemIcon>
              <ListItemText primary="England" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleCountryFilter("France")}
            >
              <ListItemIcon>
                <DashboardCustomizeIcon />
              </ListItemIcon>
              <ListItemText primary="France" />
            </ListItemButton>

            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => handleCountryFilter("Netherlands")}
            >
              <ListItemIcon>
                <DashboardCustomizeIcon />
              </ListItemIcon>
              <ListItemText primary="Netherlands" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Creating Records
          </ListSubheader>
        }
      >
        <ListItemButton
          component={Link}
          to="/create"
          selected={currentPath === "/create"}
        >
          <ListItemIcon>
            <AddBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Create club" />
        </ListItemButton>
      </List>
    </>
  );
}
