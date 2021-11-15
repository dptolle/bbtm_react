import React from 'react';
import { AppBar, IconButton, Menu, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { getUser } from '../utils/firebase';
import MainMenu from './MainMenu';

export interface StandardHeaderProps {
  title: string;
}

function LargeHeader(props: StandardHeaderProps) {
  const { title } = props;
  const [anchorEl, setAnchorEl] = React.useState<
    EventTarget & HTMLButtonElement
    | null
  >(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const user = getUser();

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar
        sx={{
          minHeight: '50px',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '1em',
        }}
      >
        {matches && user ? (
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
      </>
        ) : undefined}
        <Typography
          variant="h1"
          sx={{
            margin: '0 auto',
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default LargeHeader;
