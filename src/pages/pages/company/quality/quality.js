import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ContainerWrapper, Item } from "./stylequality";

const Quality = () => {
  const { t, ready } = useTranslation();

  const quality_police = ready
    ? t("company.quality-policy.year", { returnObjects: true })
    : [];
  return (
    <ContainerWrapper>
      <Item data-aos="fade-down" data-aos-duration="2000">
        <Typography variant="h4" fontWeight={700}>
          {ready ? t("company.quality-policy.title") : []}
        </Typography>
        <Typography fontWeight={500}>
          {ready ? t("company.quality-policy.description") : []}
        </Typography>
        <Box>
          <ul
            style={{
              width: "100%",
              listStyle: "none",
              marginLeft: "-2.5rem",
            }}
          >
            {quality_police.map(({ childyear }, value) => {
              return (
                <li
                  key={value}
                  style={{ marginBottom: "1rem", color: "#032955" }}
                >
                  {childyear}
                </li>
              );
            })}
          </ul>
        </Box>
      </Item>
      <Item data-aos="fade-up" data-aos-duration="2000" alignItems="center">
        <Typography fontWeight={300}>
          The Management of the HPE 8 Sp. z o.o. company has made a decision to
          implement the Integrated Management System in accordance with the
          requirements of the international standard
        </Typography>
        <Typography fontWeight={600}>PN-EN ISO 9001: 2015,</Typography>
        <Typography fontWeight={300}>
          in terms of quality, and in accordance with the requirements of
          occupational health and safety management according to the standard
        </Typography>
        <Typography fontWeight={600}>PN-ISO 45001: 2018,</Typography>
        <Typography fontWeight={300}>
          The Management of the HPE 8 Sp. z o.o. company has made a decision to
          implement the Integrated Management System in accordance with the
          requirements of the international standard
        </Typography>
      </Item>
    </ContainerWrapper>
  );
};

export default Quality;
