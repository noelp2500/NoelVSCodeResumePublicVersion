import { Box } from "@mui/material";
import React from "react";
import { VscMarkdown, VscClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  tabBarSx,
  tabCloseSx,
  tabPalettes,
  tabSx,
} from "../constants/tabs";

interface Props {
  pages: {
    index: number;
    name: string;
    route: string;
  }[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function AppButtons({
  pages,
  selectedIndex,
  setSelectedIndex,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const navigate = useNavigate();
  const c = tabPalettes[useTheme().palette.mode];

  return (
    <Box
      sx={tabBarSx(c)}
      onWheel={(e) => (e.currentTarget.scrollLeft += e.deltaY)}
    >
      {pages.map(({ index, name, route }) => (
        <Box
          key={index}
          sx={tabSx(c, selectedIndex === index)}
          onClick={() => {
            setSelectedIndex(index);
            setCurrentComponent("button");
            navigate(route);
          }}
        >
          <VscMarkdown color={c.fileIcon} size={16} />
          {name}
          <Box
            className="tab-close"
            sx={tabCloseSx(c)}
            onClick={(e) => {
              e.stopPropagation();
              setVisiblePageIndexs(
                visiblePageIndexs.filter((x) => x !== index)
              );
            }}
          >
            <VscClose size={16} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
