/** Starting prices. Change them here and the homepage updates. */
export const pricingNote = "Every project gets a quote after a quick call.";

export const plans = [
  {
    name: "Landing Page",
    lead: "Starting at",
    price: "$100",
    description: "One focused page that gets people to call, book or buy.",
    addOn: false,
  },
  {
    name: "Business Website",
    lead: "Starting at",
    price: "$300",
    description: "Up to 5 pages. Everything customers need to choose you.",
    addOn: false,
  },
  {
    name: "Premium Website",
    lead: "Starting at",
    price: "$500",
    description: "Up to 8 pages, with room for galleries, more services and more detail.",
    addOn: false,
  },
  {
    name: "Custom form add-on",
    lead: "Add to any site",
    price: "+$100",
    description: "Quote requests, intake or booking forms that land in your inbox.",
    addOn: true,
  },
] as const;
