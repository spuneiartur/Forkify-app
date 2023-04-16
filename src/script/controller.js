import searchView from './views/searchView.js';
import module from './module.js';
import recipePreview from './views/recipePreview.js';
import recipeView from './views/recipeView.js';
import bookmarkView from './views/bookmarkView.js';
function App() {
  location.hash = '';
  module.readLocalStorage();
  bookmarkView.renderView(module.state.bookmarkedRecipes);
  // module.clearLocalStorage();
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
      if (location.hash == '') {
        return;
      }
      recipeView.hideMessage();
      recipeView.clearHTML();
      recipeView.startAnimation();
      recipeView.renderView(await module.loadRecipe(id));
    } catch (err) {
      throw err;
    } finally {
      recipeView.endAnimation();
    }
  }

  function controlChangeServings(ok) {
    if (ok === true) {
      module.activeRecipe.currentServings++;
    } else if (ok === false && module.activeRecipe.currentServings > 1) {
      module.activeRecipe.currentServings--;
    } else {
      return;
    }
    recipeView.clearHTML();
    recipeView.renderView(module.activeRecipe);
  }

  function controlBookMarkClicked() {
    if (module.checkRecipeBookmarked()) {
      module.unbookmarkRecipe();
    } else {
      module.bookmarkRecipe();
    }
    recipeView.clearHTML();
    recipeView.renderView(module.activeRecipe);
    bookmarkView.renderView(module.state.bookmarkedRecipes);
  }

  function controlBookmarkOnHover() {}

  function addingHandlers() {
    searchView.addHandlerSearch(controlSearch);
    recipePreview.addHandlerPagination(controlPagination);
    recipePreview.addHandlerPreviewClick();
    recipeView.addHandlerHashChange(controlHashChange);
    recipeView.addHandlerChangeServings(controlChangeServings);
    bookmarkView.addHandlerClickBookmark(controlBookMarkClicked);
    bookmarkView.addHandlerHoverBookmark(controlBookmarkOnHover);
  }
  addingHandlers();
}

App();
