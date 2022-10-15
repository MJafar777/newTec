import { Box, Typography } from "@mui/material";
import React from "react";
import Pagination from "./pagination/pagination";
import {  Description, Wrapper } from "./style-projects";

const Projects = () => {
  return (
    <Wrapper data-aos="fade-up" data-aos-duration="2000">
      <Description id="designing">
        <Box className="companyTitle">
          <Typography>
            <Typography fontWeight={700} variant="h4">
              ON-SITE INSTALLATION
            </Typography>
            <Typography
              fontWeight={500}
              fontSize="16px"
              companent="p"
              color="#403938"
            >
              PROJECTS
            </Typography>
          </Typography>
        </Box>
        <Box className="companyDescription">
          <Typography fontWeight={300} companent="p" color="#403938">
            Meeting the market expectations, we offer turnkey projects. In
            addition to design service and delivery of our products, we provide
            plug-in and a start-up of devices manufactured by us on the Client’s
            site.
          </Typography>
        </Box>
      </Description>
      <Pagination />
    </Wrapper>
  );
};

export default Projects;
