
function saveProfile() {
    let name = document.getElementById("name").value;
    let diet = document.getElementById("diet").value;

    localStorage.setItem("name", name);
    localStorage.setItem("diet", diet);

    alert("Profile Saved");
}

function searchRecipe() {
    let query = document.getElementById("search").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => displayRecipes(data.meals));
}

function displayRecipes(meals) {
    let container = document.getElementById("recipes");
    container.innerHTML = "";

    if (!meals) {
        container.innerHTML = "No recipes found";
        return;
    }

    meals.forEach(meal => {
        let div = document.createElement("div");
        div.className = "recipe";

        div.innerHTML = `
            <h3>${meal.strMeal}</h3>
            <img src="${meal.strMealThumb}" width="150">
            <p>${meal.strInstructions.substring(0, 100)}...</p>

            <input type="number" placeholder="Rate (1-5)">
            <input type="text" placeholder="Write review">
            <button onclick="alert('Review submitted')">Submit</button>
        `;

        container.appendChild(div);
    });
}