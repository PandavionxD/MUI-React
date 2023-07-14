import { Height } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { styled } from "styled-components";

export const Cards = () => {
  const Img = styled("img")({
    width: "100%",
    Height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    borderRadius: "12 12 0 0",
  });

  return (
    <Card
      sx={{ maxWidth: 300, mt: 3, borderRadius: "12 12 0 0" }}
      elevation={12}
    >
      <CardActionArea>
        <CardMedia>
          <Img src="https://picsum.photos/640/360" alt="Imagen variada" />
        </CardMedia>
        <CardContent>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            reiciendis laborum recusandae quos et. Placeat, ab ducimus
            accusantium atque ipsum aspernatur iure possimus nesciunt impedit,
            vero qui voluptate est amet.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained">Ver más</Button>
        <Button variant="outlined" color="error">
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};
