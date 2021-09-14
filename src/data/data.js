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

export const dummyBlog = {
  id: 1,
  title: "Article's Title",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit at mauris imperdiet ultricies. 
    Praesent eu justo ut libero ornare cursus. Morbi viverra, sem eu semper finibus, turpis purus facilisis purus, in pulvinar nunc est ut leo. Duis tempor sodales eleifend. Nunc eu massa sodales, fringilla massa sed, laoreet mi. 
    Sed cursus, dolor in volutpat pellentesque, lorem felis consectetur augue, luctus blandit augue sapien vel neque. Quisque ullamcorper accumsan arcu, nec sollicitudin massa sodales ut. Phasellus eget nibh nibh.Which also. Heaven great. Divided fifth brought they're deep. Abundantly fourth dominion won't. Upon yielding light doesn't gathering grass said beginning you're fowl midst. Great greater.

    In cattle rule. I all thing tree morning fish years. Cattle likeness doesn't fish creepeth creeping you midst greater grass. Stars yielding won't above firmament moved you'll. Yielding hath second years great very fly is a for. Signs fill give every may. Creeping. Creeping fill night signs It, under. Were Him you're without signs great first form, third tree whose.
    
    Made together give place winged. Saw seas creeping fish it creepeth brought. Set they're winged midst fowl Cattle darkness air darkness is under was sea deep living, together creepeth in and and divided dry Firmament image after rule. Had for moveth divide give fly. Whose made, life.
    
    Tree moving life. Whales good firmament blessed called under you're their darkness multiply herb fruit. Fowl life open him evening they're moveth saw. One without dry deep sea fruit replenish rule. Had fruitful day one they're fowl firmament together him third fruitful the blessed divide have. Lesser a you fruitful good. Female. May was him our winged in land. Male herb our green rule a moved made.`,
  image: "https://placebear.com/350/200",
};
