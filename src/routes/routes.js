import { useRoutes } from "react-router-dom";
import Company from "../pages/company/company";
import Home from "../pages/home/home";
import NitrogenGenerators from "../pages/nitrogen-generators/nitrogen-generators";
import Products from "../pages/products/products";
//products child
import Project from "../pages/pages/products/project/project";
import TestBench from "../pages/pages/products/test-bench/test-bench";
import DryGasSealRack from "../pages/pages/products/dry-gas-seal-rack/dry-gas-seal-rack";
import TrainBrakeTestSystems from "../pages/pages/products/train-brake-test-systems/train-brake-test-systems";
import GreenEnergyAutomatics from "../pages/pages/products/green-energy-automatics/green-energy-automatics";
import Auxiliary from "../pages/pages/products/auxiliary/auxiliary";
//project
import NitrogenGeneraotrsllo from "../pages/pages/products/project/nitrogen-generaotrs-llo/nitrogen-generaotrs-llo";

import Services from "../pages/services/services";
import EuropeanFunds from "../pages/european-funds/european-funds";
import Careers from "../pages/careers/careers";
import Contact from "../pages/contact/contact";
import Notfound from "../pages/notfound/notfound";

import NewsPages from "../pages/pages/company/news/newPages/newPages";

const Goo = () => {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/company",
      children: [
        { index: true, element: <Company /> },
        {
          path: "news",
          children: [{ path: "news", element: <NewsPages /> }],
        },
      ],
    },
    {
      path: "/products",
      element: <Products />,
    },
    {
      path: "/nitrogen-generators",
      element: <NitrogenGenerators />,
    },
    {
      path: "/project",
      children: [
        { index: true, element: <Project /> },
        { path: "nitrogen-generators-llo", element: <NitrogenGeneraotrsllo /> },
        { path: "test-bench", element: <TestBench /> },
        { path: "dry-gas-seal-rack", element: <DryGasSealRack /> },
        {
          path: "train-brake-test-systems",
          element: <TrainBrakeTestSystems />,
        },
        {
          path: "green-energy-automatics",
          element: <GreenEnergyAutomatics />,
        },
        {
          path: "auxiliary-units",
          element: <Auxiliary />,
        },
      ],
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/european-funds",
      element: <EuropeanFunds />,
    },
    {
      path: "/careers",
      element: <Careers />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);
};

export default Goo;
