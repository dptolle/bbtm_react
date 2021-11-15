import { Button, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { ROUTE } from '../utils/routes';


const LoginBox: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history  = useHistory();

  return (
    <Paper
      sx={{ padding: '1em', width:'80%' }}
      component="form"
      variant="elevation"
    >
      <Stack>
        <TextField
          margin="dense"
          required
          type="email"
          id="email"
          label="Email"
          variant="standard"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          required
          type="password"
          id="password"
          label="Password"
          variant="standard"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          sx={{ marginTop: '1em' }}
          size="medium"
          variant="contained"
          color="primary"
          onClick={() => {
            history.push(ROUTE.TEAM_SELECTOB);
          }}
        >
          <Typography variant="button">Log In</Typography>
        </Button>
      </Stack>
    </Paper>
  );
};

export default LoginBox;
