const depoList = document.querySelectorAll(".newsletter__depos__items-item");
const selectorsList = document.querySelectorAll(".selector");
const activeSelectorClass = "active-selector";
const activeDepoClass = "active-depo";


// Função vai receber o index do click e setar na depo o mesmo index
const setCurrentIndexDepo = (current) => {
  depoList.forEach((depoimento, index) => {
    if (index === Number(current)) {
      depoimento.classList.add(activeDepoClass);
    } else {
      depoimento.classList.remove(activeDepoClass);
    }
  });
};


// Função vai receber o index do click e setar no seletor o mesmo index
const setCurrentIndexSelector = (current) => {
//   console.log(current);
  selectorsList.forEach((seletor, index) => {
    // console.log(index);
    if (index === Number(current)) {
      seletor.classList.add(activeSelectorClass);
    } else {
      seletor.classList.remove(activeSelectorClass);
    }
  });
};

selectorsList.forEach((selector) => {
  selector.addEventListener("click", (event) => {
    if (!event.target.classList.contains(activeSelectorClass)) {
      event.target.classList.add(activeSelectorClass);
      setCurrentIndexSelector(event.target.getAttribute("data-index"));
      setCurrentIndexDepo(event.target.getAttribute("data-index"));
    }
  });
});
