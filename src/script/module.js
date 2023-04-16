import { RESULT_PER_PAGE } from './env';
import { API_KEY } from './env';
import recipePreview from './views/recipePreview';
class Module {
  activeRecipe;
  state = {
    recipes: [],
    bookmarkedRecipes: [],
    currentPage: 1,
    resultsPerPage: RESULT_PER_PAGE,
  };

  readLocalStorage() {
    const storage = localStorage.getItem('bookmarks');
    if (storage) {
      this.state.bookmarkedRecipes = JSON.parse(storage);
    }
  }

  writeLocalStorage() {
    this.clearLocalStorage();
    localStorage.setItem(
      'bookmarks',
      JSON.stringify(this.state.bookmarkedRecipes)
    );
  }

  clearLocalStorage() {
    localStorage.clear('bookmarks');
  }

  bookmarkRecipe() {
    console.log(this.state.bookmarkedRecipes);
    this.state.bookmarkedRecipes.push(this.activeRecipe);
    this.activeRecipe.bookmarked = true;
    this.writeLocalStorage();
  }

  unbookmarkRecipe() {
    const index = this.state.bookmarkedRecipes.indexOf(this.activeRecipe);
    this.state.bookmarkedRecipes.splice(index, 1);
    this.activeRecipe.bookmarked = false;
    this.writeLocalStorage();
  }

  checkRecipeBookmarked(recipe = this.activeRecipe) {
    if (
      this.state.bookmarkedRecipes.find(rec => rec.id === this.activeRecipe.id)
    )
      return true;
    if (
      !this.state.bookmarkedRecipes.find(rec => rec.id === this.activeRecipe.id)
    )
      return false;
  }

  loadPageResults(goToPage) {
    const maxPage = Math.ceil(
      this.state.recipes.length / this.state.resultsPerPage
    );
    if (goToPage >= 1 && goToPage <= maxPage) {
      this.state.currentPage = goToPage;
    }
  }

  async loadRecipe(id) {
    try {
      const result = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      if (!result.ok) throw new Error('The recipe was not found 💥');
      const { data } = await result.json();
      const { recipe } = data;
      this.activeRecipe = recipe;
      this.activeRecipe.currentServings = this.activeRecipe.servings;
      if (this.checkRecipeBookmarked()) {
        this.activeRecipe.bookmarked = true;
      } else {
        this.activeRecipe.bookmarked = false;
      }

      return this.activeRecipe;
    } catch (err) {
      throw err;
    }
  }

  async loadRecipes(query) {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );

      const { ok } = res;
      if (!ok) {
        throw new Error('Receipt was not found for your input...💥');
      }
      const { data } = await res.json();
      const { recipes } = data;
      this.state.recipes = recipes;
    } catch (err) {
      throw err;
    }
  }
}

export default new Module();
