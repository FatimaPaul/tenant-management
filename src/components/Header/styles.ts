import type { SxProps, Theme } from "@mui/material/styles";
import { colors } from "../../theme/colors";

export const root: SxProps<Theme> = {
  px: 3,
  py: 2,
  bgcolor: "background.paper",
  boxShadow: 1,
  display: "flex",
  alignItems: "center",
  gap: 2,
  flexWrap: "wrap",
};

export const searchField: SxProps<Theme> = {
  ml: "auto",
  minWidth: 280,
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    height: "40px",
    width: "360px",
  },
};

export const sideIcons: SxProps<Theme> = {
  bgcolor: colors.iconBg,
  width: "40px",
  height: "40px",
  p: "8px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.blue,
};

export const searchIcon: SxProps<Theme> = {
  width: 20,
  height: 20,
};

export const spacer: SxProps<Theme> = {
  display: "none",
  flex: 1,
};

export const userBlock: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  gap: 1,
};

export const avatar: SxProps<Theme> = {
  borderRadius: "8px",
  width: "40px",
  height: "40px",
};
