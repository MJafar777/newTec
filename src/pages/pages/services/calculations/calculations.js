import { Box, Typography } from "@mui/material";
import React from "react";
import Pagination from "./pagination/pagination";
import {  Description, Wrapper } from "./style-calculations";

const Calculations = () => {
  return (
    <Wrapper data-aos="fade-up" data-aos-duration="2000">
      <Description id="designing">
        <Box className="companyTitle">
          <Typography>
            <Typography fontWeight={700} variant="h4">
              CALCULATIONS
            </Typography>
            <Typography
              fontWeight={600}
              fontSize="16px"
              companent="p"
              color="#403938"
            >
              CALCULATIONS, ALGORITHMS DESIGN AND INDUSTRIAL AUTOMATICS SYSTEMS
              PROGRAMMING
            </Typography>
          </Typography>
        </Box>
        <Box className="companyDescription">
          <Typography fontWeight={300} companent="p" color="#403938">
            In most of our projects, we combine various technical branches for
            which we perform specialized calculations. We have specialist
            programs for pipelines, pressure equipment and steel structures
            calculations. We adapt our calculation methods to the particular
            design, from static calculations to FEM and CFD calculations.
            Furthermore, we comply with EN, ASME and GOST standards.
          </Typography>
        </Box>
      </Description>
      <Box>
        <Pagination />
      </Box>
    </Wrapper>
  );
};

export default Calculations;
