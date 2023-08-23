import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  const sectionsHeader = ["Inicio", "¿Quien soy?", "Mi Proyecto ", "Hablemos "];

  return (
    <Box width={"80%"} sx={{ margin: "20px auto" }}>
      <Box display={"flex"} sx={{ justifyContent: "space-around" }}>
        {sectionsHeader.map((section) => (
          <Box key={section}>
            <Button
              sx={{
                borderRadius: "40px",
                background: section === "Inicio" ? "#009ADA" : "",
                boxShadow:
                  section === "Inicio"
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
                {section}
              </Typography>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
