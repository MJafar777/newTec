import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Wrapper } from "./style-european-funds";

const EuropeanFunds = () => {
  return (
    <Wrapper>
      <Box className="Content">
        <Typography
          color="#fff"
          variant="h4"
          fontWeight="600"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          EUROPEAN FUNDS
        </Typography>
      </Box>
      <Container data-aos="fade-up" data-aos-duration="2000">
        <Box mb={10}>
          <Typography fontWeight={600} color="#22313F">
            HPE 8 SP. Z O.O. IS REALIZING A PROJECT NO. POIR.03.03.03-14-0011/17
            CALLED: “PROMOTION AND EXPORT DEVELOPMENT OF HPE 8 PRODUCTS AND
            SERVICES ON FOREIGN MARKETS”
          </Typography>
          <Typography fontWeight={300} mt={2} mb={2}>
            The project is supported by EU funds within European Regional
            Development Fund, Smart Growth Operational Programme for the period
            2014-2020, priority axis 3: Support for innovation in enterprises,
            action: 3.3: Support for promotion and internationalisation of
            innovative enterprises Astana/Hannover, sub-measure 3.3.3: Support
            for promotion of product brands in SMEs – “Go to Brand”.
          </Typography>
          <Box>
            <Typography fontWeight={300}>
              The aim of the project is to promote internationally HPE 8 brand
              and following products and services through participation in trade
              fairs in Kazakhstan:
            </Typography>
            <Box marginLeft="-4rem">
              <ul>
                <ol
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: "300",
                  }}
                >
                  <Box className="border" />
                  nitrogen generation and distribution systems
                </ol>
                <ol
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: "300",
                  }}
                >
                  <Box className="border" />
                  nitrogen generation and distribution systems
                </ol>
                <ol
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    fontWeight: "300",
                  }}
                >
                  <Box className="border" />
                  nitrogen generation and distribution systems
                </ol>
              </ul>
            </Box>
          </Box>
          <Box>
            <Typography fontWeight={600}>
              The planned effects are to increase the share of exports in the
              company’s revenues.
            </Typography>
            <Typography fontWeight={300}>
              Dates: 20.02.2017-30.12.2017
            </Typography>
            <Typography fontWeight={300}>
              {" "}
              The cost of the project: 348 139,59 PLN
            </Typography>
            <Typography fontWeight={300}>
              {" "}
              Amount of the endowment: 221 175,00 PLN
            </Typography>
          </Box>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default EuropeanFunds;
