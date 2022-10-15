import {
  Card,
  CardActionArea,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CardContentItem, CardMediaWrapper, WrapperCard } from "./stylecard";

const Cards = () => {
  const navigate = useNavigate();

  return (
    <WrapperCard>
      <Container className="Container">
        <Grid
          container
          className="Grid"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Card
            sx={{
              maxWidth: 345,
              width: 345,
            }}
            onClick={() => navigate("/nitrogen-generators")}
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 1
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 2
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 3
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 4
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 5
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 6
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 7
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 7
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
                  variant="h5"
                  component="div"
                >
                  Lorem ipsum 9
                </Typography>
              </CardContentItem>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
    </WrapperCard>
  );
};

export default Cards;
