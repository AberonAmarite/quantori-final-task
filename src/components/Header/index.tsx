import Button from "@mui/material/Button";
import "./index.css";
import { ReactNode, useEffect, useState } from "react";
import { auth, getCurrentUser, logout } from "../../utils/auth";
import { Box, Stack, Typography } from "@mui/material";
import { User } from "@firebase/auth";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userState } from "../../store/userSlice";

interface Props {}
const Header = (): JSX.Element => {
  const email = useAppSelector(
    (state: { user: userState }) => state.user.email
  );

  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center">
      <Typography>{email}</Typography>
      <Button onClick={logout}>Logout</Button>
    </Stack>
  );
};

export default Header;