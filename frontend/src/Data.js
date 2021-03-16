import apple1 from "./images/fruits/apple1.jpeg";
import banana from "./images/fruits/banana.jpeg";
import blackGrapes from "./images/fruits/grapes-black.jpeg";
import grapesRed from "./images/fruits/grapes-red.jpeg";
import grapesReg from "./images/fruits/grapes-regular.jpeg";
import mangoBadam from "./images/fruits/mango-badam.jpeg";
import mangoGreen from "./images/fruits/mango-green.jpeg";
import mango1 from "./images/fruits/mango1.jpeg";
import oranges from "./images/fruits/orange1.jpeg";
import papaya from "./images/fruits/papaya1.jpeg";
import bellPepper from "./images/vegetables/bell-pepper.jpeg";
import brocculi from "./images/vegetables/brocculi.jpeg";
import cabbage from "./images/vegetables/cabbage.jpeg";
import cauliflower from "./images/vegetables/cauliflower.jpeg";
import coriander from "./images/vegetables/coriander.jpeg";
import eggplant from "./images/vegetables/eggplant.jpeg";
import eggplant2 from "./images/vegetables/eggplant2.jpeg";
import garlic from "./images/vegetables/garlic.jpeg";
import ginger from "./images/vegetables/ginger.jpeg";
import greenCapsicum from "./images/vegetables/green-capsicum.jpeg";
import greenChillies from "./images/vegetables/green-chillies.jpeg";
import lemons from "./images/vegetables/lemons.jpeg";
import onions from "./images/vegetables/onions.jpeg";
import pumpkin from "./images/vegetables/pumpkin.jpeg";
import spinach1 from "./images/vegetables/spinach1.jpeg";
import spinach2 from "./images/vegetables/spinach2.jpeg";
import tomato from "./images/vegetables/tomato.jpeg";
import ybPepper from "./images/vegetables/yellow-bell-pepper.jpeg";

// carousel slider import here
// import caro1 from "./images/adds/caro1.jpeg";
import caro2 from "./images/adds/caro2.jpg";
import caro3 from "./images/adds/caro3.jpg";
import caro4 from "./images/adds/caro4.jpg";

// clients list
import { FaHotjar } from "react-icons/fa";
import { FaGulp } from "react-icons/fa";
import { FaKickstarterK } from "react-icons/fa";
import { FaCheese } from "react-icons/fa";
import { FaFish } from "react-icons/fa";

