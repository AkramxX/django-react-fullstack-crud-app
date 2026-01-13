import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import ShortMenu from './ShortMenu';
import logo from '../../assets/Logo.png';
import IconButton from '@mui/material/IconButton';


const drawerWidth = 240;
const shortDrawerWidth = 80;

export default function Navbar({content }) {


const [isCollapsed, setIsCollapsed] = useState(false)
const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <IconButton sx={{marginRight: '30px' , color: 'white' }} onClick={toggleCollapse}>
                    {isCollapsed ? <MenuIcon /> : <MenuOpenIcon /> }
                </IconButton>    
                <img src={logo} alt="Logo" width="10%" />
            </Toolbar>
        </AppBar>
        <Drawer
            variant="permanent"
            sx={{
            width:  isCollapsed ? shortDrawerWidth : drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: isCollapsed ? shortDrawerWidth : drawerWidth, boxSizing: 'border-box' },
            }}
        >
        <Toolbar />

        {isCollapsed ? <ShortMenu /> : <Menu />}
            
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
         {content}
      </Box>
    </Box>
  );
}
