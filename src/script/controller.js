import searchView from './views/searchView.js';
import module from './module.js';
import recipePreview from './views/recipePreview.js';
import recipeView from './views/recipeView.js';
function App() {
  location.hash = '';

  async function controlSearch() {
    try {
      const query = searchView.getQuery();
      recipePreview.clearHTML();
      recipePreview.startAnimation();
      await module.loadRecipes(query);
      module.state.currentPage = 1;
      recipePreview.renderView(module.state);
    } catch (err) {
      console.error(err);
    } finally {
      recipePreview.endAnimation();
    }
  }

  function controlPagination(goToPage) {
    module.loadPageResults(goToPage);
    recipePreview.renderView(module.state);
  }

  async function controlHashChange(id) {
    try {
      recipeView.clearHTML();
      recipeView.startAnimation();
      recipeView.renderView(await module.loadRecipe(id));
    } catch (err) {
      throw err;
    } finally {
      recipeView.endAnimation();
    }
  }

  function addingHandlers() {
    searchView.addHandlerSearch(controlSearch);
    recipePreview.addHandlerPagination(controlPagination);
    recipePreview.addHandlerPreviewClick();
    recipeView.addHandlerHashChange(controlHashChange);
  }
  addingHandlers();
}

App();
