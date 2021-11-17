import {
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Container,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import FormTextInput from "../common/Form-Text-Input";
import { addTeam, getStadiumTypes, getTeamTypes } from "../utils/firebaseDB";
import { ROUTE } from "../utils/routes";

export interface Team {
  type: string;
  coach: string;
  name: string;
  stadium: {
    name: string;
    type: string;
  };
}

function TeamCreationMain() {
  const [teamType, setTeamType] = useState("");
  const [teamTypes, setTeamTypes] = useState<{ label: string; id: string }[]>(
    []
  );
  const [stadiumTypes, setStadiumTypes] = useState<
    { label: string; id: string }[]
  >([]);
  const [stadiumType, setStadiumType] = useState("");
  const [stadiumName, setStadiumName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [coach, setCoach] = useState("");
  const history = useHistory();

  useEffect(() => {
    getTeamTypes().then((tt) => {
      setTeamTypes(tt);
    });

    getStadiumTypes().then((st) => {
      setStadiumTypes(st);
    });
  }, []);

  const handleTeamCreation = () => {
    const team: Team = {
      type: teamType,
      coach: coach,
      name: teamName,
      stadium: {
        name: stadiumName,
        type: stadiumType,
      },
    };

    addTeam(team)
      .then(() => history.push(ROUTE.TEAM))
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Container
      sx={{
        height: "100%",
      }}
    >
      <Paper sx={{ p: "2em", marginTop: "1em" }}>
        <form>
          <Stack spacing={4}>
            <FormControl>
              <InputLabel id="team-type-label">Team Type</InputLabel>
              <Select
                required
                labelId="team-type-label"
                id="team-type-select"
                value={teamType}
                label="Team Type"
                onChange={(event) => setTeamType(event.target.value)}
              >
                {teamTypes.map((t) => {
                  return (
                    <MenuItem key={t.id} value={t.id}>
                      {t.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormTextInput
              required
              label="Team Name"
              onChange={(event) => setTeamName(event.target.value)}
            ></FormTextInput>
            <FormTextInput
              required
              label="Coach Name"
              onChange={(event) => setCoach(event.target.value)}
            ></FormTextInput>
            <FormControl>
              <InputLabel id="stadium-type-label">Stadium Type</InputLabel>
              <Select
                required
                labelId="stadium-type-label"
                id="stadium-type-select"
                value={stadiumType}
                label="Stadium Type"
                onChange={(event) => setStadiumType(event.target.value)}
              >
                {stadiumTypes.map((t) => {
                  return (
                    <MenuItem key={t.id} value={t.id}>
                      {t.label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormTextInput
              required
              label="Stadium Name"
              onChange={(event) => setStadiumName(event.target.value)}
            ></FormTextInput>
            <Button variant="contained" onClick={handleTeamCreation}>
              <Typography>Create Team</Typography>
            </Button>
          </Stack>
        </form>
      </Paper>
    </Container>
  );
}

export default TeamCreationMain;
