"use client";
import { Box, Typography } from "@mui/material";
import FormFooter from "./formFooter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  return (
    <Box
      id="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: pathname === "/" ? "15%" : "0",
      }}
    >
      <Box sx={{ maxWidth: "800px" }}>
        <Typography
          sx={{
            display: pathname === "/" ? "flex" : "none",
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
      <Box width={"100%"} display={"flex"} flexDirection={"column"}>
        <Box
          id="containerFooter"
          sx={{
            zIndex: "2",
            width: "100%",
            placeContent: "end",
            alignItems: "flex-end",
            display: pathname === "/" ? "flex" : "none",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              marginBottom: { xs: "5%", sm: "10%" },
              width: { xs: "60%", sm: "auto" },
              marginLeft: { xs: "16%", sm: "auto" },
            }}
          >
            <FormFooter />
            <Box>
              <Typography
                align="center"
                sx={{
                  width: "115%",
                  color: "#205C96",
                  textAlign: "center",
                  fontFamily: "ClementePDar",
                  fontSize: { xs: "12px", md: "40px" },
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
          <Box
            sx={{
              width: { xs: "33%", sm: "33%" },
              height: "100%",
              zIndex: 2,
              marginRight: { xs: "", sm: "5%" },
            }}
          >
            <Box
              sx={{ width: "100%" }}
              component={"img"}
              src="/carlosFooter.svg"
            />
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            left: "0%",
            zIndex: "3",
          }}
        >
          <Box
            sx={{
              background: "#1B4388",
              display: "flex",
              justifyContent: "space-evenly",
              padding: "15px",
              marginTop: "-10px",
            }}
          >
            <Link
              href={"https://www.instagram.com/carlostorresaboyaca/"}
              style={{ color: "#FFF", display: "flex", textDecoration: "none" }}
            >
              <InstagramIcon
                sx={{
                  width: { xs: "30px", sm: "60px" },
                  height: { xs: "30px", sm: "60px" },
                }}
              />
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "ClementePDar",
                  fontSize: { xs: "12px", md: "40px" },
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
              >
                CarlosTorresBoyaca
              </Typography>
            </Link>
            <Link
              href={"https://www.facebook.com/carlos.e.aguirre.779"}
              style={{ color: "#FFF", display: "flex", textDecoration: "none" }}
            >
              <FacebookIcon
                sx={{
                  width: { xs: "30px", sm: "60px" },
                  height: { xs: "30px", sm: "60px" },
                  borderRadius: "30px",
                }}
              />
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "#FFF",
                  fontFamily: "ClementePDar",
                  fontSize: { xs: "12px", md: "40px" },
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginLeft: "10px",
                  alignSelf: "center",
                }}
              >
                Carlos Ernesto Torres Aguirre
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
