import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Header = () => {
  const sectionsHeader = [
    { name: "Inicio", patch: "/" },
    { name: "¿Quien soy?", patch: "/quien-soy" },
    { name: "Mi Proyecto", patch: "/mi-proyecto" },
    { name: "Hablemos", patch: "/hablemos" },
  ];

  return (
    <Box width={"80%"} sx={{ margin: "20px auto", background: "#3F659C" }}>
      <Box display={"flex"} sx={{ justifyContent: "space-around" }}>
        {sectionsHeader.map((section) => (
          <Box key={section.name}>
            <Button
              sx={{
                borderRadius: "40px",
                background: section.name === "Inicio" ? "#009ADA" : "",
                boxShadow:
                  section.name === "Inicio"
                    ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                    : "",
                padding: "5px 20px",
              }}
            >
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: "ClementePDai",
                  fontSize: "30px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "0em",
                  textAlign: "left",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#FFF",
                    fontFamily: "ClementePDai",
                    fontSize: "30px",
                    fontWeight: 400,
                    lineHeight: "36px",
                    letterSpacing: "0em",
                    textAlign: "left",
                  }}
                  href={section.patch}
                >
                  {section.name}
                </Link>
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
