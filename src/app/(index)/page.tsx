"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const theme = useTheme();
  const [searchIconColor, setSearchIconColor] = useState<string>("inherit");

  return (
    <Container className="w-full h-full flex flex-col py-10 gap-7">
      <Box component={"section"} className="flex items-center gap-10">
        <Typography variant="h6" className="grow">
          Usuario
        </Typography>
        <IconButton
          className="shadow shadow-gray-500"
          sx={{
            boxShadow: "0 1px 3px 0 rgba(107, 114, 128, 0.5)", // shadow + shadow-gray-500
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.5)",
            },
          }}
        >
          <Icon icon="game-icons:pc" />
        </IconButton>
        <Button startIcon={<Icon icon="game-icons:floor-hatch" />}>
          Cerrar sesión
        </Button>
      </Box>
      <Paper component={"section"} className="flex flex-col grow gap-10 p-10">
        <Box>
          <TextField
            onFocus={() => setSearchIconColor(theme.palette.primary.light)}
            onBlur={() => setSearchIconColor("inherit")}
            placeholder="Busqueda"
            slotProps={{
              input: {
                endAdornment: (
                  <Icon
                    color={searchIconColor}
                    fontSize={24}
                    icon="wpf:search"
                  />
                ),
              },
            }}
          />
        </Box>
        <Grid className="flex justify-start items-start grow">
          <Card
            component="article"
            className="w-75 h-55 flex flex-col justify-between p-4 border"
          >
            <CardContent sx={{ p: 0 }}>
              <Typography sx={{ mb: 2 }} variant="h6">
                Aventura
              </Typography>
              <Typography>
                Personajes: fulano, mengano, sutano, perengano
              </Typography>
            </CardContent>
            <CardActions className="gap-2">
              <Button variant="text" onClick={() => router.push("/personaje")}>
                Entrar
              </Button>
              <Button variant="text" color="error">
                Eliminar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Paper>
    </Container>
  );
}
