import { MenuItem, Typography } from '@mui/material';
import React from 'react';
import { logout } from '../utils/firebase';


function MainMenu() {
  return (
    <>
      <MenuItem onClick={logout}>
        <Typography>Logout</Typography>
      </MenuItem>
    </>
  );
}

export default MainMenu;
