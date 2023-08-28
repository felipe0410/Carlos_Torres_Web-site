"use client";
import { Box, Typography } from "@mui/material";
import FormFooter from "./formFooter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15%",
      }}
    >
      <Box sx={{ maxWidth: "800px" }}>
        <Typography
          sx={{
            color: "#205C96",
            textAlign: "center",
            fontFamily: "ClementePDai",
            fontSize: { xs: "14px", sm: "20", md: "30px", lg: "40px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          Queremos que seas parte de este gran proyecto, por eso nos interesa
          escuchar tus opiniones e inquietudes.{" "}
        </Typography>
      </Box>
      <Box width={{ md: "70%", lg: "45%" }} display={"flex"}>
        <Box
          id="containerFooter"
          sx={{
            zIndex: "2",
            width: "100%",
            display: "flex",
            placeContent: "center",
          }}
        >
          <FormFooter />
          <Box
            sx={{
              position: "absolute",
              left: { xs: "63%", lg: "63%" },
              height: { xs: "20vh", sm: "40vh", md: "70vh", lg: "auto" },
            }}
            component={"img"}
            src="/carlosFooter.svg"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            left: "0%",
            background: 'url("/backgraundFooter.svg")',
            backgroundRepeat: "no-repeat",
            zIndex: "1",
            backgroundSize: "100%",
            backgroundPosition: "bottom",
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              opacity: "0%",
              height: { xs: "20vh", sm: "40vh", md: "70vh", lg: "auto" },
            }}
            component={"img"}
            src="/carlosFooter.svg"
          />
          <Box
            sx={{
              background: "#1B4388",
              display: "flex",
              justifyContent: "space-evenly",
              padding: "15px",
              marginTop: "-10px",
            }}
          >
            <Box sx={{ color: "#FFF", display: "flex" }}>
              <InstagramIcon sx={{ width: "60px", height: "60px" }} />
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "ClementePDar",
                  fontSize: "40px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
              >
                CarlosTorresBoyaca
              </Typography>
            </Box>
            <Box sx={{ color: "#FFF", display: "flex" }}>
              <FacebookIcon sx={{ width: "60px", height: "60px" }} />
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "ClementePDar",
                  fontSize: "40px",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
              >
                Carlos Ernesto Torres Aguirre
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ zIndex: "3" }}>
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
