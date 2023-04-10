import RESULT_PER_PAGE from './env';
class Module {
  state = {
    recipes: [],
    currentPage: 1,
    resultsPerPage: RESULT_PER_PAGE,
  };

  loadPage(goToPage) {
    const maxPage = Math.ceil(
      this.state.recipes.length / this.state.resultsPerPage
    );
  }

  async loadRecipes(query) {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${query}`
      );
      const { ok } = res;
      if (!ok) {
        throw new Error('Receipt was not found for your input...💥');
      }
      const { recipes } = await res.json();
      this.state.recipes = recipes;
    } catch (err) {
      throw err;
    }
  }
}

export default new Module();
