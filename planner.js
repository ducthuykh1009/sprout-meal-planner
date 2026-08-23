const recipes = [
  { name: "ginger noodles", tags: ["quick", "vegetarian"] },
  { name: "citrus rice bowl", tags: ["fresh", "vegetarian"] },
  { name: "tomato lentils", tags: ["batch", "vegan"] },
];
const days = Number(process.argv[2]) || 7;
console.table(Array.from({ length: days }, (_, day) => ({ day: day + 1, meal: recipes[day % recipes.length] })));
