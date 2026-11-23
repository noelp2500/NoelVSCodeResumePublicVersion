import { Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  VscRemote,
  VscError,
  VscWarning,
  VscBell,
  VscFeedback,
  VscCheckAll,
  VscSourceControl,
} from "react-icons/vsc";
import { SOURCE_URL } from "../constants/sidebar";
import {
  footerItemSx,
  footerPalettes,
  footerRemoteSx,
  footerSx,
} from "../constants/footer";

export default function Footer() {
  const c = footerPalettes[useTheme().palette.mode];
  const item = footerItemSx(c);

  return (
    <Box sx={footerSx(c)}>
      <Box display="flex">
        <Box sx={footerRemoteSx(c)}>
          <VscRemote />
        </Box>
        <Link href={SOURCE_URL} target="_blank" underline="none" sx={item}>
          <VscSourceControl />
          main
        </Link>
        <Box sx={item}>
          <VscError /> 0 <VscWarning /> 0
        </Box>
      </Box>

      <Box display="flex">
        <Box sx={item}>
          <VscCheckAll /> Prettier
        </Box>
        <Box sx={item}>
          <VscFeedback />
        </Box>
        <Box sx={item}>
          <VscBell />
        </Box>
      </Box>
    </Box>
  );
}
