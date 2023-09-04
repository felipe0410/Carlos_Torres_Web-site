"use client";
import { Avatar, Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  // xs:string,sm:string,md:string,lg:string
  const button = (xs: string, sm: string, md: string, lg: string) => {
    return (
      <Link href="/quien-soy" passHref>
        <Button
          sx={{
            width: { xs: xs, sm: sm, md: md, lg: lg },
            marginTop: { xs: "20px", sm: "50px" },
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
              fontFamily: "ClementePDai",
              fontSize: { xs: "11px", sm: "18px", md: "25px", lg: "32px" },
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
              sx={{
                width: { xs: "7%", sm: "auto" },
                marginLeft: { xs: "5px", sm: "20px" },
                padding: { xs: "5px 10px", sm: "10px 20px" },
              }}
              component={"img"}
              src="/Click.svg"
            />
          </Typography>
        </Button>
      </Link>
    );
  };
  return (
    <main>
      <Box>
        {/* <Box sx={{ width: "100%" }} component={"img"} src="/background.png" /> */}
        <Box sx={{ background: "rgb(63 101 156 / 94%)", marginTop: "-1%" }}>
          <video
            style={{
              width: "100%",
              height: "100%",
              marginTop: "-1%",
              opacity: "40%",
            }}
            loop
            muted
            autoPlay
          >
            <source src="/videoBackground.mp4" type="video/mp4" />
          </video>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "100%",
              height: "38px",
              background: "#3F659C",
            }}
          />
          <Link
            href="#mi-biography"
            scroll={false}
            passHref
            style={{ position: "absolute", left: "40%" }}
            id="AvatarConatiner"
            onClick={() => {
              const target = document.querySelector("#mi-biography");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Avatar
              sx={{ minWidth: "23vw", height: "100%", background: "#fff" }}
              src="/Carlos Torres.svg"
            />
            <Box
              id="mi-biography"
              display={{ xs: "none", lg: "flex" }}
              sx={{ margin: "25px auto" }}
              component={"img"}
              src="/row.svg"
            />
          </Link>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            marginTop: "15%",
            background: 'url("/backgroundCircle.svg")',
            backgroundSize: "90%",
            backgroundPosition: "center",
            aspectRatio: "9/6",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography
            sx={{
              fontStyle: "italic",
              color: "#205C96",
              fontFamily: "ClementePDal",
              fontSize: { xs: "16px", sm: "25px", md: "35px", lg: "40px" },
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
                fontSize: { xs: "12px", sm: "20px", md: "25px", lg: "32px" },
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
          {button("70%", "65%", "65%", "56%")}
          <Box sx={{ display: "flex", width: "90%", margin: "0 auto" }}>
            <Box
              sx={{ width: { xs: "43%", md: "100%" }, height: "100%" }}
              component={"img"}
              src="/Carlos2.png"
            />
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
                  fontSize: { xs: "15px", sm: "27px", md: "40px", lg: "48px" },
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
                  fontSize: { xs: "13px", sm: "21px", md: "29px", lg: "36px" },
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
              {button("100%", "100%", "100%", "100%")}
            </Box>
          </Box>
        </Box>
      </Box>
    </main>
  );
}
