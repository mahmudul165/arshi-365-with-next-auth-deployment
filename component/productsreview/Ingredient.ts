export interface Ingredient {
  para: string;
  label: string;
}

export const allIngredients = [
  {
    para: "Details: This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  ",

    label: "Details",
  },
  {
    para: "More info This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  ",
    label: "More information",
  },
  {
    para: "Reviews This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer  ",
    label: "Reviews",
  },
];

const [Details, MoreInformation, Reviews] = allIngredients;
export const initialTabs = [Details, MoreInformation, Reviews];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
