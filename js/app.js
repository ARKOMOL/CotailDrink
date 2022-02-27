const serachdrinks = () => {
    const searchField = document.getElementById('search-btn');
    const search = searchField.value;
    searchField.value = '';
    const url = (`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.drinks))
}

const displaySearchResult = (drinks) => {
    // console.log(drinks);
    const searchResult = document.getElementById('search-div');
    searchResult.textContent = '';
    drinks.forEach(drink => {
        // console.log(drink);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    <div class=" card h-100">
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    
    <h5 class="card-title">${drink.strDrink}</h5>
    <p class="card-text">${drink.strInstructions.slice(0, 100)}</p>
    <button onclick="showDetails(${drink.idDrink})" class=" btn btn-danger">Details</button>  

</div>
    </div>
      `
        searchResult.appendChild(div);
    })

}

const showDetails = details =>{
    const url = (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${details}`)
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => showfullDetails(data.drinks[0]))

}

const showfullDetails =drink=>{
    const detailsResult = document.getElementById('deatails');
    detailsResult.innerHTML = '';
        console.log(drink);
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
    <div class=" card h-100">
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    
    <h5 class="card-title">${drink.strDrink}</h5>
    <p class="card-text">${drink.strInstructions.slice(0, 100)}</p>
    <p> ${drink.dateModified} </p>
    <p> ${drink.strAlcoholic} </p>
    <button onclick="Swal.fire('${drink.strDrink}')" class=" btn btn-danger">Details</button>  

</div>
    </div>
      `
      detailsResult.appendChild(div);
    
}

// const swal = showswal =>{
//     const swall = document.getElementById('swall')
//     const div = document.createElement('div');
//         div.classList.add('card');
//         div.innerHTML = `
//     <div class=" card h-100">
//     <img src="${showswal.strDrinkThumb}" class="card-img-top" alt="...">
//     <div class="card-body">
    
//     <h5 class="card-title">${showswal.strDrink}</h5>
//     <p class="card-text">${drink.strInstructions.slice(0, 100)}</p>
//     <p> ${showswal.dateModified} </p>
//     <p> ${showswal.strAlcoholic} </p>
//     <button onclick="Swal.fire('')" class=" btn btn-danger">Details</button>  

// </div>
//     </div>
//       `
//       swall.appendChild(div);
// }