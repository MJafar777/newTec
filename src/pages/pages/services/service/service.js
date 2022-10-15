import { Box, Typography } from "@mui/material";
import { Image } from "antd";
import React from "react";
import {  Wrapper } from "./style-service";

const Service = () => {
  return (
    <Wrapper id="designing" data-aos="fade-up" data-aos-duration="2000">
      <Box className="companyTitle">
        <Typography>
          <Typography fontWeight={700} variant="h3">
            SERVICE
          </Typography>
        </Typography>
      </Box>
      <Box className="companyDescription">
        <Typography fontWeight={300} companent="p" color="#403938">
          We provide warranty and post-warranty service for devices manufactured
          by HPE 8.
        </Typography>
      </Box>
      <Box>
        <Image
          width={200}
          height={150}
          style={{ borderRadius: "10px" }}
          src="https://media.istockphoto.com/photos/technical-support-concept-business-person-touching-helpdesk-icon-on-picture-id1059548978?k=20&m=1059548978&s=612x612&w=0&h=O6HSfwldQy337NscgTNYTJQ_GamUkFZ5yC9jfvgQCt0="
        />
      </Box>
    </Wrapper>
  );
};

export default Service;
