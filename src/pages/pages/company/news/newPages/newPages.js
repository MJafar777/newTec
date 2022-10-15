import React from "react";
import { Typography, Box } from "@mui/material";
import { Wrapper, ItemLeft, ItemRight } from "./stylePages";

const NewPages = () => {
  return (
    <Wrapper>
      <ItemLeft>
        <Typography variant="h4">Forbes Diamonds 2022</Typography>
        <Box className="About">
          <Typography>by</Typography>
          <Typography>MS.Creative</Typography>
          <Box className="about_border"></Box>
          <Typography>Jan 18, 2022</Typography>
          <Box className="about_border"></Box>
          <Typography>Uncategorized</Typography>
          <Box className="about_border"></Box>
          <Typography>0 comments </Typography>
        </Box>
        <img
          alt="news_img"
          src="https://i.pinimg.com/550x/ba/5f/e1/ba5fe1746767d2485ac4f2fee00edbcf.jpg"
        />
        <Box className="description">
          <i>
            The magazine “Forbes” published a list of the most dynamically
            developing companies in Poland – “Forbes Diamonds 2022”. The HPE8
            company was once again among the laureates of this prestigious
            ranking.
          </i>
        </Box>
      </ItemLeft>
      <Box className="border"></Box>
      <ItemRight>
        <div>
          <input type="text" className="input" />
          <button className="button">Search</button>
        </div>
        <Box display={"flex"} flexDirection={"column"} gap="10px">
          <Typography variant="h6" mt={2} fontWeight={"400"}>
            Recent Posts
          </Typography>
          <Typography>Forbes Diamonds 2022</Typography>
          <Typography>
            21-24.09.2021 – HPE 8 Sp z o.o. at the TRAKO 2021 International
            Railway Fair
          </Typography>
          <Typography>
            The Pomeranian Special Economic Zone has granted support to HPE 8
            Sp. z o.o. within the Polish Investment Zone.
          </Typography>
          <Typography>
            The Patent Office of the Republic of Poland has granted HPE 8 Sp z
            o.o. the protection right for the utility model entitled “Container
            train brake test station”.
          </Typography>
          <Typography>
            HPE8 Sp. z o.o. among Forbes Diamonds 2021 laureates
          </Typography>
        </Box>
      </ItemRight>
    </Wrapper>
  );
};

export default NewPages;
