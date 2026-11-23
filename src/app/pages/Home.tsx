import { Box, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VscMarkdown } from "react-icons/vsc";
import logo from "../../static/favicon.png";
import { links } from "./links";
import { pages } from "./pages";
import { palettes, RECENT_LIMIT, walkthroughs } from "../constants/home";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  visiblePageIndexs: number[];
  setVisiblePageIndexs: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function Home({
  setSelectedIndex,
  visiblePageIndexs,
  setVisiblePageIndexs,
}: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const c = palettes[theme.palette.mode];
  const [showAllRecent, setShowAllRecent] = useState(false);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = "Noel Pereira";
  }, [pathname]);

  const recentPages = pages.filter((p) => p.visible);
  const shownRecent = showAllRecent
    ? recentPages
    : recentPages.slice(0, RECENT_LIMIT);

  function openRoute(route: string) {
    const page = pages.find((p) => p.route === route);
    if (!page) return;
    if (!visiblePageIndexs.includes(page.index)) {
      setVisiblePageIndexs([...visiblePageIndexs, page.index]);
    }
    navigate(page.route);
    setSelectedIndex(page.index);
  }

  const linkSx = {
    color: c.link,
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  };

  const sectionHeadingSx = {
    fontSize: "1.5em",
    fontWeight: 400,
    color: c.foreground,
    mt: 4,
    mb: 1.5,
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        color: c.foreground,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe WPC", "Segoe UI", system-ui, Ubuntu, sans-serif',
        fontSize: 13,
        display: "flex",
        justifyContent: "center",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 4, md: 8 },
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1100 }}>
        <Stack direction="row" spacing={2.5} alignItems="center">
          <img src={logo} width="64" height="64" alt="logo" />
          <Box>
            <Typography
              component="h1"
              sx={{
                fontSize: { xs: "2.2em", sm: "2.7em" },
                fontWeight: 400,
                lineHeight: 1.2,
                color: c.foreground,
              }}
            >
              Noel Pereira
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1.3em", sm: "1.6em" },
                fontWeight: 400,
                color: c.description,
              }}
            >
              Portal to all things me!
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            columnGap: 10,
            mt: 2,
          }}
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography component="h2" sx={sectionHeadingSx}>
              Start
            </Typography>
            <Stack spacing={1}>
              {links.map((link) => (
                <Link
                  key={link.index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    ...linkSx,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "1.1em",
                  }}
                >
                  <Box
                    component="span"
                    sx={{ display: "flex", fontSize: 16, color: c.link }}
                  >
                    {link.icon}
                  </Box>
                  {link.title}...
                </Link>
              ))}
            </Stack>

            <Typography component="h2" sx={sectionHeadingSx}>
              Recent
            </Typography>
            <Stack spacing={0.75}>
              {shownRecent.map((page) => (
                <Box
                  key={page.index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    fontSize: "1.1em",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                  }}
                >
                  <VscMarkdown color="#6997d5" style={{ flexShrink: 0 }} />
                  <Link
                    component="button"
                    onClick={() => openRoute(page.route)}
                    sx={{ ...linkSx, fontSize: "inherit" }}
                  >
                    {page.name}
                  </Link>
                  <Typography
                    component="span"
                    sx={{
                      color: c.description,
                      fontSize: "inherit",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    ~/noel-pereira/pages
                  </Typography>
                </Box>
              ))}
              {recentPages.length > RECENT_LIMIT && (
                <Link
                  component="button"
                  onClick={() => setShowAllRecent(!showAllRecent)}
                  sx={{
                    ...linkSx,
                    fontSize: "1.1em",
                    alignSelf: "flex-start",
                  }}
                >
                  {showAllRecent ? "Less..." : "More..."}
                </Link>
              )}
            </Stack>
          </Box>

          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography component="h2" sx={sectionHeadingSx}>
              Walkthroughs
            </Typography>
            <Stack spacing={1.25}>
              {walkthroughs.map((w) => (
                <Box
                  key={w.route}
                  role="button"
                  tabIndex={0}
                  onClick={() => openRoute(w.route)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openRoute(w.route);
                    }
                  }}
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    p: "12px 16px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    backgroundColor: c.tileBackground,
                    border: `1px solid ${c.tileBorder}`,
                    transition: "background-color 0.1s",
                    "&:hover": { backgroundColor: c.tileHover },
                    "&:focus-visible": {
                      outline: `1px solid ${c.link}`,
                      outlineOffset: -1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      fontSize: 22,
                      color: c.link,
                      pt: "2px",
                    }}
                  >
                    {w.icon}
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      spacing={1}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.1em",
                          fontWeight: 600,
                          color: c.foreground,
                        }}
                      >
                        {w.title}
                      </Typography>
                      {w.badge && (
                        <Box
                          component="span"
                          sx={{
                            fontSize: 11,
                            px: 0.75,
                            py: "1px",
                            borderRadius: "2px",
                            backgroundColor: c.badgeBackground,
                            color: c.badgeForeground,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {w.badge}
                        </Box>
                      )}
                    </Stack>
                    <Typography
                      sx={{ fontSize: "1em", color: c.description, mt: 0.5 }}
                    >
                      {w.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
