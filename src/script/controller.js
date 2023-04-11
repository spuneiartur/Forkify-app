import searchView from './views/searchView.js';
import module from './module.js';
import recipePreview from './views/recipePreview.js';
function App() {
  async function controlSearch() {
    try {
      const query = searchView.getQuery();
      await module.loadRecipes(query);
      console.log(module.state.recipes);
      recipePreview.renderView(module.state);
    } catch (err) {
      console.error(err);
    }
  }

  function controlPagination(goToPage) {
    module.loadPageResults(goToPage);
    recipePreview.renderView(module.state);
  }

  function addingHandlers() {
    searchView.addHandlerSearch(controlSearch);
    recipePreview.addHandlerPagination(controlPagination);
  }
  addingHandlers();
}

App();
