import {
  Fab,
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
  Menu,
} from '@mui/material';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ROUTE } from '../utils/routes';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { getUser } from '../utils/firebase';
import MainMenu from './MainMenu';

function MobileFooter() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const user = getUser();
const [anchorEl, setAnchorEl] = React.useState<
  (EventTarget & HTMLButtonElement) | null
>(null);
const open = Boolean(anchorEl);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
      setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <AppBar
      component="footer"
      position="fixed"
      color="secondary"
      sx={{ top: 'auto', bottom: 0 }}
    >
      <Toolbar
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: '1em',
        }}
      >
        {!matches && user ? (
          <>
            <IconButton
              sx={{ color: 'white' }}
              aria-label="Open Menu"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MainMenu></MainMenu>
            </Menu>
            <Fab
              sx={{
                position: 'absolute',
                zIndex: 1,
                top: -30,
                left: 0,
                right: 0,
                margin: '0 auto',
              }}
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          </>
        ) : undefined}
      </Toolbar>
    </AppBar>
  );
}

export default MobileFooter;
