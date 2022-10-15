import {
  Apartment,
  Home,
  MailOutline,
  MiscellaneousServices,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { ItemLeft, ItemRight, Wrapper } from "./style-contact";

const Contact = () => {
  const inputEl = useRef(null);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const numrandom1 = Math.floor(Math.random() * 10);
    const numrandom2 = Math.floor(Math.random() * 10);
    if (numrandom1 !== 0 && numrandom2 !== 0) {
      setNum1(numrandom1);
      setNum2(numrandom2);
    }
  }, [result]);

  const handleSubmit = () => {
    const addnumber = num1 + num2;
    if (addnumber === Number(inputEl.current.value)) {
      setResult(<Alert severity="success">Send message</Alert>);
    } else {
      setResult(<Alert severity="error">Error message</Alert>);
    }
  };

  return (
    <Wrapper>
      <Box className="Content">
        <Typography
          color="#fff"
          fontWeight="600"
          data-aos="zoom-in-down"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="2000"
          variant="h4"
        >
          CONTACT
        </Typography>
      </Box>
      <Container data-aos="fade-up" data-aos-duration="2000">
        <Box className="ItemWrapper">
          <ItemLeft>
            <Box className="Item">
              <Home className="icon" />
              <Box>
                <Typography variant="h6">HEADQUARTERS</Typography>
                <Typography color="#9A9693">ul. Lekka 3/U4,</Typography>
                <Typography color="#9A9693">01-910 Warszawa</Typography>
                <Typography color="#9A9693">NIP: 1181982874</Typography>
                <Typography color="#9A9693">Tel.: + 48 58 739 69 90</Typography>
                <Typography color="#9A9693">Fax.: + 48 58 739 69 92</Typography>
              </Box>
            </Box>
            <Box className="Item">
              <Apartment className="icon" />
              <Box>
                <Typography variant="h6">DESIGN OFFICE & WORKSHOP</Typography>
                <Typography color="#9A9693">ul. Hutnicza 40b,</Typography>
                <Typography color="#9A9693">81-061 Gdynia</Typography>
                <Typography color="#9A9693">Tel.: + 48 58 739 69 90</Typography>
                <Typography color="#9A9693">Fax.: + 48 58 739 69 92</Typography>
                <Typography color="#9A9693">engineering@hmail.com</Typography>
              </Box>
            </Box>
            <Box className="Item">
              <MailOutline className="icon" />
              <Box>
                <Typography variant="h6">SALES</Typography>
                <Typography color="#9A9693">engineering@gmail.com</Typography>
              </Box>
            </Box>
            <Box className="Item">
              <MiscellaneousServices className="icon" />
              <Box>
                <Typography variant="h6">SERVICE</Typography>
                <Typography color="#9A9693">engineering@gmail.com</Typography>
              </Box>
            </Box>
          </ItemLeft>
          <ItemRight>
            <Typography variant="h5" fontWeight={500}>
              CONTACT FORM
            </Typography>
            <Box className="InputtContent">
              <input className="inputText" type="text" placeholder="Name" />
              <input className="inputText" type="text" placeholder="Email" />
            </Box>
            <TextareaAutosize
              maxRows={4}
              defaultValue="Message"
              className="Textarea"
              style={{ height: "150px" }}
            />
            <Box mt={1} display={"flex"}>
              <Box>
                {num1} + {num2} =
                <input className="resultInput" type="text" ref={inputEl} />
              </Box>
              <Button
                onClick={handleSubmit}
                variant="outlined"
                color="secondary"
              >
                Submit
              </Button>
            </Box>
            <Box mt={2}>{result}</Box>
          </ItemRight>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Contact;
