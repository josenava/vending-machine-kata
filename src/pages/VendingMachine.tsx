import { Grid } from "@mui/material";
import { CreditSelector } from "../components/CreditSelector";
import { Products } from "../components/Product";
import { Refund } from "../components/Refund";
import { UserInfo } from "../components/UserInfo";

export const VendingMachine = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
                <Products />
            </Grid>
            <Grid item xs={4}>
                <UserInfo id="b44577c5-e7b4-4686-b0b1-7d77ba595424" fullName="M.Rajoy"/>
                <CreditSelector/>
                <Refund/>
            </Grid>
        </Grid>
    );
}