import { Box, Button, Paper, Typography } from "@mui/material";
import { styled } from "styled-components";

export const Papel = () => {
  const img = styled("img")({
    width: 200,
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        mt: 3,
        overflow: "hidden",
      }}
    >
      <img src="https://picsum.photos/300" alt="Imagen genial" />
      <Box sx={{ flexGrow: 1, display: "grid", gap: 3 }}>
        <Typography variant="h3">Product Name</Typography>
        <Typography variant="body1">Product description</Typography>
        <Button variant="contained" color="secondary">
          add card
        </Button>
      </Box>
      <Box component="p" sx={{ mr: 2 }}>
        $19.99
      </Box>
    </Paper>
  );
};
