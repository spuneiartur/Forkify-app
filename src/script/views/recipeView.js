class RecipeView {
  addHandlerHashChange(handler) {
    window.addEventListener('hashchange', function (e) {
      handler();
    });
  }
}

export default new RecipeView();
