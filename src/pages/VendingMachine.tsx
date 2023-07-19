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
  const [products, setProducts] = useState<IProduct[][]>([]);

  useEffect(() => {
    if (!user.id) {
      navigate("/");
    }
    api.getProducts().then(({ data }) => {
      setProducts(data);
    });
  }, [user.id, navigate]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Products products={products} />
      </Grid>
      <Grid item xs={4}>
        <UserInfo name={user.name} />
        <CreditSelector user={user} />
        <BalanceDisplay quantity={user.balance} />
        <Refund user={user} />
      </Grid>
    </Grid>
  );
};
