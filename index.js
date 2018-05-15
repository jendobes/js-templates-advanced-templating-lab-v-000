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

}

function updateRecipe() {

}
