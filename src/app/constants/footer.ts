export const STATUS_BAR_HEIGHT = 22;

export const footerPalettes = {
  dark: {
    background: "#181818",
    border: "#2b2b2b",
    foreground: "#cccccc",
    hover: "rgba(255, 255, 255, 0.12)",
    remoteBackground: "#0078d4",
    remoteHover: "#026ec1",
    remoteForeground: "#ffffff",
  },
  light: {
    background: "#f8f8f8",
    border: "#e5e5e5",
    foreground: "#3b3b3b",
    hover: "rgba(31, 31, 31, 0.07)",
    remoteBackground: "#005fb8",
    remoteHover: "#0258a8",
    remoteForeground: "#ffffff",
  },
};

type FooterPalette = typeof footerPalettes.dark;

export const footerSx = (c: FooterPalette) => ({
  height: STATUS_BAR_HEIGHT,
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: c.background,
  color: c.foreground,
  borderTop: `1px solid ${c.border}`,
  fontSize: 12,
  userSelect: "none",
  overflow: "hidden",
});

export const footerItemSx = (c: FooterPalette) => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  px: 1,
  height: "100%",
  color: "inherit",
  cursor: "pointer",
  whiteSpace: "nowrap",
  "&:hover": { backgroundColor: c.hover },
  "& svg": { fontSize: 14 },
});

export const footerRemoteSx = (c: FooterPalette) => ({
  ...footerItemSx(c),
  px: 1.25,
  backgroundColor: c.remoteBackground,
  color: c.remoteForeground,
  "&:hover": { backgroundColor: c.remoteHover },
});
