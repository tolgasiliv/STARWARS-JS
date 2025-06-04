const characters = [
    {
      "id": 1,
      "name": "Luke Skywalker",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      "homeworld": "tatooine"
    },
    {
      "id": 2,
      "name": "C-3PO",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      "homeworld": "tatooine"
    },
    {
      "id": 3,
      "name": "R2-D2",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      "homeworld": "naboo"
    },
    {
      "id": 4,
      "name": "Darth Vader",
      "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      "homeworld": "tatooine"
    },
    {
      "id": 5,
      "name": "Leia Organa",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      "homeworld": "alderaan"
    },
    {
      "id": 6,
      "name": "Owen Lars",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      "homeworld": "tatooine"
    },
    {
      "id": 7,
      "name": "Beru Whitesun lars",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      "homeworld": "tatooine"
    },
    {
      "id": 8,
      "name": "R5-D4",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      "homeworld": "tatooine"
    },
    {
      "id": 9,
      "name": "Biggs Darklighter",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      "homeworld": "tatooine"
    },
    {
      "id": 10,
      "name": "Obi-Wan Kenobi",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      "homeworld": "stewjon"
    },
    {
      "id": 11,
      "name": "Anakin Skywalker",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      "homeworld": "tatooine"
    },
    {
      "id": 12,
      "name": "Wilhuff Tarkin",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      "homeworld": "eriadu"
    },
    {
      "id": 13,
      "name": "Chewbacca",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      "homeworld": "kashyyyk"
    },
    {
      "id": 14,
      "name": "Han Solo",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      "homeworld": "corellia"
    },
    {
      "id": 15,
      "name": "Greedo",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      "homeworld": "Rodia"
    },
    {
      "id": 16,
      "name": "Jabba Desilijic Tiure",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      "homeworld": "tatooine"
    },
    {
      "id": 18,
      "name": "Wedge Antilles",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      "homeworld": "corellia"
    },
    {
      "id": 19,
      "name": "Jek Tono Porkins",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      "homeworld": "bestine"
    },
    {
      "id": 20,
      "name": "Yoda",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
    },
    {
      "id": 21,
      "name": "Palpatine",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      "homeworld": "naboo"
    }
  ]
const renderbtn =document.getElementById("renderbtn");
const row = document.querySelector(".row");
const homeWorldsFilterContainer = document.getElementById("homeWorldsFilterContainer")

const createCharacterCard = ({pic, name, homeworld}) => {
return `
<div class="card" style="width: 18rem;">
  <img src="${pic}" class="card-img-top" alt="${name}">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${homeworld}</p>
    
  </div>
</div>
  `
};
const rendercharacters = (characters) => {
    row.innerHTML = characters.map(createCharacterCard).join("") 

};

const toggleCharacters = () => {
    if(row.innerHTML) {
      row.innerHTML = ""
      renderbtn.textContent = "Show Characters"
      homeWorldsFilterContainer.style.display = "none";
    } else {
      rendercharacters(characters)
       renderbtn.textContent = "Hide Characters"
       homeWorldsFilterContainer.style.display = "block"
    }
     
}
 
const getHomeworlds = (arr, key) =>  arr.map((item) => item[key]);

const getUniqueHomeWorlds = (characters) => {
    const homeWorldRaw = getHomeworlds(characters, "homeworld").map((item) => item ?? "other");
     const uniqueWorlds = [...new Set(homeWorldRaw.map((item) => item.toLowerCase()))];
     console.log("Tüm homeworld değerleri:", homeWorldRaw);
  console.log("Eşsiz homeworld'ler:", uniqueWorlds);
  return uniqueWorlds
};
const createHomeWorldFilter = (homeWorlds) => {
    console.log("createHomeWorldFilter çağrıldı. Liste:", homeWorlds);

  homeWorldsFilterContainer.innerHTML = homeWorlds.map(
    (homeWorld, index) => 
      `
    <div class="form-check" style="display:flex; align-items: center">
  <input class="form-check-input" name="homeworld" type="radio" value="${homeWorld}" id="radio${index}">
  <label class="form-check-label" for="radio${index}" style="margin-left: 4px;" >
    ${homeWorld}
  </label>
</div>
    `
  )
  .join("");
};

const filterCharactersByHomeWorld = (homeworld) => {
  const filterCharacters = characters.filter((characters) => (
    (characters.homeworld ?? "other").toLowerCase() === homeworld.toLowerCase()

   
  ))
  rendercharacters(filterCharacters)
   return filterCharacters
}
const addHomeworldFilterListeners = () => {
  const checkİnput = document.querySelectorAll(".form-check-input");
  console.log(checkİnput)
  checkİnput.forEach((input) => {
    input.addEventListener("click", () => {
      filterCharactersByHomeWorld(input.value)
    })
  })
}



createHomeWorldFilter(getUniqueHomeWorlds(characters))
document.addEventListener("DOMContentLoaded", () => {

  


renderbtn.addEventListener("click", toggleCharacters);

addHomeworldFilterListeners();
})