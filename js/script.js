const loadMeals = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
    .catch(error => console.log(error));
}

loadMeals()

const displayMeals = (meals) =>
{
    const mealsContainer = document.getElementById('meals-container');
    // console.log(data);

    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
                <div class="card" onclick="">
                    <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}...</p>
                    </div>
                </div>
    
    
    `
    mealsContainer.appendChild(mealDiv); 
    });

}

document.getElementById('search-btn').addEventListener('click',function(){
    const inputField = document.getElementById('search-input');
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = ``;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFieldValue}`)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
    

})

const displaySearchResult = (mealss) =>{
    const mealsContainer = document.getElementById('meals-container');
     console.log(mealss);

    mealss.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
                <div class="card" onclick="">
                    <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,200)}...</p>
                    </div>
                </div>
    
    
    `
    mealsContainer.appendChild(mealDiv); 
    });
}




