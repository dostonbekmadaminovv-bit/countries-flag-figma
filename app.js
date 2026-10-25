const searchEl = document.querySelector(".search");
const filterEl = document.querySelector(".filter");
const countryCards = document.querySelectorAll(".flag-1");
const bodyEl = document.body;
const darkBtnEl = document.querySelector(".navbar-oyi");
const siteMode = localStorage.getItem("mode"); // || "light"
if (siteMode === "dark") {
  bodyEl.classList.add("dark-mode");
}
darkBtnEl.addEventListener("click", () => {
  bodyEl.classList.toggle("dark-mode");
  const currentMode = bodyEl.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("mode", currentMode);
});

function filterCountries() {
  const searchText = searchEl.value.trim().toLocaleLowerCase();
  const selectedRegion = filterEl.value.trim().toLocaleLowerCase();

  countryCards.forEach((card) => {
    const countryName = card
      .querySelector("h3")
      .textContent.trim()
      .toLocaleLowerCase();

    const details = card.querySelector("p").textContent;

    const regionMatch = details.match(/Region:\s*([a-z]+)/i);
    const region = regionMatch ? regionMatch[1].trim().toLocaleLowerCase() : "";

    const nameMatches = countryName.includes(searchText);
    const regionMatches = selectedRegion === "" || region === selectedRegion;

    card.hidden = !(nameMatches && regionMatches);
  });
}

searchEl.addEventListener("input", filterCountries);
filterEl.addEventListener("change", filterCountries);

filterCountries();

// searchEl.addEventListener("input", (e) => {
//   e.preventDefault();
//   const formData = new FormData(formEl);
//   let inputValue = formData.get("qidiruv");
//   let filteredCountries = countries.filter((country) => {
//     if (
//       country.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())
//     ) {
//       return country;
//     }
//   });
// });

// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(formEl);
//   let inputValue = formData.get("search-input");
//   let filteredProducts = products.filter((prod) => {
//     if (prod.brand.toLowerCase().includes(inputValue.toLowerCase())) {
//       return prod;
//     }
//   });
//   data2(filteredProducts);
//   // buttonEl.textContent = productName;
// });
