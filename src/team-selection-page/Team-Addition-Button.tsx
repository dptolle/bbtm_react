import { Fab, Stack } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ROUTE } from '../utils/routes';
import { useHistory } from 'react-router';

function TeamAdditionButton() {
  const history = useHistory();
  return (
    <Stack
      sx={{
        paddingBottom: '3em',
        alignSelf: 'center',
      }}
      spacing={3}
    >
      <Fab
        color="primary"
        aria-label="add"
        sx={{
          transform: 'scale(1)',
          '&:hover': {
            transform: 'scale(1.2)',
          },
        }}
        onClick={ () => history.push(ROUTE.TEAM_CREATION)}
      >
        <AddIcon />
      </Fab>
    </Stack>
  );
}

export default TeamAdditionButton;
