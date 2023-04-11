class AnimationView {
  _spinnerContainer = document.querySelector('.loading__animation');
  startAnimation() {
    this._spinnerContainer.classList.remove('hidden');
  }

  endAnimation() {
    this._spinnerContainer.classList.add('hidden');
  }
}

export default new AnimationView();
