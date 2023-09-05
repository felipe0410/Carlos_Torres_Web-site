import { Box, Typography } from "@mui/material";
import CarouselComponent from "./carouselMyProject";

const AboutMe = () => {
  const study = (title1: string, contenc: string) => {
    return (
      <Box>
        <Typography
          sx={{
            color: "#071F37",
            fontFamily: "ClementePDai",
            fontSize: { xs: "10px", lg: "20px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "20px",
            textShadow:
              "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
          }}
        >
          {title1}
        </Typography>
        <Typography
          sx={{
            color: "#071F37",
            fontFamily: "ClementePDai",
            fontSize: { xs: "10px", lg: "16px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {contenc}
        </Typography>
      </Box>
    );
  };

  const textLogros = (content: string) => {
    return (
      <Box marginY={"20px"}>
        <Typography
          sx={{
            color: "#071F37",
            textAlign: "justify",
            fontFamily: "ClementePDai",
            fontSize: { xs: "11px", lg: "20px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
          }}
        >
          {content}
        </Typography>
      </Box>
    );
  };
  return (
    <Box>
      <Box
        id="background index"
        style={{
          backgroundRepeat: "no-repeat",
        }}
        sx={{
          background: {
            xs: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(63, 101, 156, 0.8))`,
            lg: "none",
          },
          backgroundImage: {
            xs: 'url("/About Me/aboutMeBackground.svg")',
            lg: 'url("/About Me/Group 24.svg")',
          },
          padding: "7%",
          marginLeft: "auto",
          backgroundSize: { xs: "140%", sm: "120%", lg: "100%" },
          backgroundPosition: { xs: "auto", sm: "19% 30%" },
        }}
      >
        <Box
          sx={{
            borderRadius: "40px",
            background: "rgba(63, 101, 156, 0.27)",
            boxshadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: { xs: "15px 35px", lg: "40px 75px" },
            maxWidth: { xs: "70%", lg: "60%" },
            marginLeft: "auto",
          }}
        >
          <Typography
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              display: "flex",
              color: "#071F37",
              textAlign: "justify",
              fontFamily: "ClementePDai",
              fontSize: { xs: "14px", lg: "36px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
              marginBottom: "15px",
              textShadow:
                "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
            }}
          >
            TE CUENTO UN POCO DE MI VIDA{" "}
            <Box sx={{ width: "15%" }}>
              <Box sx={{ width: "100%" }} component={"img"} src="/TREE.svg" />
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "#071F37",
              textAlign: "justify",
              fontFamily: "ClementePDai",
              fontSize: { xs: "11px", lg: "16px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            Soy originario de Icononzo, Tolima, donde nací hace 48 años. Mi papá
            era el jefe de zona para el INCORA por aquel entonces, cuando aún se
            realizaba una auténtica reforma agraria. Pero cuando tenía solo 4
            añitos, nos mudamos a Aquitania, específicamente a la vereda del
            cajón, justo al lado del hermoso lago de Tota. <br />
            <br />
            Desde 1980, mis padres empezaron un pequeño pero acogedor negocio
            turístico. Con el lago como escenario, ofrecíamos servicios de
            restaurante, hospedaje y paseos en lancha. Crecí entre botes y
            platos de comida, ayudando en la cocina, sirviendo a los visitantes
            y hasta manejando lanchas. Mientras tanto, papá, después de dejar el
            INCORA, empezó a cultivar cebollas, transformándose en un destacado
            empresario agropecuario. Y así, desde pequeño, aprendí de la
            importancia del trabajo duro y de la pasión por lo que uno hace,
            siempre de la mano de mis padres.
            <br />
            <br />
            Estudié en el colegio Ramón Ignacio Avella de Aquitania y más tarde
            en el Integrado de Sogamoso. Me formé en administración
            agropecuaria, tecnología agrícola y hasta en derecho. Pero más allá
            de los títulos, lo que siempre he valorado es la enseñanza de mis
            abuelos y padres: el respeto, la humildad, la responsabilidad y,
            sobre todo, el amor por nuestra tierra y por la gente.
            <br />
            <br />
            La comunidad de Aquitania me aprecia porque siempre he sido el
            mismo, sin importar los cargos o las circunstancias. Valoro la
            igualdad y la dignidad en cada uno de nosotros, y siempre tengo
            presente mis raíces humildes. Mis padres, originarios de las veredas
            de Suse y Sisvaca, comenzaron de la nada, y con esfuerzo y
            dedicación, construyeron un legado en el sector turístico y
            agropecuario. Siempre seré agradecido con la comunidad trabajadora
            de Aquitania, ya que sin su esfuerzo, nuestro municipio no brillaría
            como lo hace hoy.
          </Typography>
        </Box>
        <Box
          sx={{
            borderRadius: "40px",
            background: "rgba(63, 101, 156, 0.27)",
            boxshadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            padding: { xs: "15px 35px", lg: "40px 75px" },
            maxWidth: { xs: "70%", lg: "60%" },
            marginLeft: "auto",
            marginTop: "40px",
          }}
        >
          <Box>
            <Typography
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
                display: "flex",
                color: "#071F37",
                fontFamily: "ClementePDai",
                fontSize: { xs: "14px", lg: "36px" },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginBottom: "15px",
                textShadow:
                  "1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff",
              }}
            >
              FORMACION ACADÉMICA
              <Box sx={{ width: "15%" }}>
                <Box
                  sx={{ width: "100%" }}
                  component={"img"}
                  src="/pencil.svg"
                />
              </Box>
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Box sx={{ marginRight: "30px" }}>
              {study(
                "ESPECIALIZACIONES",
                "Gobierno y gestión pública territorial/ Universidad Javeriana - Bogotá 2012 Gerencia de la pequeña y mediana empresa/ Universidad Pedagógica y Tecnológica de Colombia - Tunja 2003"
              )}
            </Box>
            <Box>
              {study(
                "PREGRADOS",
                "Administrador de empresas agropecuarias/ Universidad Santo Tomas - Bucaramanga 2000 Derecho y ciencias políticas/ Universidad de Boyacá - Sogamoso 2021"
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ background: "#3F659C", width: "100%", height: "40px" }} />
      <Box
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "initial",
        }}
        sx={{
          background: {
            xs: 'url("/About Me/backgroundResponsive.svg")',
            sm: 'url("/About Me/backgraund.svg")',
          },
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          // paddingBottom: "50%",
        }}
      >
        <Typography
          sx={{
            color: "#071F37",
            textAlign: "center",
            fontFamily: "ClementePDai",
            fontSize: { xs: "14px", lg: "48px" },
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            marginBottom: "30px",
            textShadow:
              "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 1px 0 #fff",
            paddingTop: "5%",
          }}
        >
          MI GESTION Y LOGROS EN LA ALCALDIA DE AQUITANIA
        </Typography>
        <Box
          sx={{
            placeContent: "center",
            margin: "10px auto",
            width: "80%",
            display: "flex",
            borderRadius: "40px",
            background: "rgba(25, 103, 179, 0.16)",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Box sx={{ padding: "3%", width: { xs: "40%", sm: "40%" } }}>
            {textLogros(
              "1. 100 viviendas gratuitas, 77 viviendas rurales, se llevó el servicio de gas natural, infraestructura representada en aulas múltiples (2), centro de integración ciudadana, Restaurantes escolares (2), construcción de placas huella en varios sectores de alta necesidad (Hatolaguna, Salvial, Ahirico, Sisvaca, Maravilla, Mombita); equipamiento municipal Motoniveladora, Volqueta, vehículo compactador de basura; Programas sociales de inclusión, creación del comparendo ambiental."
            )}
            {textLogros(
              "2. Nominado al premio mejores gobernadores y alcaldes periodo 2011 – 2015 en la categoría 10.000 a 20.000 habitantes."
            )}
            {textLogros(
              "3. Condecorado por la ANSPE como el mejor alcalde del año 2012 en la superación de la pobreza extrema."
            )}
          </Box>
          <Box sx={{ padding: "3%", width: "40%" }}>
            {textLogros(
              "4. Condecorado por la secretaria de salud de Boyacá por ser el único municipio del departamento que adelanto el programa de atención integral para la población con diversidad funcional."
            )}
            {textLogros("5. El cariño de la gente de mi pueblo")}
            {textLogros(
              "6. Mi Nombre, el de mi esposa, mi hija, mis padres y el de toda mi familia limpia, salimos con la frente en alto."
            )}
          </Box>
        </Box>
        <Box height={"100%"} sx={{ paddingBottom: "20%", paddingTop: "20%" }}>
          <Box
            id="CarouselComponent"
            sx={{
              border: "6px solid #009ADA",
              background: "#3F659C",
              padding: "5% 0",
            }}
          >
            <CarouselComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
