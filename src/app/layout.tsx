"use client";
import "./../../app.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../Components/Header/Header";
import { Box, CircularProgress } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Carlos Torres",
//   description: "Carlos Torres",
// };
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Controla el estado de carga
  const [isLoading, setIsLoading] = useState(true);

  // Simula un retraso de carga de 2 segundos (ajusta esto según tus necesidades)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Limpia el temporizador en el desmontaje del componente
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en">
      <body style={{ margin: "0" }}>
        {isLoading ? (
          <Box
            sx={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress sx={{ width: "40vw", height: "20vw" }} />
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                position: "fixed",
                width: "100%",
                background: "#3F659C",
                zIndex: 4,
              }}
              id="Content Header"
            >
              <Header />
            </Box>
            <Box id="container children" sx={{ paddingTop: "6%" }}>
              {children}
            </Box>
            <Footer />
          </Box>
        )}
      </body>
    </html>
  );
}
