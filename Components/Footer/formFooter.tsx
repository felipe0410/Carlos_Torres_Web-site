"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Box,
  FormControl,
  InputBase,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const FormFooter = () => {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [spinner, setSpinner] = useState(false);
  const [data, setData] = useState<any>({ Name: "", Message: "" });
  const [inputs, setInputs] = useState<any>({ Name: false, Message: false });
  const [isChecked, setIsChecked] = useState(false);

  const fields = [
    {
      name: "Nombre",
      label: "Name",
      id: "Name",
      validation: (value: string) => value.length > 3,
      error: "Name is required.",
    },
    // { label: 'Email', id: 'Email', validation: (value: string) => (/\S+@\S+\.\S+/).test(value), error: 'Please enter a valid email address.' },
    // { label: 'Phone', id: 'Phone', validation: (value: string) => value.length > 8, error: 'Please enter a valid phone number.' },
  ];

  const sendEmailToSupport = async (e: any) => {
    e.preventDefault();
  };

  const handleChangee = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const setValidation = (isValid: boolean) => {
      setData((prevValues: any) => ({ ...prevValues, [name]: value }));
      if (isValid) {
        setInputs((inputs: any) => ({ ...inputs, [name]: isValid }));
      } else {
        setInputs((inputs: any) => ({ ...inputs, [name]: isValid }));
      }
    };
    if (name === "Message") {
      const isValid = value.length > 4;
      setValidation(isValid);
    } else {
      const isValid =
        fields.find((field) => field.label === name)?.validation(value) ??
        false;
      setValidation(isValid);
    }
  };

  const displayError = (field: { id: string | number }) => {
    return data[field.id].length === 0
      ? "none"
      : inputs[field.id]
      ? "none"
      : "block";
  };

  return (
    <FormControl
      id="FormControl"
      sx={{
        width: "112%",
        padding: { xs: "10px", sm: "20px" },
        marginBottom: { xs: "8px", sm: "30px" },
        borderRadius: { xs: "20px", sm: "40px" },
      }}
      style={{
        marginTop: "30px",
        background:
          "linear-gradient(180deg, #205C96 0%, rgba(32, 92, 150, 0.00) 100%)",
        boxShadow:
          "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {fields.map((field, i) => (
        <Box key={i * 10}>
          <Typography
            align="left"
            sx={{
              padding: { xs: "0 10px", sm: "10px" },
              color: "#FFF",
              fontFamily: "ClementePDai",
              fontSize: { xs: "12px", md: "30px" },
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              textAlign: "left",
              marginBottom: { xs: "2px", sm: "10px" },
            }}
          >
            {field.name}
          </Typography>
          <InputBase
            sx={{
              padding: "5px 20px",
              borderRadius: "50px",
              background: "#FFF",
              fontSize: { xs: "12px", md: "30px" },
              boxShadow:
                "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
            name={field.id}
            onChange={handleChangee}
            placeholder={"Juan Ochoa"}
            fullWidth
          />
          <Typography display={displayError(field)} color="error">
            {field.error}
          </Typography>
        </Box>
      ))}
      <Typography
        align="left"
        sx={{
          padding: { xs: "0 10px", sm: "10px" },
          color: "#FFF",
          fontFamily: "ClementePDai",
          fontSize: { xs: "12px", md: "30px" },
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "normal",
          textAlign: "left",
          marginTop: "5px",
        }}
      >
        Mensaje
      </Typography>

      <InputBase
        sx={{
          marginTop: { xs: "1%", sm: "5%" },
          padding: "10px 20px",
          borderRadius: "30px",
          background: "#FFF",
          fontSize: { xs: "12px", md: "30px" },
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
        name="Message"
        onChange={handleChangee}
        placeholder="Mensaje....."
        multiline
        rows={matchesSm ? 2 : 4}
        fullWidth
      />
      <Button
        onClick={sendEmailToSupport}
        disabled={
          Object.values(inputs).includes(false) === false ? false : true
        }
        variant="contained"
        sx={{
          marginTop: { xs: "10px", sm: "20px" },
          borderRadius: "10px",
          background: "#1C3449",
          boxShadow: "0px 24px 34px 0px rgba(32, 70, 100, 0.10)",
          width: "40%",
          padding: { xs: "0 10px", sm: "auto" },
          alignSelf: "center",
          fontSize: { xs: "12px", md: "30px" },
        }}
      >
        {spinner ? (
          <CircularProgress
            sx={{
              color: "#fff",
              maxWidth: "27px",
              maxHeight: "27px",
              width: "30px",
              height: "30px",
            }}
          />
        ) : (
          "Enviar"
        )}
      </Button>
    </FormControl>
  );
};

export default FormFooter;
