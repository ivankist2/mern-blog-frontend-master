import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";

import styles from "./Login.module.scss";
import { fetchAuth } from "../../redux/slices/auth";

export const Login = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      email: 'Password@gmail.com',
      password: 'Password',
    },
    mode: 'onChange',
    // mode: 'all',
  });

  const onSubmit = (values) => {
    dispatch(fetchAuth(values));
  };

  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          type="email"
          {...register('email', { required: 'Enter email' })}
          fullWidth
        />
        <TextField
          className={styles.field}
          label="Password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          {...register('password', { required: 'Enter password' })}
          fullWidth
        />
        <Button type="submit" size="large" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </Paper>
  );
};
