import {
  Box,
  Button,
  Container,
  MobileStepper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import {
  ItemRight,
  ItemLeft,
  ItemWrapper,
  Wrapper,
} from "./style-nitrogen-generaotrs-llo";
import { Images } from "./images";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const NitrogenGeneraotrsllo = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Wrapper>
      <Box className="Content"></Box>
      <ItemWrapper data-aos="fade-up" data-aos-duration="2000">
        <ItemLeft>
          <Typography fontWeight={600} variant="h5">
            NITROGEN GENERATORS LL0
          </Typography>
          <Typography mb={2} mt={2}>
            Small nitrogen generators (LL0 series) are economical devices for
            continuous and reliable nitrogen production directly on site,
            requiring only a compressed air supply. This compact generator is
            used in applications with low nitrogen demand that currently use
            high-pressure gas cylinders. The offered device eliminates hazards
            that may occur in connection with the use of cylinders.
          </Typography>
          <Box className="download">
            <Button className="ButtonDownload" variant="contained" sx={{}}>
              Download the Brochure
            </Button>
            <Box className="ItemImg">
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {Images.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 350,
                          display: "block",
                          maxWidth: 500,
                          maxHeight: 500,
                          objectFit: "contain",
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>
          </Box>
        </ItemLeft>
        <ItemRight>
          <Box className="List">
            <Typography ml={3}>Applications:</Typography>
            <ul>
              <li>
                Laboratories (as inert gas for chromatographs, mass
                spectrometer),
              </li>
              <li>
                Laboratories (as inert gas for chromatographs, mass
                spectrometer),
              </li>
              <li>
                Laboratories (as inert gas for chromatographs, mass
                spectrometer),
              </li>
              <li>
                Laboratories (as inert gas for chromatographs, mass
                spectrometer),
              </li>
              <li>
                Laboratories (as inert gas for chromatographs, mass
                spectrometer),
              </li>
              <li>
                Laboratories (as inert gas for chromatographs, mass
                spectrometer),
              </li>
            </ul>
          </Box>
        </ItemRight>
      </ItemWrapper>
    </Wrapper>
  );
};

export default NitrogenGeneraotrsllo;
