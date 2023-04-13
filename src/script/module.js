import { RESULT_PER_PAGE } from './env';
import { API_KEY } from './env';
import recipePreview from './views/recipePreview';
class Module {
  activeRecipe;
  state = {
    recipes: [],
    currentPage: 1,
    resultsPerPage: RESULT_PER_PAGE,
  };

  loadPageResults(goToPage) {
    const maxPage = Math.ceil(
      this.state.recipes.length / this.state.resultsPerPage
    );
    if (goToPage >= 1 && goToPage <= maxPage) {
      this.state.currentPage = goToPage;
    }
  }

  async loadRecipe(id) {
    try {
      const result = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      if (!result.ok) throw new Error('The recipe was not found 💥');
      const { data } = await result.json();
      const { recipe } = data;
      this.activeRecipe = recipe;

      return recipe;
    } catch (err) {
      throw err;
    }
  }

  async loadRecipes(query) {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );

      const { ok } = res;
      if (!ok) {
        throw new Error('Receipt was not found for your input...💥');
      }
      const { data } = await res.json();
      const { recipes } = data;
      this.state.recipes = recipes;
    } catch (err) {
      throw err;
    }
  }
}

export default new Module();
