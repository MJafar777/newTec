import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Cards from "./card/card";
import News from "./news/news";
import {  Top, Wrapper } from "./stylehome";

const Home = () => {
  const { t, ready } = useTranslation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Top>
        <Container
          className="Content"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <Typography
            fontWeight={"600"}
            color="#fff"
            variant="h4"
            component={"p"}
          >
            {ready ? t("home.title.title") : []}
          </Typography>
          <Typography
            component={"p"}
            fontWeight={"500"}
            variant="h6"
            color="#fff"
          >
            {ready ? t("home.title.about") : []}
          </Typography>
          <Button
            onClick={() => navigate("/company")}
            className="ButtonMore"
            variant="contained"
          >
            {ready ? t("home.title.more") : []}
            <ArrowRightAlt />
          </Button>
        </Container>
      </Top>
      <Cards />
      <Container>
        <Box
          margin="5rem 0"
          data-aos="fade-up"
          borderBottom={"0.1px solid #BFBFBF"}
          width="100%"
        />
      </Container>
      <News />
    </Wrapper>
  );
};

export default Home;
