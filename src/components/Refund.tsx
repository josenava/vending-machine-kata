import { Button } from "@mui/material";
import { api } from "../api";
import { endSession } from "../slices/UserSlice";
import { useDispatch } from "react-redux";
import { User } from "../types";

export const Refund = ({ user }: { user: User }) => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    await api.refund(user.id);
    dispatch(endSession());
  };
  return (
    <Button variant="contained" onClick={handleClick}>
      I just want my money back, please
    </Button>
  );
};
