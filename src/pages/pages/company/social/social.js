import { Box, Typography } from "@mui/material";
import { Carousel, Image } from "antd";
import React from "react";
import { ContainerWrapper, Item, ItemImg } from "./stylesocial";

const Social = () => {
  return (
    <ContainerWrapper>
      <Item data-aos="fade-up" data-aos-duration="2000">
        <Typography variant="h4" fontWeight={700}>
          SOCIAL ACTIVITIES
        </Typography>
        <Typography fontWeight={500}>
          FROM THE VERY BEGINNING ALONG WITH FULFILLING FINANCIAL AND
          DEVELOPMENT STRATEGIES OF THE COMPANY WE HAVE NOT FORGOTTEN ABOUT THE
          MOST NEEDING. WE HAVE BEEN SUPPORTING MANY CHARITIES AND SOCIAL
          INSTITUTIONS.
        </Typography>
        <Box>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              color: "#032955",
            }}
          >
            <li>Children’s Home in Gniew</li>
            <li>Children’s Home in Gniew</li>
            <li>Children’s Home in Gniew</li>
            <li>Children’s Home in Gniew</li>
            <li>Children’s Home in Gniew</li>
            <li>Children’s Home in Gniew</li>
            <li>Children’s Home in Gniew</li>
            <li>Children’s Home in Gniew</li>
            <li>Children’s Home in Gniew</li>
          </ul>
        </Box>
      </Item>
      <ItemImg>
        <Carousel autoplay>
          <Image
            width={300}
            height={400}
            style={{ boxShadow: "5px 5px 20px 5px rgba(0,0,0,0.51)" }}
            src="https://www.ies-info.com/data/certificate/specialist/certifikat_specialista_predni_sample.jpg"
          />
          <Image
            width={300}
            height={400}
            style={{ boxShadow: "5px 5px 20px 5px rgba(0,0,0,0.51)" }}
            src="https://www.ies-info.com/data/certificate/specialist/certifikat_specialista_predni_sample.jpg"
          />
          <Image
            width={300}
            height={400}
            style={{ boxShadow: "5px 5px 20px 5px rgba(0,0,0,0.51)" }}
            src="https://www.ies-info.com/data/certificate/specialist/certifikat_specialista_predni_sample.jpg"
          />
          <Image
            width={300}
            height={400}
            style={{ boxShadow: "5px 5px 20px 5px rgba(0,0,0,0.51)" }}
            src="https://www.ies-info.com/data/certificate/specialist/certifikat_specialista_predni_sample.jpg"
          />
        </Carousel>
      </ItemImg>
    </ContainerWrapper>
  );
};

export default Social;
