class BookMark {
  addHandlerClickBookmark(handler) {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.bookmark__icon_background')) return;
      handler();
    });
  }
}

export default new BookMark();
