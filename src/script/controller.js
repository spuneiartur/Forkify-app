import searchView from './views/searchView.js';
import module from './module.js';
import recipePreview from './views/recipePreview.js';
function App() {
  async function controlSearch() {
    try {
      const query = searchView.getQuery();
      await module.loadRecipes(query);
      console.log(module.recipes);
    } catch (err) {
      console.error(err);
    }
  }

  function controlPagination() {}

  function addingHandlers() {
    searchView.addHandlerSearch(controlSearch);
    recipePreview.addHandlerPagination(controlPagination);
  }
  addingHandlers();
}

App();
