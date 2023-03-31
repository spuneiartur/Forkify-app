class Controller {
  constructor() {}
}

async function getRecipe() {
  const res = await fetch(
    'https://forkify-api.herokuapp.com/api/search?q=pizza'
  );
  const { recipes } = await res.json();
  console.log(recipes);
}

getRecipe();
