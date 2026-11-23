import { STATUS_BAR_HEIGHT } from "./footer";

export const ACTIVITY_BAR_WIDTH = 48;
export const SOURCE_URL =
  "https://github.com/noelp2500/NoelVSCodeResumePublicVersion";

export const sidebarPalettes = {
  dark: {
    background: "#181818",
    border: "#2b2b2b",
    inactiveForeground: "#868686",
    activeForeground: "#d7d7d7",
    activeBorder: "#0078d4",
    divider: "#2b2b2b",
  },
  light: {
    background: "#f8f8f8",
    border: "#e5e5e5",
    inactiveForeground: "#616161",
    activeForeground: "#1f1f1f",
    activeBorder: "#005fb8",
    divider: "#e5e5e5",
  },
};

type SidebarPalette = typeof sidebarPalettes.dark;

export const sidebarSx = (c: SidebarPalette) => ({
  height: `calc(100vh - ${STATUS_BAR_HEIGHT}px)`,
  width: ACTIVITY_BAR_WIDTH,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: c.background,
  borderRight: `1px solid ${c.border}`,
});

export const sidebarItemSx = (c: SidebarPalette, active = false) => ({
  height: ACTIVITY_BAR_WIDTH,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 24,
  cursor: "pointer",
  color: active ? c.activeForeground : c.inactiveForeground,
  boxShadow: active ? `inset 2px 0 0 ${c.activeBorder}` : "none",
  WebkitTapHighlightColor: "transparent",
  "&:hover": { color: c.activeForeground },
  "& svg": { fontSize: 24 },
});

export const sidebarDividerSx = (c: SidebarPalette) => ({
  mx: 1.5,
  my: 0.5,
  borderColor: c.divider,
});
