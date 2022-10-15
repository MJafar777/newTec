import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardContentItem,
  CardMediaWrapper,
  WrapperCard,
} from "./styleProductCard";

const Cards = () => {
  const navigate = useNavigate();

  return (
    <WrapperCard>
      <Grid
        container
        sx={{ display: "flex", gap: "2rem", justifyContent: "center" }}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Card
          sx={{
            maxWidth: 345,
            width: 345,
          }}
          onClick={() => navigate("/project/nitrogen-generators-llo")}
        >
          <CardActionArea>
            <CardMediaWrapper
              component="img"
              height="100%"
              image="https://aircompressors.com/wp-content/uploads/2019/04/product-NGPgroup.png"
              alt="green iguana"
            />
            <CardContentItem>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h6"
                component="div"
              >
                Lorme ipsum
              </Typography>
            </CardContentItem>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            width: 345,
          }}
        >
          <CardActionArea>
            <CardMediaWrapper
              component="img"
              height="100%"
              image="https://aircompressors.com/wp-content/uploads/2019/04/product-NGPgroup.png"
              alt="green iguana"
            />
            <CardContentItem>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h6"
                component="div"
              >
                Lorme ipsum
              </Typography>
            </CardContentItem>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            width: 345,
          }}
        >
          <CardActionArea>
            <CardMediaWrapper
              component="img"
              height="100%"
              image="https://aircompressors.com/wp-content/uploads/2019/04/product-NGPgroup.png"
              alt="green iguana"
            />
            <CardContentItem>
              <Typography
                fontWeight={600}
                gutterBottom
                variant="h6"
                component="div"
              >
                Lorme ipsum
              </Typography>
            </CardContentItem>
          </CardActionArea>
        </Card>
      </Grid>
    </WrapperCard>
  );
};

export default Cards;
