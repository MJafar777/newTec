import {
  CardActionArea,
  Container,
  Grid,
  Typography,
  CardContent,
  Box,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CardMediaWrapper } from "../../../home/card/stylecard";
import { CardWrapper, Wrapper } from "./stylenew";

const News = () => {
  const { t, ready } = useTranslation();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Container className="Container">
        <Typography mb={5} variant="h4">
          {ready ? t("home.bottom.news") : []}
        </Typography>
        <Grid
          container
          sx={{ display: "flex", gap: "2rem", justifyContent: "center" }}
        >
          <CardWrapper onClick={() => navigate("/company/news/news")}>
            <CardActionArea>
              <CardContent>
                <CardMediaWrapper
                  component="img"
                  height="100%"
                  image="https://aircompressors.com/wp-content/uploads/2019/04/product-NGPgroup.png"
                  alt="green iguana"
                />
                <Typography className="Description" component={"P"}>
                  {ready ? t("home.bottom.description1") : []}
                </Typography>
                <Typography fontSize={"13px"} color={"#9A9693"} component={"P"}>
                  29/10/2021
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardWrapper>
          <CardWrapper onClick={() => navigate("/company/news/news")}>
            <CardActionArea>
              <CardContent>
                <CardMediaWrapper
                  component="img"
                  height="100%"
                  image="https://aircompressors.com/wp-content/uploads/2019/04/product-NGPgroup.png"
                  alt="green iguana"
                />
                <Typography className="Description" component={"P"}>
                  {ready ? t("home.bottom.description2") : []}
                </Typography>
                <Typography fontSize={"13px"} color={"#9A9693"} component={"P"}>
                  29/10/2021
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardWrapper>
          <CardWrapper onClick={() => navigate("/company/news/news")}>
            <CardActionArea>
              <CardContent>
                <Box>
                  <Typography className="Description" component={"P"}>
                    {ready ? t("home.bottom.description3") : []}
                  </Typography>
                  <Typography
                    fontSize={"13px"}
                    color={"#9A9693"}
                    component={"P"}
                  >
                    29/10/2021
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </CardWrapper>
          <CardWrapper onClick={() => navigate("/company/news/news")}>
            <CardActionArea>
              <CardContent>
                <Box>
                  <Typography className="Description" component={"P"}>
                    {ready ? t("home.bottom.description3") : []}
                  </Typography>
                  <Typography
                    fontSize={"13px"}
                    color={"#9A9693"}
                    component={"P"}
                  >
                    29/10/2021
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </CardWrapper>
          <CardWrapper onClick={() => navigate("/company/news/news")}>
            <CardActionArea>
              <CardContent>
                <CardMediaWrapper
                  component="img"
                  height="100%"
                  image="https://aircompressors.com/wp-content/uploads/2019/04/product-NGPgroup.png"
                  alt="green iguana"
                />
                <Typography className="Description" component={"P"}>
                  {ready ? t("home.bottom.description3") : []}
                </Typography>
                <Typography fontSize={"13px"} color={"#9A9693"} component={"P"}>
                  29/10/2021
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardWrapper>
          <CardWrapper onClick={() => navigate("/company/news/news")}>
            <CardActionArea>
              <CardContent>
                <CardMediaWrapper
                  component="img"
                  height="100%"
                  image="https://aircompressors.com/wp-content/uploads/2019/04/product-NGPgroup.png"
                  alt="green iguana"
                />
                <Typography className="Description" component={"P"}>
                  {ready ? t("home.bottom.description3") : []}
                </Typography>
                <Typography fontSize={"13px"} color={"#9A9693"} component={"P"}>
                  29/10/2021
                </Typography>
              </CardContent>
            </CardActionArea>
          </CardWrapper>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default News;
