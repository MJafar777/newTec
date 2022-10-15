import { Box } from "@mui/material";
import React from "react";
import { Wrapper } from "./style-service";
import Designing from "../pages/services/designing/designing";
import Caculations from "../pages/services/calculations/calculations";
import Projects from "../pages/services/projects/projects";
import Service from "../pages/services/service/service";

const Services = () => {
  return (
    <Wrapper>
      <Box width="100%" height="100%">
        <Designing />
      </Box>
      <Box bgcolor={"#F3F3F3"} id="calculations" width="100%">
        <Caculations />
      </Box>
      <Box id="projects" width="100%">
        <Projects />
      </Box>
      <Box bgcolor={"#F3F3F3"} id="service" width="100%">
        <Service />
      </Box>
      <Box width="100%" height={"100px"} />
    </Wrapper>
  );
};

export default Services;
