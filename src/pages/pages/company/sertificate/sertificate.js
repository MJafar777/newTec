import { Box, Typography } from "@mui/material";
import { Image } from "antd";
import React, { useState } from "react";
import { ContainerWrapper } from "./stylesertificate";

const Sertificate = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ContainerWrapper>
      <Typography
      
        flex="1"
        variant="h3"
        fontFamily={"revert-layer"}
        fontWeight={700}
      >
        CERTIFICATE
      </Typography>
      <Box
        className="certificate"
        flex="4"
      >
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
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
            src="https://www.british-legal-centre.com/source/Certificate_BLC.jpg"
          />
          <Image
            width={300}
            height={400}
            style={{ boxShadow: "5px 5px 20px 5px rgba(0,0,0,0.51)" }}
            src="https://img.lovepik.com/desgin_photo/40175/9206_detail.jpg"
          />
        </Image.PreviewGroup>
      </Box>
    </ContainerWrapper>
  );
};

export default Sertificate;
