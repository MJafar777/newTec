import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "./style-careers";

const Careers = () => {
  return (
    <Wrapper>
      <Box className="Content">
        <Typography
          color="#fff"
          data-aos="zoom-in-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          fontWeight="600"
          variant="h4"
        >
          CAREERS
        </Typography>
      </Box>
      <Container data-aos="fade-up" data-aos-duration="2000">
        <Box className="Description">
          <Typography
            flex={2}
            sx={{ margin: "5rem 0" }}
            variant="h4"
            fontWeight={600}
          >
            CAREERS
          </Typography>
          <Typography flex={5} fontWeight={300} color="#22313F">
            From the beginning of the establishing HPE 8 has been developing
            dynamically, thus new jobs are created. If you are interested in
            joining our team, please send your application to:{" "}
            <b style={{ fontWeight: "700" }}>rekrutacja@hpe8.eu</b>
          </Typography>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Careers;
