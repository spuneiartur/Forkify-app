class RecipePreview {
  _prevBtn = document.querySelector('.pagination__btn--left');
  _nextBtn = document.querySelector('.pagination__btn--right');
  _buttons = document.querySelectorAll('.pagination__btn');
  _recipesListContainer = document.querySelector('.recipe__preview_container');
  _data;
  constructor() {}

  renderContent(recipes) {
    let markup = '';
    recipes.forEach(
      recipe =>
        (markup += `
    <div class="recipe__list_element">
      <div class="preview__img_container _ibg">
        <img
          src="${recipe.image_url}"
          alt="recipe_img_preview"
        />
      </div>
      <span class="preview__title"
        >${recipe.title}</span
      >
      <span class="preview__subtitle">${recipe.publisher}</span>
    </div>`)
    );

    return markup;
  }

  renderView(state) {
    this._prevBtn.classList.remove('hidden');
    this._nextBtn.classList.remove('hidden');
    if (state.currentPage === 1) {
      this._prevBtn.classList.add('hidden');
    }
    if (
      state.currentPage ===
      Math.ceil(state.recipes.length / state.resultPerPage)
    ) {
      this._nextBtn.classList.add('hidden');
    }

    const markup = this.renderContent(state.recipes);
    this._recipesListContainer.innerHTML = '';
    this._recipesListContainer.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerPagination(handler) {
    function eventFunction(e) {
      if (!e.target.closest('.pagination__btn')) return;

      const goToPage = e.target.closest('.pagination__btn').dataset.info;
      this._data = handler(goToPage);
      if (this._data && this._data.pageResults.length) {
        this.renderView();
      }
    }

    this._buttons.forEach(btn =>
      btn.addEventListener('click', eventFunction.bind(this))
    );
  }
}

export default new RecipePreview();
