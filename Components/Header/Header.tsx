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
    <Box width={"95%"} sx={{ margin: "20px auto", background: "#3F659C" }}>
      <Box
        display={"flex"}
        sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
      >
        <Box>
          <Box
            display={{ xs: "none", lg: "block" }}
            component={"img"}
            src="/logoHeader.svg"
          />
        </Box>
        <Box display={"flex"} sx={{ alignItems: "center" }}>
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
                    fontSize: {
                      xs: "14px",
                      sm: "20px",
                      md: "25px",
                      lg: "30px",
                    },
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
    </Box>
  );
};

export default Header;
