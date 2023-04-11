import searchView from './views/searchView.js';
import module from './module.js';
import recipePreview from './views/recipePreview.js';
import animationView from './views/animationView.js';
function App() {
  async function controlSearch() {
    try {
      const query = searchView.getQuery();
      recipePreview.clearList();
      animationView.startAnimation();
      await module.loadRecipes(query);
      console.log(module.state.recipes);
      animationView.endAnimation();
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
