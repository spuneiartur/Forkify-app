import { Fraction } from 'fractional';
class RecipeView {
  _bodyContainer = document.querySelector('.main__recipe_view_container');
  _spinnerContainer = document.querySelector('.loading__animation_recipe-view');
  _servingsContainer = document.querySelector('.modifying__servings_container');
  _servingsPlusBtn = document.querySelector('.fa-circle-plus');
  _servingsMinusBtn = document.querySelector('.fa-circle-minus');
  _messageContainer = document.querySelector('.main__message_container');
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
    this._bodyContainer.innerHTML = '';
  }
  renderContent(recipe) {
    const markup = `
    <div class="recipe__view_img_container _ibg">
                  <img src="${recipe.image_url}" alt="recipe_image" />
                  <div class="recipe__title_container">
                    <span class="recipe__title"
                      >${recipe.title}</span
                    >
                  </div>
                </div>
                <div class="recipe__view_header">
                  <div class="timer__container">
                    <i class="fa-regular fa-clock"></i>
                    <span class="receipt__time"
                      ><span class="receipt__timer_value">${
                        recipe.cooking_time
                      }</span>
                      minutes</span
                    >
                  </div>
                  <div class="servings__container">
                    <i class="fa-solid fa-user-group"></i>
                    <span class="receipt__servings"
                      ><span class="receipt__servings_value">${
                        recipe.currentServings
                      }</span>
                      servings</span
                    >
                  </div>
                  <div class="modifying__servings_container">
                    <i class="fa-solid fa-circle-plus"></i>
                    <i class="fa-solid fa-circle-minus"></i>
                  </div>
                  <div class="bookmark__icon_container">
                    <div class="bookmark__icon_background">
                    ${
                      recipe.bookmarked
                        ? '<i class="fa-solid fa-bookmark"></i>'
                        : ' <i class="fa-regular fa-bookmark"></i>'
                    }
                    </div>
                  </div>
                </div>
                <div class="recipe__view_body">
                  <div class="recipe__body_title">
                    <h2 class="recipe__ingredients_title">
                      recipe ingredients
                    </h2>
                  </div>
                  <ul class="receipt__items">
                  ${recipe.ingredients.reduce(
                    (add, ingr) =>
                      add +
                      ` <li>${
                        ingr.quantity
                          ? new Fraction(
                              ingr.quantity *
                                (Math.round(
                                  (recipe.currentServings / recipe.servings) *
                                    10
                                ) /
                                  10)
                            ).toString()
                          : ''
                      } ${ingr.unit} ${ingr.description}</li>`,
                    ''
                  )}
                  </ul>
                </div>
                <div class="recipe__view_footer">
                  <div class="recipe__footer_container">
                    <div class="recipe__footer_title">How to cook it</div>
                    <div class="recipe__footer_subtitle">
                    This recipe was carefully designed and tested by ${
                      recipe.publisher
                    }. Please check out directions at their website.
                    </div>
                    <div class="recipe__footer_btn_container">
                      <div class="recipe__footer_btn">
                      <a class="footer__btn_text" href="${
                        recipe.source_url
                      }">Directions</a>
                        <span class="footer__btn_icon">&rarr;</span>
                      </div>
                    </div>
                  </div>
                </div>
    `;

    return markup;
  }

  renderView(recipe) {
    const markup = this.renderContent(recipe);

    this._bodyContainer.insertAdjacentHTML('afterbegin', markup);
  }

  addHandlerHashChange(handler) {
    window.addEventListener('hashchange', function (e) {
      const id = location.hash.slice(1);
      handler(id);
    });
  }

  addHandlerChangeServings(handler) {
    document.addEventListener('click', function (e) {
      if (
        !e.target.closest('.fa-circle-plus') &&
        !e.target.closest('.fa-circle-minus')
      ) {
        return;
      }
      let ok;
      if (e.target.closest('.fa-circle-plus')) {
        ok = true;
      }
      if (e.target.closest('.fa-circle-minus')) {
        ok = false;
      }

      handler(ok);
    });
  }
}

export default new RecipeView();
