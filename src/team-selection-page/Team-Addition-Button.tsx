import { Fab, Stack, Typography } from '@mui/material';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';

function TeamAdditionButton() {
  return (
    <Stack
      sx={{
        alignSelf: 'center',
        transform: 'scale(1.5)',
        '&:hover': {
          transform: 'scale(1.7)',
        },
        alignItems: 'center'
      }}
    >
      <Fab
        color="primary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      <Typography variant="h5">Add Team</Typography>
    </Stack>
  );
}

export default TeamAdditionButton;
