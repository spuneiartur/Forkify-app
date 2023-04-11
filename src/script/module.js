import RESULT_PER_PAGE from './env';
class Module {
  state = {
    recipes: [],
    currentPage: 1,
    resultsPerPage: RESULT_PER_PAGE,
  };

  loadPageResults(goToPage) {
    const maxPage = Math.ceil(
      this.state.recipes.length / this.state.resultsPerPage
    );
    if (goToPage > 1 && goToPage < maxPage) {
      const pageResults = this.state.recipes.slice(
        (goToPage - 1) * 10 + 1,
        goToPage * 10 + 1
      );
      this.state.currentPage = goToPage;
      console.log(pageResults);
      return {
        pageResults: pageResults,
        currentPage: this.state.currentPage,
        maxPage: maxPage,
      };
    } else {
      return undefined;
    }
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
