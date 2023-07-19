import { Button, FormGroup, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import { api } from "../api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startSession } from "../slices/UserSlice";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  name: string;
}

export const LoginPage = () => {
  const { handleSubmit, register, formState } = useForm<FormValues>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const { data: loggedInUser } = await api.login(formData.name);
    if (loggedInUser.id && loggedInUser.name) {
      dispatch(startSession(loggedInUser));
      navigate("/vending-machine");
    }
  };
  return (
    <form onSubmit={handleSubmit(_onSubmit)}>
      <FormGroup sx={{ p: 3 }}>
        <TextField
          label="Name"
          variant="outlined"
          required
          margin="dense"
          inputProps={{ ...register("name", { required: "true" }) }}
          error={Boolean(formState.errors?.name)}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          type="submit"
        >
          Submit
        </Button>
      </FormGroup>
    </form>
  );
};
