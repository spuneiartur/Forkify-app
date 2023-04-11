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
      Math.ceil(state.recipes.length / state.resultsPerPage)
    ) {
      this._nextBtn.classList.add('hidden');
    }
    const pageResults = state.recipes.slice(
      (state.currentPage - 1) * state.resultsPerPage + 1,
      state.currentPage * state.resultsPerPage + 1
    );
    const markup = this.renderContent(pageResults);
    this._recipesListContainer.innerHTML = '';
    this._recipesListContainer.insertAdjacentHTML('afterbegin', markup);
    this._prevBtn.dataset.info = (parseInt(state.currentPage) - 1).toString();

    this._prevBtn.innerHTML = '';
    this._prevBtn.insertAdjacentHTML(
      'afterbegin',
      `<span class="pagination__btn_text">
        <span class="pagination__arrow">&larr;</span> Page ${this._prevBtn.dataset.info}
      </span>`
    );

    this._nextBtn.dataset.info = (parseInt(state.currentPage) + 1).toString();
    this._nextBtn.innerHTML = '';
    this._nextBtn.insertAdjacentHTML(
      'afterbegin',
      `<span class="pagination__btn_text">
        <span class="pagination__arrow">&rarr;</span> Page ${this._nextBtn.dataset.info}
      </span>`
    );
  }

  addHandlerPagination(handler) {
    function eventFunction(e) {
      if (!e.target.closest('.pagination__btn')) return;
      const goToPage = parseInt(
        e.target.closest('.pagination__btn').dataset.info
      );
      handler(goToPage);
    }

    this._buttons.forEach(btn =>
      btn.addEventListener('click', eventFunction.bind(this))
    );
  }
}

export default new RecipePreview();
