class BookMark {
  _bookmarkListBtn = document.querySelector('.nav__bookmarks');
  _bookmarkListContainer = document.querySelector('.bookmark__list_container');
  _spinnerContainer = document.querySelector('.bookmark__anumation_container');
  startAnimation() {
    this._spinnerContainer.classList.remove('hidden');
  }

  endAnimation() {
    this._spinnerContainer.classList.add('hidden');
  }

  hideMessage() {
    this._messageContainer.classList.add('hidden');
  }
  clearHTML() {
    this._bookmarkListContainer.innerHTML = '';
  }
  renderContent(recipes) {
    let markup = '';
    recipes.forEach(
      recipe =>
        (markup += `
    <div class="recipe__list_element" data-id="${recipe.id}">
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

  renderView(bookmarkedRecipes) {
    const markup = this.renderContent(bookmarkedRecipes);
    this._bookmarkListContainer.querySelector(
      '.recipe__preview_container'
    ).innerHTML = '';
    this._bookmarkListContainer
      .querySelector('.recipe__preview_container')
      .insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerHoverBookmark(handler) {
    console.log(this._bookmarkListBtn);
    this._bookmarkListBtn.addEventListener('mouseover', function (e) {
      handler();
    });
  }

  addHandlerClickBookmark(handler) {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.bookmark__icon_background')) return;
      handler();
    });
  }
}

export default new BookMark();
