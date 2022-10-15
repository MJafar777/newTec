import { Box, Grid, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import usePagination from "./settings";
import { ImagesData } from "./images";
import { Wrapper } from "./style-pagination";
import { Image } from "antd";

const PaginationPage = () => {
  const [data, setData] = useState(ImagesData);
  const [page, setPage] = useState(1);
  const PER_PAGE = 4;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Grid container data-aos="fade-up" data-aos-duration="2000">
        <Box className="ImgContainer">
          <Image.PreviewGroup
            preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
          >
            {_DATA.currentData().map(({ label, imgPath }) => {
              return (
                <Box key={label}>
                  <Image
                    className="ImgItem"
                    width={250}
                    height={200}
                    src={imgPath}
                  />
                  <Typography>{label}</Typography>
                </Box>
              );
            })}
          </Image.PreviewGroup>
        </Box>
      </Grid>
      <Box className="border"></Box>
      <Pagination
        className="pagination"
        size="small"
        count={count}
        page={page}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default PaginationPage;
