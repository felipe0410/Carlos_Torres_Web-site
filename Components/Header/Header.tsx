"use client";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const sectionsHeader = [
    { name: "Inicio", patch: "/" },
    { name: "¿Quien soy?", patch: "/quien-soy" },
    { name: "Mi Proyecto", patch: "/mi-proyecto" },
    { name: "Hablemos", patch: "/#footer" },
  ];

  return (
    <Box
      width={"95%"}
      sx={{
        margin: { xs: "3px auto ", sm: "7px auto" },
        background: "#3F659C",
      }}
    >
      <Box
        display={"flex"}
        sx={{ justifyContent: { xs: "center", lg: "space-between" } }}
      >
        <Link href={"/"}>
          <Box
            display={{ xs: "none", lg: "block" }}
            component={"img"}
            src="/logoHeader.svg"
          />
        </Link>
        <Box
          display={"flex"}
          sx={{ alignItems: "center", marginRight: { xs: "0", lg: "5%" } }}
        >
          {sectionsHeader.map((section) => (
            <Box key={section.name}>
              <Button
                sx={{
                  borderRadius: "40px",
                  background: section.patch === pathname ? "#009ADA" : "",
                  boxShadow:
                    section.patch === pathname
                      ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                      : "",
                  padding: { xs: "0px 10px", sm: "5px 20px" },
                }}
              >
                <Typography
                  sx={{
                    color: "#FFF",
                    fontFamily: "ClementePDai",
                    fontSize: {
                      xs: "12px",
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
