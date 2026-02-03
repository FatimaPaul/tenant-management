import type { SxProps, Theme } from "@mui/material/styles";
import { colors } from "../../theme/colors";

export const root: SxProps<Theme> = {
  maxHeight: "75%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0,
  bgcolor: "#C7DBE540",
  margin: "25px",
  borderRadius: "32px",
  // height: "80vh",
};

export const headerText: SxProps<Theme> = {
  fontSize: "24px",
  fontWeight: 700,
  color: "primary.dark",
  bgcolor: colors.white,
  px: "24px",
  py: "5px",
  borderTopLeftRadius: "12px",
  borderTopRightRadius: "12px",
};

export const headerRow: SxProps<Theme> = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 0,
  marginBottom: 0,
};

export const headerActions: SxProps<Theme> = {
  pt: 0.5,
  display: "flex",
  alignItems: "center",
  gap: 2,
};

export const addMemberButton: SxProps<Theme> = {
  width: "129px",
  height: "30px",
  bgcolor: colors.blue,
  color: colors.white,
  borderRadius: "25px",
  marginBottom: "12px",
  textTransform: "none",
  fontWeight: 600,
  marginRight: "20px",
  "&:hover": {
    bgcolor: colors.blueDark,
  },
};

export const tabsWrapper: SxProps<Theme> = {
  width: "100%",
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
};

export const contentPaper: SxProps<Theme> = {
  maxHeight: "100%",
  bgcolor: colors.white,
  borderBottomLeftRadius: "20px",
  borderBottomRightRadius: "20px",
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  border: "none",
  boxShadow: "none",
  paddingLeft: 0,
  py: 1,
  overflow: "hidden",
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

export const tabsPaper: SxProps<Theme> = {
  borderRadius: 0,
  px: 0,
  overflow: "hidden",
  boxShadow: "none",
};

export const tabs: SxProps<Theme> = {
  minHeight: 48,
  "& .MuiTabs-flexContainer": {
    gap: 1,
  },
};

export const tab = (selected: boolean): SxProps<Theme> => ({
  fontSize: "90%",
  textTransform: "none",
  fontWeight: 500,
  minHeight: "45px",
  minWidth: "91px",
  border: `1px solid ${colors.borderLight}`,
  borderBottom: selected ? "0px" : "",
  borderTopLeftRadius: selected ? "10px" : "999px",
  borderBottomLeftRadius: selected ? "0px" : "999px",
  borderBottomRightRadius: selected ? "0px" : "999px",
  borderTopRightRadius: selected ? "10px" : "999px",
  mb: selected ? 0 : 1,
  background: selected
    ? `linear-gradient(-190deg, ${colors.gradientLight} 0%, ${colors.white} 100%)`
    : colors.white,
  color: colors.textDark,
  padding: "9px 16px",
  "&:hover": {
    background: selected
      ? `linear-gradient(-190deg, ${colors.gradientLight} 0%, ${colors.white} 100%)`
      : colors.hoverLightBlue,
  },
});

export const searchField: SxProps<Theme> = {
  px: 2,
  mt: 2,
  mb: 2,
  width: "90%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    height: "40px",
  },
};

export const searchIcon: SxProps<Theme> = {
  width: 15,
  height: 15,
};

export const tablePaper: SxProps<Theme> = {
  width: "90%",
  maxHeight: "100%",
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  borderRadius: "16px",
  boxShadow: 0,
  backgroundColor: "#F1F7F9",
};

export const tableContainer: SxProps<Theme> = {
  flex: 1,
  overflowY: "auto",
  my: "30",
  px: "3px",
  maxHeight: "100%",
  "& table": {
    borderCollapse: "separate",
    borderSpacing: "0px 12px",
  },

  "&::-webkit-scrollbar": {
    mt: "40px",
    // mb: "40px",
    px: 2,
    width: "10px",
    borderBottomLeftRadius: 0,
  },

  "&::-webkit-scrollbar-track": {
    mt: "59px",
    backgroundColor: "#F1F7F9",
    px: 2,
    borderRadius: "16px",
    borderBottomLeftRadius: 0,
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#C6DEE7",
    borderRadius: "16px",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#C6DEE7",
  },
};

export const tableHeaderRow: SxProps<Theme> = {
  "& th": {
    bgcolor: colors.tableHeaderBg,
    fontWeight: 600,
    padding: "10px 24px",
  },
};

export const tableRow = (index: number): SxProps<Theme> => ({
  cursor: "pointer",
  height: "40px",
  "& td": {
    backgroundColor: index % 2 === 0 ? colors.white : colors.tableRowAlt,
    padding: "10px 24px",
    borderBottom: "none",
    fontSize: "90%",
  },

  "& td:first-of-type": {
    borderTopLeftRadius: "48px",
    borderBottomLeftRadius: "48px",
  },

  "& td:last-of-type": {
    borderTopRightRadius: "48px",
    borderBottomRightRadius: "48px",
  },
});

export const status = (status: string): SxProps<Theme> => ({
  color: status == "ACTIVE" ? "#01B801" : "#FF4646",
});
