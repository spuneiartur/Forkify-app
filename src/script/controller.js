import searchView from './views/searchView.js';
import module from './module.js';

function App() {
  async function controlSearch() {
    try {
      const query = searchView.getQuery();
      const results = await module.loadRecipes(query);
      console.log(results);
    } catch (err) {
      console.error(err);
    }
  }

  function addingHandlers() {
    searchView.addHandlerSearch(controlSearch);
  }
  addingHandlers();
}

App();
