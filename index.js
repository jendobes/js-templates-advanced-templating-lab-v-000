function init() {
  //put any page initialization/handlebars initialization here
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function renderForms(){
  let formTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
}

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
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let recipe = {name, ingredients, description}
  return(recipe)
}

function updateRecipe() {
  let recipe = getRecipeVals()
  let recipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML)
  document.getElementById("main").innerHTML = recipetemplate(recipe)
}

function displayEditForm() {
  let name = document.getElementById("nameHeader").innerText
  let description = document.getElementById("recipeDescription").innerText
  let singleIngredients = document.getElementsByName("ingredientsList")
  let ingredients = []
  for(let i=0;i<singleIngredients.length;i++) {
    ingredients.push(singleIngredients[i].innerText)
  }

  let recipe = {name, description, ingredients, submitAction: 'createRecipe()'}

  let recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML)
  document.getElementById("main").innerHTML = recipeFormTemplate(recipe)
}
