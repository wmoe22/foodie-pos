import { useAppSelector } from "@/store/hooks";
import { Home, ReceiptLong } from "@mui/icons-material";
import CategoryIcon from "@mui/icons-material/Category";
import ClassIcon from "@mui/icons-material/Class";
import EggIcon from "@mui/icons-material/Egg";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsIcon from "@mui/icons-material/Settings";
import TableBarIcon from "@mui/icons-material/TableBar";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
  const router = useRouter();
  const { theme } = useAppSelector((state) => state.app);
  return (
    <Box
      sx={{
        minWidth: 250,
        backgroundColor: theme === "light" ? "success.main" : "primary.dark",
        minHeight: "100%",
      }}
    >
      <List sx={{ p: 0 }}>
        {sidebarMenuItems.slice(0, 9).map((item) => (
          <Link
            key={item.id}
            href={item.route}
            style={{
              textDecoration: "none",
              color: "red",
            }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color:
                      router.pathname === item.route
                        ? "error.light"
                        : "info.main",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    color:
                      router.pathname === item.route
                        ? "error.light"
                        : "info.main",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider
        variant={"middle"}
        sx={{ backgroundColor: "secondary.main", mt: 2 }}
      />
      <List>
        {sidebarMenuItems.slice(-1).map((item) => (
          <Link
            key={item.id}
            href={item.route}
            style={{ textDecoration: "none", color: "#313131" }}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon
                  sx={{
                    color:
                      router.pathname === item.route
                        ? "error.light"
                        : "info.main",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    color:
                      router.pathname === item.route
                        ? "error.light"
                        : "info.main",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;

export const sidebarMenuItems = [
  {
    id: 1,
    label: "Orders",
    icon: <LocalMallIcon />,
    route: "/backoffice/orders",
  },
  {
    id: 2,
    label: "Menu Categories",
    icon: <CategoryIcon />,
    route: "/backoffice/menu-categories",
  },
  {
    id: 3,
    label: "Menus",
    icon: <LocalDiningIcon />,
    route: "/backoffice/menus",
  },
  {
    id: 4,
    label: "Addon Categories",
    icon: <ClassIcon />,
    route: "/backoffice/addon-categories",
  },
  {
    id: 5,
    label: "Addons",
    icon: <EggIcon />,
    route: "/backoffice/addons",
  },
  {
    id: 6,
    label: "Tables",
    icon: <TableBarIcon />,
    route: "/backoffice/tables",
  },
  {
    id: 7,
    label: "Locations",
    icon: <LocationOnIcon />,
    route: "/backoffice/locations",
  },
  {
    id: 8,
    label: "Home",
    icon: <Home />,
    route: "/",
  },
  {
    id: 9,
    label: "Order App",
    icon: <ReceiptLong />,
    route: `/order?tableId=1`,
  },
  {
    id: 10,
    label: "Settings",
    icon: <SettingsIcon />,
    route: "/backoffice/settings",
  },
];
