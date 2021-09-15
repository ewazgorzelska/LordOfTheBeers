import { FiPackage } from "react-icons/fi";
import { FaCrown, FaPlane } from "react-icons/fa";

export const data = [
  {
    id: 1,
    name: "Buzz",
    tagline: "A Real Bitter Experience.",
    first_brewed: "09/2007",
    description:
      "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.",
    image_url: "https://images.punkapi.com/v2/keg.png",
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    attenuation_level: 75,
    volume: {
      value: 20,
      unit: "litres",
    },
    boil_volume: {
      value: 25,
      unit: "litres",
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 64,
            unit: "celsius",
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: "celsius",
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: "Maris Otter Extra Pale",
          amount: {
            value: 3.3,
            unit: "kilograms",
          },
        },
        {
          name: "Caramalt",
          amount: {
            value: 0.2,
            unit: "kilograms",
          },
        },
        {
          name: "Munich",
          amount: {
            value: 0.4,
            unit: "kilograms",
          },
        },
      ],
      hops: [
        {
          name: "Fuggles",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "First Gold",
          amount: {
            value: 25,
            unit: "grams",
          },
          add: "start",
          attribute: "bitter",
        },
        {
          name: "Fuggles",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "First Gold",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "middle",
          attribute: "flavour",
        },
        {
          name: "Cascade",
          amount: {
            value: 37.5,
            unit: "grams",
          },
          add: "end",
          attribute: "flavour",
        },
      ],
      yeast: "Wyeast 1056 - American Ale™",
    },
    food_pairing: [
      "Spicy chicken tikka masala",
      "Grilled chicken quesadilla",
      "Caramel toffee cake",
    ],
    brewers_tips:
      "The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.",
    contributed_by: "Sam Mason <samjbmason>",
  },
];

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
