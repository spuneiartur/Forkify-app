class SearchView {
  _searchBar = document.querySelector('.search__bar');
  _searchForm = document.querySelector('.search__container');

  getQuery() {
    return this._searchBar.value;
  }

  clearInput() {
    this._searchBar.value = '';
  }

  addHandlerSearch(handler) {
    this._searchForm.addEventListener('submit', function (e) {
      e.preventDefault();

      handler();
    });
  }
}

export default new SearchView();
