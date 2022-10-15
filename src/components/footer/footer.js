import { Box, Container, Typography } from "@mui/material";
import { Wrapper } from "./style-footer";

const Footer = () => {
  return (
    <Wrapper>
      <Container className="Content">
        <Box className="ItemWrapper">
          <Box className="Item">
            <Typography variant="h4">NEWS</Typography>
          </Box>
          <Box className="Item">
            <Typography fontWeight={600} fontSize={13}>
              Siedziba główna Headquarters
            </Typography>
            <Typography fontSize={12}>ul. Lekka 3/U4,</Typography>
            <Typography fontSize={12}>01-910 Warszawa, PL</Typography>
            <Typography fontSize={12}>Tel.: + 48 58 739 69 90</Typography>
            <Typography fontSize={12}>Fax.: + 48 58 739 69 92</Typography>
          </Box>
          <Box className="Item">
            <Typography fontWeight={600} fontSize={13}>
              Siedziba główna Headquarters
            </Typography>
            <Typography fontSize={12}>ul. Lekka 3/U4,</Typography>
            <Typography fontSize={12}>01-910 Warszawa, PL</Typography>
            <Typography fontSize={12}>Tel.: + 48 58 739 69 90</Typography>
            <Typography fontSize={12}>Fax.: + 48 58 739 69 92</Typography>
          </Box>
        </Box>
        <Box className="border"></Box>
        <Typography className="about" fontSize={12}>
          Copyright © 2020 | Strona wykonana przez MS.Creative
        </Typography>
      </Container>
    </Wrapper>
  );
};

export default Footer;
