import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Cards from "./card/card";
import { Top, Wrapper } from "./styleproduct";

const Product = () => {
  const { t, ready } = useTranslation();

  return (
    <Wrapper>
      <Box className="Content">
        <Container>
          <Top data-aos="zoom-out" data-aos-duration="2000">
            <Typography
              fontWeight={"600"}
              color="#fff"
              variant="h4"
              component={"p"}
            >
              {ready ? t("products.products") : []}
            </Typography>
          </Top>
        </Container>
      </Box>
      <Cards />
    </Wrapper>
  );
};

export default Product;
