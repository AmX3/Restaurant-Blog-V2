import React from "react";
import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
} from "@mui/material";

type Props = MUIButtonProps & {
  label?: string;
};

const Button = ({ label, ...props }) => {
  return (
    <MUIButton {...props} variant="outlined">
      {label}
    </MUIButton>
  );
};

export default Button;
