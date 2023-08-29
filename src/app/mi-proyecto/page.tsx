import { Box, Grid, Typography } from "@mui/material";
import { arrayMyProjetc } from "./arrayProjet";

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
            display: "flex",
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
          src="/myProject/background.svg"
        />
      </Box>
      <Box
        sx={{
          background: 'url("/myProject/projetc.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
              fontSize: "48px",
              fontStyle: "italic",
              fontWeight: 900,
              lineHeight: "normal",
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
            marginTop: "30px",
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
        </Box>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
          <Box
            sx={{
              height: "40px",
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
              fontSize: "70px",
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
              height: "40px",
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
