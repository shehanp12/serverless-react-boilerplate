import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

interface IProps {
  name?: string;
  handleChange?: (event: object) => void;
  label?: string;
  half?: boolean;
  autoFocus?: boolean;
  type?: string;
  handleShowPassword?: () => void;
}

const Input: React.FunctionComponent<IProps> = ({
  name,
  handleChange,
  label,
  half,
  autoFocus,
  type,
  handleShowPassword,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant="outlined"
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      InputProps={
        name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : undefined
      }
    />
  </Grid>
);

export default Input;
