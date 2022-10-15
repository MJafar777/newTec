import { Box, Container } from "@mui/material";
import React from "react";
import Quality from "../pages/company/quality/quality";
import Sertificate from "../pages/company/sertificate/sertificate";
import Social from "../pages/company/social/social";
import News from "../pages/company/news/news";
import CompanyContainer from "../pages/company/company-container/company-container";
import { Wrapper } from "./stylecompany";

const Company = () => {
  return (
    <Wrapper>
      <Box className="Items">
        <CompanyContainer />
      </Box>
      <Box id="quality" className="Items" bgcolor={"#DFDFDF"}>
        <Quality />
      </Box>
      <Box id="sertificate" className="Items">
        <Sertificate />
      </Box>
      <Box id="social" className="Items" bgcolor={"#DFDFDF"}>
        <Social />
      </Box>
      <Box id="news" className="Items">
        <News />
      </Box>
    </Wrapper>
  );
};

export default Company;