const data = {
  products: [
    {
      _id: "1",
      name: "apple",
      category: "fruit",
      image: apple1,
      price: 120,
      quantity: 0,
      rating: 2.5,
      numReviews: 110,
      description: "fresh apples directly available from farm",
      deals: true,
    },
    {
      _id: "2",
      name: "banana",
      category: "fruit",
      image: banana,
      price: 30,
      quantity: 100,
      rating: 4.8,
      numReviews: 17,
      description: "fresh banana directly available from farm",
    },
    {
      _id: "3",
      name: "black grapes ",
      category: "fruit",
      image: blackGrapes,
      price: 60,
      quantity: 100,
      rating: 4.1,
      numReviews: 28,
      description: "fresh black grapes directly available from farm",
      deals: true,
    },
    {
      _id: "4",
      name: "grapes (red)",
      category: "fruit",
      image: grapesRed,
      price: 70,
      quantity: 0,
      rating: 4,
      numReviews: 16,
      description: "fresh red grapes directly available from farm",
    },
    {
      _id: "5",
      name: "grapes (regular)",
      category: "fruit",
      image: grapesReg,
      price: 50,
      quantity: 100,
      rating: 3.8,
      numReviews: 154,
      description: "fresh grapes directly available from farm",
    },
    {
      _id: "6",
      name: "mango (Badam)",
      category: "fruit",
      image: mangoBadam,
      price: 60,
      quantity: 0,
      rating: 4.9,
      numReviews: 207,
      description: "fresh mangoes directly available from farm",
    },
    {
      _id: "7",
      name: "mango",
      category: "fruit",
      image: mangoGreen,
      price: 50,
      quantity: 0,
      rating: 3.5,
      numReviews: 79,
      description: "fresh mangoes directly available from farm",
    },
    {
      _id: "8",
      name: "mango",
      category: "fruit",
      image: mango1,
      price: 80,
      quantity: 0,
      rating: 4.2,
      numReviews: 99,
      description: "fresh mangoes directly available from farm",
      deals: true,
    },
    {
      _id: "9",
      name: "oranges",
      category: "fruit",
      image: oranges,
      price: 25,
      quantity: 100,
      rating: 4.4,
      numReviews: 123,
      description: "fresh oranges directly available from farm",
      deals: true,
    },
    {
      _id: "10",
      name: "papaya",
      category: "fruit",
      image: papaya,
      price: 30,
      quantity: 100,
      rating: 3.6,
      numReviews: 188,
      description: "fresh papaya directly available from farm",
    },
    {
      _id: "11",
      name: "bell pepper",
      category: "vegetable",
      image: bellPepper,
      price: 60,
      quantity: 10,
      rating: 5,
      numReviews: 69,
      description: "fresh bell pepper directly available from farm",
    },
    {
      _id: "12",
      name: "broccoli",
      category: "vegetable",
      image: brocculi,
      price: 160,
      quantity: 0,
      rating: 2.5,
      numReviews: 8,
      description: "fresh broccoli directly available from farm",
    },
    {
      _id: "13",
      name: "cabbage",
      category: "vegetable",
      image: cabbage,
      price: 20,
      quantity: 100,
      rating: 5,
      numReviews: 201,
      description: "fresh cabbage directly available from farm",
    },
    {
      _id: "14",
      name: "cauliflower",
      category: "vegetable",
      image: cauliflower,
      price: 20,
      quantity: 100,
      rating: 4,
      numReviews: 258,
      description: "fresh cauliflower directly available from farm",
    },
    {
      _id: "15",
      name: "coriander",
      category: "vegetable",
      image: coriander,
      price: 5,
      quantity: 100,
      rating: 4.6,
      numReviews: 321,
      description: "fresh coriander directly available from farm",
    },
    {
      _id: "16",
      name: "eggplant",
      category: "vegetable",
      image: eggplant,
      price: 40,
      quantity: 100,
      rating: 3.1,
      numReviews: 33,
      description: "fresh eggplants directly available from farm",
    },
    {
      _id: "17",
      name: "eggplants",
      category: "vegetable",
      image: eggplant2,
      price: 30,
      quantity: 100,
      rating: 4.1,
      numReviews: 95,
      description: "fresh eggplants directly available from farm",
    },
    {
      _id: "18",
      name: "garlic",
      category: "vegetable",
      image: garlic,
      price: 180,
      quantity: 100,
      rating: 4.8,
      numReviews: 249,
      description: "fresh garlic directly available from farm",
    },
    {
      _id: "19",
      name: "ginger",
      category: "vegetable",
      image: ginger,
      price: 100,
      quantity: 100,
      rating: 4.3,
      numReviews: 272,
      description: "fresh ginger directly available from farm",
    },
    {
      _id: "20",
      name: "capsicum (green)",
      category: "vegetable",
      image: greenCapsicum,
      price: 40,
      quantity: 100,
      rating: 5,
      numReviews: 375,
      description: "fresh green capsicum directly available from farm",
      deals: true,
    },
    {
      _id: "21",
      name: "green chillies",
      category: "vegetable",
      image: greenChillies,
      price: 150,
      quantity: 100,
      rating: 5,
      numReviews: 343,
      description: "fresh green chillies directly available from farm",
    },
    {
      _id: "22",
      name: "lemons",
      category: "vegetable",
      image: lemons,
      price: 60,
      quantity: 100,
      rating: 4.7,
      numReviews: 269,
      description: "fresh lemons directly available from farm",
      deals: true,
    },
    {
      _id: "23",
      name: "onions",
      category: "vegetable",
      image: onions,
      price: 50,
      quantity: 100,
      rating: 4.2,
      numReviews: 401,
      description: "fresh onions directly available from farm",
    },
    {
      _id: "24",
      name: "pumpkin",
      category: "vegetable",
      image: pumpkin,
      price: 20,
      quantity: 100,
      rating: 3.4,
      numReviews: 55,
      description: "fresh pumpkin directly available from farm",
    },
    {
      _id: "25",
      name: "spinach",
      category: "vegetable",
      image: spinach1,
      price: 10,
      quantity: 100,
      rating: 4.6,
      numReviews: 269,
      description: "fresh spinach directly available from farm",
    },
    {
      _id: "26",
      name: "spinach",
      category: "vegetable",
      image: spinach2,
      price: 15,
      quantity: 100,
      rating: 4.7,
      numReviews: 150,
      description: "fresh spinach directly available from farm",
    },
    {
      _id: "27",
      name: "tomato",
      category: "vegetable",
      image: tomato,
      price: 40,
      quantity: 100,
      rating: 5,
      numReviews: 345,
      description: "fresh tomatoes directly available from farm",
    },
    {
      _id: "28",
      name: "bell pepper (yellow)",
      category: "vegetable",
      image: ybPepper,
      price: 120,
      quantity: 0,
      rating: 4.8,
      numReviews: 129,
      description: "fresh yellow bell pepper directly available from farm",
    },
  ],
};

//main product data here
export default data;

// carousel sliders here

export const carouselSliders = [
  {
    id: "1",
    sliderImage: caro2,
    title: "Hygienic Stores",
    subTitle: "Best practices followed to provide best of the best.",
    btnName: "Explore",
  },
  {
    id: "2",
    sliderImage: caro3,
    title: "Best Offers ",
    subTitle: "Stay healthy while saving on Healthy Veggies. ",
    btnName: "Explore",
  },
  {
    id: "3",
    sliderImage: caro4,
    title: "Try New",
    subTitle: "Enjoy some of the Rare Fruits/Veggies.",
    btnName: "Explore",
  },
];

export const clientList = [
  {
    _id: "1",
    logo: <FaHotjar />,
    name: "Hotel Suruchi",
  },
  {
    _id: "2",
    logo: <FaGulp />,
    name: "Juice Fresh",
  },
  {
    _id: "3",
    logo: <FaKickstarterK />,
    name: "Kids Corner",
  },
  {
    _id: "4",
    logo: <FaCheese />,
    name: "Chanchal Bakery",
  },
  {
    _id: "5",
    logo: <FaFish />,
    name: "Healthy Non-Veg",
  },
];
