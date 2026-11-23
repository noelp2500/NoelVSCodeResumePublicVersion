export const REPO_NAME = "Noel's Website";
export const ROOT_DIR = "home";
export const REPO_NODE_ID = "repo";
export const ROOT_NODE_ID = "-1";
export const EXPLORER_WIDTH = 250;
export const FOLDER_ICON_SIZE = 15;
export const FILE_FONT_SIZE = 15;

export const explorerPalettes = {
  dark: {
    background: "#181818",
    border: "#2b2b2b",
    title: "#cccccc",
    foreground: "#cccccc",
    hover: "#2a2d2e",
    selected: "#37373d",
    activeSelected: "#04395e",
    focusBorder: "#0078d4",
    fileIcon: "#519aba",
    folderIcon: "#c09553",
  },
  light: {
    background: "#f8f8f8",
    border: "#e5e5e5",
    title: "#3b3b3b",
    foreground: "#3b3b3b",
    hover: "#f2f2f2",
    selected: "#e4e6f1",
    activeSelected: "#e4e6f1",
    focusBorder: "#005fb8",
    fileIcon: "#519aba",
    folderIcon: "#c09553",
  },
};

type ExplorerPalette = typeof explorerPalettes.dark;

export const explorerPanelSx = (c: ExplorerPalette) => ({
  backgroundColor: c.background,
  borderRight: `1px solid ${c.border}`,
  width: EXPLORER_WIDTH,
  flexShrink: 0,
});

export const explorerTitleSx = (c: ExplorerPalette) => ({
  color: c.title,
  fontSize: 11,
  letterSpacing: "0.04em",
  px: 2.5,
  lineHeight: "35px",
});

export const explorerTreeSx = (c: ExplorerPalette, active: boolean) => ({
  color: c.foreground,
  "& .MuiTreeItem-content": {
    height: 24,
    pl: 0.5,
    pr: 1.5,
    borderRadius: 0,
    border: "1px solid transparent",
    "&:hover": { backgroundColor: c.hover },
    "&.Mui-focused": { backgroundColor: "transparent" },
    "&.Mui-selected, &.Mui-selected.Mui-focused, &.Mui-selected:hover": {
      backgroundColor: active ? c.activeSelected : c.selected,
      borderColor: active ? c.focusBorder : "transparent",
    },
  },
  "& .MuiTreeItem-label": {
    fontSize: 14,
    pl: "2px !important",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  "& .MuiTreeItem-iconContainer": { width: 16, mr: "2px" },
  "& .MuiTreeItem-iconContainer svg": { fontSize: 16 },
  "& .MuiTreeItem-group": { ml: "16px" },
  "& .MuiTreeItem-group .MuiTreeItem-group .MuiTreeItem-label": {
    fontSize: FILE_FONT_SIZE,
  },
  [`& > .MuiTreeItem-root > .MuiTreeItem-content .MuiTreeItem-label`]: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
  },
});
