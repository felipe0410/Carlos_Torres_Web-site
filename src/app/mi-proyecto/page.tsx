"use client";
import { Box, Grid, Typography } from "@mui/material";
import { arrayMyProjetc } from "./arrayProjet";
import Link from "next/link";

const MyProject = () => {
  return (
    <Box>
      <Box>
        <Typography
          style={{
            WebkitBackgroundClip: "3px #fff",
          }}
          sx={{
            position: "absolute",
            display: { xs: "none", lg: "flex" },
            width: "100%",
            height: "60%",
            justifyContent: "center",
            alignItems: "center",
            color: "#3F659C",
            fontFamily: "ClementePDai",
            fontSize: "96px",
            fontStyle: "italic",
            fontWeight: 400,
            lineHeight: "normal",
            textShadow:
              "3px 3px 0 #fff, -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 1px 0 #fff",
          }}
        >
          Mi Proyecto
        </Typography>
        <Box
          sx={{ width: "100%" }}
          component={"img"}
          src="https://firebasestorage.googleapis.com/v0/b/carlostorres-3eed5.appspot.com/o/myProjetc.svg?alt=media&token=d48b7af5-9e26-4391-a87d-64358b6e4efa"
        />
      </Box>
      <Box
        sx={{
          background: 'url("/myProject/projetc.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: { xs: "contain", md: "120% 120%" },
          backgroundPosition: { xs: "50% 29%", md: "bottom" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "40px",
            background: "#3F659C",
            marginTop: "-6px",
          }}
        />
        <Box>
          <Typography
            align="center"
            sx={{
              textAlignLast: "center",
              color: "#205C96",
              textAlign: "justify",
              fontFamily: "ClementePDai",
              fontSize: { xs: "14px", sm: "48px" },
              fontStyle: "italic",
              fontWeight: 900,
              lineHeight: "normal",
              marginTop: "5%",
            }}
          >
            VISION BOYACÁ SE MUEVE
          </Typography>
        </Box>
        <Box
          sx={{
            padding: "30px",
            margin: "0 auto",
            width: "60%",
            marginTop: { xs: "10px", sm: "30px" },
            borderRadius: "40px",
            background: "rgba(255, 255, 255, 0.60)",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Typography
            sx={{
              color: "#071F37",
              textAlign: "justify",
              fontFamily: "ClementePDai",
              fontSize: { xs: "12px", sm: "20px", md: "25px", lg: "32px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Mi sueño es ser parte de una instancia Departamental donde pueda
            escuchar y representar las voces de nuestra comunidad. Imagino un
            Boyacá que brille por sus avances en infraestructura, agricultura,
            turismo y bienestar social. Creo firmemente que, con nuestro
            potencial y las maravillas que tenemos, ¡Boyacá tiene todo para ser
            uno de los lugares más prósperos de Colombia!
          </Typography>
          <Link
            href="#propuestas"
            scroll={false}
            passHref
            onClick={() => {
              const target = document.querySelector("#propuestas");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Box
              display={{ xs: "none", lg: "flex" }}
              sx={{ margin: "25px auto" }}
              component={"img"}
              src="/myProject/row.svg"
            />
          </Link>
        </Box>
        <Box
          display={"flex"}
          sx={{ alignItems: "center", marginTop: { xs: "5%", sm: "0" } }}
        >
          <Box
            id="propuestas"
            sx={{
              height: { xs: "20px", sm: "40px" },
              width: "100%",
              borderRadius: "0px 20px 20px 0px",
              background: "#3F659C",
            }}
          />
          <Typography
            sx={{
              color: "#205C96",
              textAlign: "center",
              fontFamily: "ClementePDai",
              fontSize: { xs: "16px", sm: "70px" },
              fontStyle: "italic",
              fontWeight: 900,
              lineHeight: "normal",
              margin: "10px 20px",
              textShadow:
                "3px 3px 0 #fff, -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 1px 0 #fff",
            }}
          >
            PROPUESTAS
          </Typography>
          <Box
            sx={{
              height: { xs: "20px", sm: "40px" },
              width: "100%",
              borderRadius: "20px 0px 0px 20px",
              background: "#3F659C",
            }}
          />
        </Box>
        <Grid sx={{ padding: "2%" }} container spacing={2}>
          {arrayMyProjetc.map((item, index) => (
            <Grid key={index} item xs={12} md={6}>
              <Typography
                sx={{
                  padding: "2%",
                  color: "#071F37",
                  textAlign: "justify",
                  fontFamily: "ClementePDai",
                  fontSize: { xs: "11px", lg: "24px" },
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
                gutterBottom
              >
                {item}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MyProject;
