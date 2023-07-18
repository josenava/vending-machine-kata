import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { api } from "../api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startSession } from "../slices/UserSlice";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleButtonClick = async () => {
    const loggedInUser = await api.login(userName);
    if (loggedInUser.id && loggedInUser.name) {
      dispatch(startSession(loggedInUser));
      navigate("/vending-machine");
    }
  };
  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <h1>Login</h1>
      <TextField
        id="filled-basic"
        label="Full name"
        variant="filled"
        onChange={handleTextInput}
      />
      <Button variant="contained" onClick={handleButtonClick}>
        Visit the vending machine
      </Button>
    </div>
  );
};
