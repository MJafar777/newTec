import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Cards from "./card/card";
import { Top, Wrapper } from "./style-nitrogen-generators";

const NitrogenGen = () => {
  const { t, ready } = useTranslation();

  return (
    <Wrapper>
      <Box className="Content">
        <Container>
          <Top data-aos="fade-up" data-aos-duration="2000">
            <Typography
              fontWeight={"600"}
              color="#fff"
              variant="h4"
              component={"p"}
            >
              {ready ? t("products.nitrogen-generators") : []}
            </Typography>
          </Top>
        </Container>
      </Box>
      <Cards />
    </Wrapper>
  );
};

export default NitrogenGen;
