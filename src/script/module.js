class Module {
  async loadRecipes(query) {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${query}`
      );
      const { ok } = res;
      if (!ok) {
        throw new Error('Receipt was not found for your input...💥');
      }
      const { recipes } = await res.json();

      return recipes;
    } catch (err) {
      throw err;
    }
  }
}

export default new Module();
