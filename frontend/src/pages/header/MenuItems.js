import { IoCall } from "react-icons/io5";
import { FaSignInAlt } from "react-icons/fa";
// import { RiCustomerServiceFill } from "react-icons/ri";
import { BsFillHouseFill } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { SiShopify } from "react-icons/si";
import { GiBananaBunch } from "react-icons/gi";
import { GiTomato } from "react-icons/gi";
import { GiMilkCarton } from "react-icons/gi";
import { GrDeliver } from "react-icons/gr";
import { BiStreetView } from "react-icons/bi";
import { SiGooglemybusiness } from "react-icons/si";
export const MenuItems = [
  {
    linkIcon: <BsFillHouseFill />,
    title: "home",
    path: "/",
    cname: "nav-link",
  },
  {
    linkIcon: <SiShopify />,

    title: "products",
    path: "/products",
    cname: "nav-link",
    subMenu: [
      {
        linkIcon: <GiBananaBunch />,
        title: "fruits",
        path: "/products/fruits",
        cname: "nav-link",
      },
      {
        linkIcon: <GiTomato />,
        title: "vegetables ",
        path: "/products/vegetables",
        cname: "nav-link",
      },
      {
        linkIcon: <GiMilkCarton />,
        title: "Milk",
        path: "/products/dairy",
        cname: "nav-link",
      },
    ],
  },
  {
    linkIcon: <RiCustomerService2Fill />,

    title: "services",
    path: "/services",
    cname: "nav-link",
    subMenu: [
      {
        linkIcon: <GrDeliver />,
        title: "home delivery",
        path: "/home-delivery",
        cname: "nav-link",
      },
      {
        linkIcon: <BiStreetView />,
        title: "whole sale ",
        path: "/wholesale",
        cname: "nav-link",
      },
      {
        linkIcon: <SiGooglemybusiness />,
        title: "functions contract",
        path: "/functions-contract",
        cname: "nav-link",
      },
    ],
  },
  {
    linkIcon: <IoCall />,

    title: "contact us",
    path: "/contact-us",
    cname: "nav-link",
  },
  {
    linkIcon: <FaSignInAlt />,

    title: "login",
    path: "/login",
    cname: "nav-link",
  },
];
