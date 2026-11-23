import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  VscChevronDown,
  VscChevronRight,
  VscFolderOpened,
  VscMarkdown,
} from "react-icons/vsc";
import {
  explorerPalettes,
  explorerTreeSx,
  FOLDER_ICON_SIZE,
  REPO_NAME,
  REPO_NODE_ID,
  ROOT_DIR,
  ROOT_NODE_ID,
} from "../constants/explorer";

interface Page {
  index: number;
  name: string;
  route: string;
}

interface Props {
  pages: Page[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  currentComponent: string;
  setCurrentComponent: React.Dispatch<React.SetStateAction<string>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function AppTree({
  pages,
  selectedIndex,
  setSelectedIndex,
  currentComponent,
  setCurrentComponent,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const navigate = useNavigate();
  const c = explorerPalettes[useTheme().palette.mode];
  let { pathname } = useLocation();

  const page = pages.find((x) => x.route === pathname);

  useEffect(() => {
    if (page) {
      setSelectedIndex(page.index);
    }
  }, [page, setSelectedIndex]);

  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<VscChevronDown />}
      defaultExpandIcon={<VscChevronRight />}
      defaultExpanded={[REPO_NODE_ID, ROOT_NODE_ID]}
      selected={selectedIndex.toString()}
      sx={explorerTreeSx(c, currentComponent === "tree")}
    >
      <TreeItem nodeId={REPO_NODE_ID} label={REPO_NAME}>
        <TreeItem
          nodeId={ROOT_NODE_ID}
          label={
            <>
              <VscFolderOpened color={c.folderIcon} size={FOLDER_ICON_SIZE} />
              {ROOT_DIR}
            </>
          }
          onClick={() => {
            navigate("/");
            setSelectedIndex(-1);
          }}
        >
          {pages.map(({ index, name, route }) => (
            <TreeItem
              key={index}
              nodeId={index.toString()}
              label={name}
              icon={<VscMarkdown color={c.fileIcon} />}
              onClick={() => {
                if (!visiblePageIndexs.includes(index)) {
                  setVisiblePageIndexs([...visiblePageIndexs, index]);
                }
                navigate(route);
                setSelectedIndex(index);
                setCurrentComponent("tree");
              }}
            />
          ))}
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
