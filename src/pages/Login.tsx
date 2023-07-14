import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router";

export const LoginPage = () => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/vending-machine');
    }
    return (
        <div>
            <h1>Login</h1>
            <TextField id="filled-basic" label="Full name" variant="filled" />
            <Button variant="contained" onClick={handleButtonClick}>Visit the vending machine</Button>
        </div>
    );
}