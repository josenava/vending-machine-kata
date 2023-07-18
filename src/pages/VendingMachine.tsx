import { Grid } from "@mui/material";
import { CreditSelector } from "../components/CreditSelector";
import { Products } from "../components/Product";
import { Refund } from "../components/Refund";
import { UserInfo } from "../components/UserInfo";
import { BalanceDisplay } from "../components/BalanceDisplay";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IProduct } from "../types";
import { api } from "../api";
import { useNavigate } from "react-router";

export const VendingMachine = () => {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  if (!user.id) {
    navigate("/");
  }
  const [products, setProducts] = useState<IProduct[][]>([]);

  useEffect(() => {
    api.getProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Products products={products} />
      </Grid>
      <Grid item xs={4}>
        <UserInfo name={user.name} />
        <CreditSelector />
        <BalanceDisplay quantity={user.balance} />
        <Refund />
      </Grid>
    </Grid>
  );
};
