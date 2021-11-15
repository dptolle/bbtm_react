import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import { ROUTE } from '../utils/routes';
import MenuIcon from '@mui/icons-material/Menu';

export interface StandardHeaderProps {
  title: string;
}

function LargeHeader(props: StandardHeaderProps) {
  const { title } = props;
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

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
        {matches ? (
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
