import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Stack,
  useMediaQuery,
  ButtonGroup,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import NDAProjects from "./NDAProjects";
import OpenProjects from "./OpenProjects";
import { useState } from "react";

const Web3Projects = () => {
  const { t, i18n } = useTranslation();
  const isMobileScreen = useMediaQuery("(max-width:768px)");
  const [projects, setProjects] = useState(true);

  const clickProjects = () => {
    setProjects(true);
  };

  const clickProjects2 = () => {
    setProjects(false);
  };

  return (
    <Box
      id={"projects-block"}
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: { xs: "30px", md: "75px" },
        padding: { xs: "70px 25px 80px", md: "130px 80px" },
      }}
    >
      <Box
        sx={{
          display: { xs: "grid", md: "flex" },
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <Typography
          variant={"h2"}
          sx={{
            color: "black",
            fontSize: {
              xs: "28px",
              md: "56px",
            },
            textAlign: {
              xs: "start",
              md: "left",
            },
            fontWeight: "700",
            maxWidth: "700px",
            fontFamily:
              i18n.language === "en" ? "Readex Pro" : "Arial, sans-serif",
          }}
        >
          {t("web3.projects")}
        </Typography>
        <Stack
          sx={{
            gap: "8px",
            display: "flex",
            width: "fit-content",
            alignItems: "center",
          }}
          direction={"row"}
        >
          <Button
            onClick={clickProjects}
            sx={{
              height: "fit-content",
              padding: "6px 8px",
              fontSize: "12px",
              fontWeight: "700",
              fontFamily: "Arial",
              border: "1px solid #D0BEFF",
              borderRadius: "12px",
              color: projects ? "#7140FD" : "#020210",
              borderColor: projects ? "#D0BEFF" : "#EAEBEF",
              bgcolor: projects ? "#F7F5FF" : "white",
              "&:hover": {
                color: "#D0BEFF",
              },
            }}
          >
            {t("button.openProjects")}
          </Button>
          <Button
            onClick={clickProjects2}
            sx={{
              height: "fit-content",
              padding: "6px 8px",
              fontSize: "12px",
              fontWeight: "700",
              fontFamily: "Arial",
              border: "1px solid #D0BEFF",
              borderRadius: "12px",
              color: projects ? "#020210" : "#F7931A",
              borderColor: projects ? "#EAEBEF" : "#F7931A",
              "&:hover": {
                color: "#D0BEFF",
                borderColor: "#EAEBEF",
              },
            }}
          >
            {t("button.ndaProjects")}
          </Button>
        </Stack>
      </Box>
      {projects ? <OpenProjects /> : <NDAProjects />}
    </Box>
  );
};

export default Web3Projects;
