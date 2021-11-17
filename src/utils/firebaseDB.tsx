import { addDoc, collection, getDocs } from "firebase/firestore";
import { Team } from "../team-creation/Team-Creation-Main";
import { db } from "./firebase";

const getTeamTypes = async () => {
  const querySnapshot = await getDocs(collection(db, "teamType"));
  const names: { label: string; id: string }[] = [];
  querySnapshot.forEach((doc) =>
    names.push({
      label: doc.get("name"),
      id: doc.id,
    })
  );
  return names;
};

const getStadiumTypes = async () => {
  const querySnapshot = await getDocs(collection(db, "stadiumType"));
  const names: { label: string; id: string }[] = [];
  querySnapshot.forEach((doc) =>
    names.push({
      label: doc.get("ground"),
      id: doc.id,
    })
  );
  return names;
};

const addTeam = async (team: Team) => {
  try {
    return await addDoc(collection(db, "teams"), team);
  } catch (e) {
    throw e;
  }
};

export { getTeamTypes, getStadiumTypes, addTeam };
