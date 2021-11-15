import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

interface TeamSelectionItemProps {
  name: string;
}

function TeamSelectionItem(props: TeamSelectionItemProps) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const { name } = props;
  return (
    <Link to="/team" style={{}}>
      <Stack
        direction={matches ? 'column-reverse' : 'row-reverse'}
        sx={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          transform: 'scale(1)',
          '&:hover': {
            transform: 'scale(1.1)',
          },
          gap: '1em'
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"Fruktur", cursive;',
          }}
        >
          {name}
        </Typography>
        <img
          style={{
            maxHeight: matches ? '150px' : '75px',
            alignSelf: 'center',
          }}
          src="bb-button.png"
          alt="Blood Bowl Button"
        ></img>
      </Stack>
    </Link>
  );
}

export default TeamSelectionItem;
