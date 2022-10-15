import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Pagination from "./pagination/pagination";
import { AboutText, Description, Wrapper } from "./style-designing";

const ServiceContainer = () => {
  return (
    <Wrapper>
      <Box className="title">
        <Typography
          variant="h4"
          fontWeight="600"
          color="#fff"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          SERVICE
        </Typography>
      </Box>
      <Container data-aos="fade-down" data-aos-duration="2000">
        <Description id="designing">
          <Box className="companyTitle">
            <Typography>
              <Typography fontWeight={700} variant="h3">
                DESIGNING
              </Typography>
              <Typography
                fontWeight={600}
                fontSize="16px"
                companent="p"
                color="#403938"
              >
                HPE 8 SP. Z O.O. IS AN ENGINEERING COMPANY PROVIDING SOLUTIONS
                FOR CLIENTS IN THE MECHANICAL, ELECTRICAL AND AUTOMATION
                INDUSTRY.
              </Typography>
            </Typography>
          </Box>
          <Box className="companyDescription">
            <Typography fontWeight={300} companent="p" color="#403938">
              The HPE 8 company offers design, substantive support, execution,
              installation and start-up of technical systems and equipment for
              various industries, especially in the field of:
            </Typography>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: ".5rem",
                margin: "1rem 0",
              }}
            >
              <li>
                industrial, process and technological installations and systems,
              </li>
              <li>
                industrial, process and technological installations and systems,
              </li>
              <li>
                industrial, process and technological installations and systems,
              </li>
              <li>
                industrial, process and technological installations and systems,
              </li>
              <li>
                industrial, process and technological installations and systems,
              </li>
            </ul>
            <Typography fontWeight={300}>
              We use up-to-date 3D modeling and calculation programs. We do
              static and dynamic calculations by MES and CFD methods.
            </Typography>
            <Typography fontWeight={300} mt={1}>
              We have the possibility to carry out trials and tests of designed
              devices.
            </Typography>
          </Box>
        </Description>
        <AboutText>
          <Typography fontWeight={300}>
            For executed projects HPE 8 Sp. z o.o. offers the design and
            preparation of specialized documentation to ensure the safe and
            legal launching and utilization of customer products in accordance
            with the requirements of EU, ASME, GOST.
          </Typography>
          <Typography fontWeight={300}>
            For executed projects HPE 8 Sp. z o.o. offers the design and
            preparation of specialized documentation to ensure the safe and
            legal launching and utilization of customer products in accordance
            with the requirements of EU, ASME, GOST.
          </Typography>
          <Pagination />
        </AboutText>
      </Container>
    </Wrapper>
  );
};

export default ServiceContainer;
