"use client";
import { Box, Typography } from "@mui/material";
import FormFooter from "./formFooter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15%",
        background: 'url("/backgraundFooter.svg")',
      }}
    >
      <Box sx={{ maxWidth: "800px" }}>
        <Typography
          sx={{
            color: "#205C96",
            textAlign: "center",
            fontFamily: "ClementePDai",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Queremos que seas parte de este gran proyecto, por eso nos interesa
          escuchar tus opiniones e inquietudes.{" "}
        </Typography>
      </Box>
      <Box width={"45%"} display={"flex"}>
        <FormFooter />
        <Box
          sx={{ position: "absolute", left: "65%" }}
          component={"img"}
          src="/carlosFooter.svg"
        />
      </Box>
      <Box>
        <Typography
          align="center"
          sx={{
            color: "#205C96",
            textAlign: "center",
            fontFamily: "ClementePDar",
            fontSize: "40px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "normal",
            textShadow:
              "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
          }}
        >
          Siguenos en redes sociales
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
