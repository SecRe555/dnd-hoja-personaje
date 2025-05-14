"use client";

import {
  AppBar as MuiAppBar,
  Button,
  Drawer as MuiDrawer,
  IconButton,
  Toolbar,
  Typography,
  styled,
  CSSObject,
  Theme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { systemTheme } from "@/app/theme";
import { useRouter } from "next/navigation";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

type NavOption = { icon: string; text: string };
const options: NavOption[] = [
  { icon: "game-icons:meeple-army", text: "Personajes" },
];

export default function LayoutAuth({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const router = useRouter();

  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <main className="w-dvw h-dvh flex flex-col">
      <AppBar position="sticky" className="">
        <Toolbar className="gap-4">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="mr-2"
            onClick={handleToggleDrawer}
          >
            {openDrawer ? (
              <Icon icon="game-icons:cross-mark" />
            ) : (
              <Icon icon="game-icons:hamburger-menu" />
            )}
          </IconButton>
          <Typography variant="h6" component="h1" className="px-5 grow">
            Hojas de personajes DnD
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            className="mr-2"
          >
            <Icon icon="game-icons:sundial" />
            {/* <Icon icon="game-icons:night-sky" /> */}
          </IconButton>
          <Button
            startIcon={<Icon icon="game-icons:return-arrow" />}
            onClick={() => router.push("/")}
          >
            Volver
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={openDrawer}>
        <Box sx={{ ...systemTheme.mixins.toolbar }} />
        <List>
          {options.map(({ icon, text }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton className="min-h-12 px-2 flex justify-start items-center">
                <ListItemIcon className="min-w-0 justify-center items-center ml-[-11px] mr-1">
                  <Icon icon={icon} fontSize={24} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </main>
  );
}
