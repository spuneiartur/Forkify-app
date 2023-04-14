class BookMark {
  addHandlerClickIcon(handler) {
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.bookmark__icon_background')) return;

      console.log('Clicked!');
    });
  }
}

export default new BookMark();
