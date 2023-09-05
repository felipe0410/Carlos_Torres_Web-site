import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Row = () => {
  return (
    <Box sx={{ background: "red" }}>
      <ArrowBackIosIcon sx={{ transform: "rotate(45deg)" }} />
    </Box>
  );
};

export default Row;
