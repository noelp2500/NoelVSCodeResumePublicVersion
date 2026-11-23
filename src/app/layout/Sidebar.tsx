import React from "react";
import { Box, Divider, Link, Tooltip } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
import { BiGitBranch } from "react-icons/bi";
import { links } from "../pages/links";
import { useNavigate } from "react-router-dom";
import {
  SOURCE_URL,
  sidebarDividerSx,
  sidebarItemSx,
  sidebarPalettes,
  sidebarSx,
} from "../constants/sidebar";

interface Props {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
  handleThemeChange: () => void;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Sidebar({
  expanded,
  setExpanded,
  darkMode,
  handleThemeChange,
  setSelectedIndex,
}: Props) {
  const navigate = useNavigate();
  const c = sidebarPalettes[darkMode ? "dark" : "light"];

  const item = (
    title: string,
    icon: React.ReactNode,
    props: { href?: string; onClick?: () => void; active?: boolean }
  ) => (
    <Tooltip title={title} arrow placement="right" key={title}>
      <Link
        href={props.href}
        target={props.href ? "_blank" : undefined}
        onClick={props.onClick}
        underline="none"
        color="inherit"
        sx={sidebarItemSx(c, props.active)}
      >
        {icon}
      </Link>
    </Tooltip>
  );

  return (
    <Box sx={sidebarSx(c)}>
      <Box display="flex" flexDirection="column">
        {item("Explorer", <VscFiles />, {
          onClick: () => setExpanded(!expanded),
          active: expanded,
        })}
        {item("Source of this project", <BiGitBranch />, { href: SOURCE_URL })}
        <Divider sx={sidebarDividerSx(c)} />
        {links.map((link) => item(link.title, link.icon, { href: link.href }))}
      </Box>

      <Box display="flex" flexDirection="column">
        {item(
          darkMode ? "Turn on the light" : "Turn off the light",
          darkMode ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />,
          { onClick: handleThemeChange }
        )}
        {item("Markdown syntax", <VscSettingsGear />, {
          onClick: () => {
            setSelectedIndex(-1);
            navigate("/docs");
          },
        })}
      </Box>
    </Box>
  );
}
