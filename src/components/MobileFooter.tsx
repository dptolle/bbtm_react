import {
  Fab,
  AppBar,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ROUTE } from '../utils/routes';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';

function MobileFooter() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const history = useHistory();
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
        {matches ? undefined : (
          <>
          <Link
            to="#"
            onClick={() => {
              history.push(ROUTE.LOGIN);
            }}
          >
            <IconButton sx={{ color: 'white' }} aria-label="open drawer">
              <MenuIcon />
            </IconButton>
          </Link>
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
        )}
      </Toolbar>
    </AppBar>
  );
}

export default MobileFooter;
