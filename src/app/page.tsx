import { Avatar, Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box>
        <Box sx={{ width: "100%" }} component={"img"} src="/background.png" />

        <Box sx={{ marginTop: "-0.5%", display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "100%",
              height: "38px",
              background: "#3F659C",
            }}
          />
          <Box sx={{ position: "absolute", left: "40%" }} id="AvatarConatiner">
            <Avatar
              sx={{ minWidth: "318px", height: "100%", background: "#fff" }}
              src="/Carlos Torres.svg"
            />
            <Box
              sx={{ display: "flex", margin: "25px auto" }}
              component={"img"}
              src="/row.svg"
            />
          </Box>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "15%",
            background: 'url("/backgroundCircle.svg")',
            backgroundSize: "133%",
            backgroundPosition: "50% 70%",
            aspectRatio: "1/1",
          }}
        >
          <Typography
            sx={{
              color: "#205C96",
              fontFamily: "ClementePDal",
              fontSize: "40px",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            <span style={{ color: "#071F37" }}>¡Hola! Soy</span>
            {" Carlos"}
          </Typography>
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
                fontSize: "32px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Alcual diputado en la asamblea de Boyacá, tuve el honor de ser
              alcalde del hermoso municipo de Aquitania. Soy agricultor,
              empresario del sector turistico y lo más importante, padre,
              esposo, hijo, hermano y un gran amigo.
            </Typography>
          </Box>
          <Button
            sx={{
              marginTop: "50px",
              borderRadius: "40px",
              background: "rgba(245, 237, 70, 0.83)",
              boxshadow:
                "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                paddingLeft: "20px",
                color: "#071F37",
                textAlign: "justify",
                fontFamily: "ClementePDaj",
                fontSize: "32px",
                fontStyle: "italic",
                fontWeight: 400,
                lineHeight: "normal",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              CONOCE MI BIOGRAFÍA AQUÍ
              <Box
                sx={{ marginLeft: "20px", padding: "10px 20px" }}
                component={"img"}
                src="/Click.svg"
              />
            </Typography>
          </Button>
          <Box sx={{ display: "flex", width: "90%", margin: "0 auto" }}>
            <Box component={"img"} src="/Carlos2.png" />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                sx={{
                  color: "#205C96",
                  textAlign: "justify",
                  fontFamily: "ClementePDap",
                  fontSize: "48px",
                  fontStyle: "italic",
                  fontWeight: 900,
                  lineHeight: "normal",
                  textShadow:
                    "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
                }}
              >
                VISION BOYACÁ SE MUEVE
              </Typography>
              <Typography
                sx={{
                  color: "#071F37",
                  textAlign: "justify",
                  fontFamily: "ClementePDag",
                  fontSize: "36px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Mi sueño es ser parte de una instancia Departamental donde pueda
                escuchar y representar las voces de nuestra comunidad. Imagino
                un Boyacá que brille por sus avances en infraestructura,
                agricultura, turismo y bienestar social. Creo firmemente que,
                con nuestro potencial y las maravillas que tenemos, ¡Boyacá
                tiene todo para ser uno de los lugares más prósperos de
                Colombia!
              </Typography>
              <Button
                sx={{
                  borderRadius: "40px",
                  background: "rgba(245, 237, 70, 0.83)",
                  boxshadow:
                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
              >
                <Typography
                  sx={{
                    paddingLeft: "20px",
                    color: "#071F37",
                    textAlign: "justify",
                    fontFamily: "ClementePDaj",
                    fontSize: "32px",
                    fontStyle: "italic",
                    fontWeight: 400,
                    lineHeight: "normal",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  CONOCE MIS PROPUESTAS AQUÍ
                  <Box
                    sx={{ marginLeft: "20px", padding: "10px 20px" }}
                    component={"img"}
                    src="/Click.svg"
                  />
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
