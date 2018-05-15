function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function createRecipe() {
  let recipe = getRecipeVals()
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = recipetemplate(recipe)
}

function getRecipeVals() {
  let singleIngredients = document.getElementsByName("ingredients")
  let ingredients = []
  for(let i=0;i<singleIngredients.length;i++) {
    ingredients.push(singleIngredients[i].value)
  }
}

function updateRecipe() {

}
