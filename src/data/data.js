import { FiPackage } from "react-icons/fi";
import { FaCrown, FaPlane } from "react-icons/fa";

export const infoSectionData = [
  {
    id: 1,
    title: "The Best Selection",
    icon: <FaCrown />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus id lorem id sodales. Nullam scelerisque tellus velit, a tempor eros pharetra vel. Ut tristique velit ligula, at congue magna scelerisque a. ",
  },
  {
    id: 2,
    title: "Worldwide Delivery",
    icon: <FaPlane />,
    content:
      "Quisque vel euismod enim. Quisque dapibus, felis id aliquam tristique, justo risus maximus magna, vitae rutrum velit neque non ex. Nulla commodo tellus a tempor feugiat. Nam vitae nisl non elit condimentum bibendum.",
  },
  {
    id: 3,
    title: "Safe & Discrete Delivery",
    icon: <FiPackage />,
    content:
      "Vestibulum ac lectus et dolor congue congue. Mauris augue neque, varius in nisi a, imperdiet pellentesque est. Aliquam non metus ut ex interdum tincidunt in quis arcu. Cras vel enim nulla.",
  },
];

export const initialCart = [
  {
    id: 666,
    image: "https://placebear.com/300/200",
    name: "Example Beer",
    unitPrice: 1.0,
    quantity: 1,
  },
  {
    id: 667,
    image: "https://placebear.com/300/200",
    name: "Example Beer",
    unitPrice: 2.0,
    quantity: 3,
  },
];
