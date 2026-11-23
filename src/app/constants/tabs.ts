export const TAB_BAR_HEIGHT = 35;
export const TAB_SCROLLBAR_SIZE = 3;

export const tabPalettes = {
  dark: {
    editorBackground: "#1f1f1f",
    barBackground: "#181818",
    border: "#2b2b2b",
    inactiveBackground: "#181818",
    inactiveForeground: "#9d9d9d",
    activeBackground: "#1f1f1f",
    activeForeground: "#ffffff",
    activeBorderTop: "#0078d4",
    hoverBackground: "#1f1f1f",
    closeHover: "rgba(90, 93, 94, 0.31)",
    fileIcon: "#519aba",
    scrollbar: "rgba(121, 121, 121, 0.4)",
    scrollbarHover: "rgba(100, 100, 100, 0.7)",
  },
  light: {
    editorBackground: "#ffffff",
    barBackground: "#f8f8f8",
    border: "#e5e5e5",
    inactiveBackground: "#f8f8f8",
    inactiveForeground: "#868686",
    activeBackground: "#ffffff",
    activeForeground: "#3b3b3b",
    activeBorderTop: "#005fb8",
    hoverBackground: "#ffffff",
    closeHover: "rgba(184, 184, 184, 0.31)",
    fileIcon: "#519aba",
    scrollbar: "rgba(100, 100, 100, 0.4)",
    scrollbarHover: "rgba(100, 100, 100, 0.7)",
  },
};

type TabPalette = typeof tabPalettes.dark;

export const tabBarSx = (c: TabPalette) => ({
  display: "flex",
  height: TAB_BAR_HEIGHT,
  overflowX: "auto",
  overflowY: "hidden",
  backgroundColor: c.barBackground,
  boxShadow: `inset 0 -1px 0 ${c.border}`,
  scrollbarWidth: "thin",
  scrollbarColor: "transparent transparent",
  "&:hover": { scrollbarColor: `${c.scrollbar} transparent` },
  "&::-webkit-scrollbar": { height: TAB_SCROLLBAR_SIZE },
  "&::-webkit-scrollbar-track": { background: "transparent" },
  "&::-webkit-scrollbar-thumb": { background: "transparent", borderRadius: 0 },
  "&:hover::-webkit-scrollbar-thumb": { background: c.scrollbar },
  "&::-webkit-scrollbar-thumb:hover": { background: c.scrollbarHover },
});

export const tabSx = (c: TabPalette, active: boolean) => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
  flexShrink: 0,
  height: "100%",
  pl: 1.5,
  pr: 0.75,
  fontSize: 13,
  cursor: "pointer",
  userSelect: "none",
  whiteSpace: "nowrap",
  color: active ? c.activeForeground : c.inactiveForeground,
  backgroundColor: active ? c.activeBackground : c.inactiveBackground,
  borderRight: `1px solid ${c.border}`,
  boxShadow: active
    ? `inset 0 1px 0 ${c.activeBorderTop}`
    : `inset 0 -1px 0 ${c.border}`,
  "&:hover": { backgroundColor: active ? c.activeBackground : c.hoverBackground },
  "& .tab-close": { visibility: active ? "visible" : "hidden" },
  "&:hover .tab-close": { visibility: "visible" },
});

export const tabCloseSx = (c: TabPalette) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 20,
  height: 20,
  borderRadius: "4px",
  "&:hover": { backgroundColor: c.closeHover },
});
