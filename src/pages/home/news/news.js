import {
  Box,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CardWrapper, Wrapper } from "./stylenew";

const News = () => {
  const { t, ready } = useTranslation();
  const navigate = useNavigate();

  return (
    <Wrapper data-aos="fade-up" data-aos-duration="2000">
      <Typography mb={5} variant="h4">
        {ready ? t("home.bottom.news") : []}
      </Typography>
      <Grid
        container
        sx={{ display: "flex", gap: "2rem", justifyContent: "center" }}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <CardWrapper onClick={() => navigate("/company/news/news")}>
          <CardActionArea>
            <CardContent>
              <Box>
                <Typography className="Description" component={"P"}>
                  {ready ? t("home.bottom.description1") : []}
                </Typography>
                <Typography fontSize={"13px"} color={"#9A9693"} component={"P"}>
                  29/10/2021
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </CardWrapper>
        <CardWrapper>
          <CardActionArea>
            <CardContent>
              <Box>
                <Typography className="Description" component={"P"}>
                  {ready ? t("home.bottom.description2") : []}
                </Typography>
                <Typography fontSize={"13px"} color={"#9A9693"} component={"P"}>
                  29/10/2021
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </CardWrapper>
        <CardWrapper>
          <CardActionArea>
            <CardContent>
              <Box>
                <Typography className="Description" component={"P"}>
                  {ready ? t("home.bottom.description3") : []}
                </Typography>
                <Typography fontSize={"13px"} color={"#9A9693"} component={"P"}>
                  29/10/2021
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </CardWrapper>
      </Grid>
    </Wrapper>
  );
};

export default News;
