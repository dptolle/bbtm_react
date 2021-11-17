import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  InputProps,
} from "@mui/material";

export interface FormTextInputProps extends InputProps {
  label: string;
  helperText?: string;
}

function FormTextInput({ label, helperText, ...props }: FormTextInputProps) {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">{label}</InputLabel>
      <Input {...props} id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">{helperText}</FormHelperText>
    </FormControl>
  );
}

export default FormTextInput;
