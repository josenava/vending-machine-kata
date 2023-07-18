import { Button } from "@mui/material";
import { api } from "../api";
import { setBalance } from "../slices/UserSlice";
import { useDispatch } from "react-redux";

export const Refund = () => {
  const dispatch = useDispatch();
  const handleClick = async () => {
    const user = await api.refund();
    dispatch(setBalance(user.balance));
  };
  return (
    <Button variant="contained" onClick={handleClick}>
      I just want my money back, please
    </Button>
  );
};
