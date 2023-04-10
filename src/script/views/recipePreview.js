class RecipePreview {
  _prevBtn = document.querySelector('.pagination__btn--left');
  _nextBtn = document.querySelector('.pagination__btn--right');
  _buttons = document.querySelectorAll('.pagination__btn');
  constructor() {}

  renderContent(recipes) {}

  renderView() {
    const paginationHTML = ``;
  }

  addHandlerPagination(handler) {
    function eventFunction(e) {
      if (!e.target.closest('.pagination__btn')) return;

      const goToPage = e.target.closest('.pagination__btn').dataset.info;
      handler(goToPage);
    }

    this._buttons.forEach(btn =>
      btn.addEventListener('click', eventFunction.bind(this))
    );
  }
}

export default new RecipePreview();
