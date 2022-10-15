import { ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export const menuList = ({ t, ready }) => {
  return [
    {
      key: "/",
      label: `${ready ? t("header.HOME") : []} `,
    },
    {
      key: "/company",
      label: (
        <NavLink
          to="/company"
          style={{ display: "flex", alignItems: "center" }}
        >
          {ready ? t("header.item2.COMPANY") : []}
          <ExpandMore />
        </NavLink>
      ),
      icon: "",
      children: [
        {
          key: "quality",
          label: (
            <a href="#quality">
              {ready ? t("header.item2.QUALITY POLICY") : []}
            </a>
          ),
        },
        {
          key: "social",
          label: (
            <a href="#social">
              {ready ? t("header.item2.SOCIAL ACTIVITIES") : []}
            </a>
          ),
        },
        {
          key: "sertificate",
          label: (
            <a href="#sertificate">
              {ready ? t("header.item2.SERTIFICATE") : []}
            </a>
          ),
        },
        {
          key: "news",
          label: <a href="#news">{ready ? t("header.item2.NEWS") : []}</a>,
        },
      ],
    },
    {
      key: "/products",
      label: (
        <NavLink
          to="/products"
          style={{ display: "flex", alignItems: "center" }}
        >
          {ready ? t("header.item3.PRODUCTS") : []}
          <ExpandMore />
        </NavLink>
      ),
      children: [
        {
          key: "/nitrogen-generators",
          label: `${ready ? t("header.item3.NITROGEN GANARATORES") : []}`,
        },
        {
          key: "/project",
          label: `${ready ? t("header.item3.PROJECT") : []}`,
        },
        {
          key: "/project/test-bench",
          label: `${ready ? t("header.item3.TEST BENCHES") : []}`,
        },
        {
          key: "/project/dry-gas-seal-rack",
          label: `${ready ? t("header.item3.DRY GAS SEAL RACK") : []}`,
        },
        {
          key: "/project/train-brake-test-systems",
          label: `${ready ? t("header.item3.TRAIN BRAKE TEST SYSTEMS") : []}`,
        },
        {
          key: "/project/green-energy-automatics",
          label: `${ready ? t("header.item3.GREEN ENERGY AUTOMATICS") : []}`,
        },
        {
          key: "/project/auxiliary-units",
          label: `${ready ? t("header.item3.AXUILIARY UNITS") : []}`,
        },
      ],
    },
    {
      key: "/services",
      label: (
        <NavLink
          to="/services"
          style={{ display: "flex", alignItems: "center" }}
        >
          {ready ? t("header.item4.SERVICES") : []}
          <ExpandMore />
        </NavLink>
      ),
      children: [
        {
          key: "designing",
          label: (
            <a href="#designing">{ready ? t("header.item4.DESIGNING") : []}</a>
          ),
        },
        {
          key: "calculations",
          label: (
            <a href="#calculations">
              {ready ? t("header.item4.CALCULATIONS") : []}
            </a>
          ),
        },
        {
          key: "projects",
          label: (
            <a href="#projects">{ready ? t("header.item4.PROJECTS") : []}</a>
          ),
        },
        {
          key: "service",
          label: (
            <a href="#service">{ready ? t("header.item4.SERVICE") : []}</a>
          ),
        },
      ],
    },
    {
      key: "/european-funds",
      label: `${ready ? t("header.EUROPEN FUNDS") : []}`,
    },
    {
      key: "/careers",
      label: `${ready ? t("header.CAREERS") : []}`,
    },
    {
      key: "/contact",
      label: `${ready ? t("header.CONTACT") : []}`,
    },
  ];
};
