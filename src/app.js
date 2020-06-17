import "./assets/scss/app.scss";
let element = document.getElementById("root");
let tabs = document.querySelector(".tab__info--middle");
let tabsElements = {
    itemsContainer: tabs.querySelector("div[key='sidebarLeft'] ul"),
    tabsContainer: tabs.querySelector("div[key='sidebarRight']")
};

let tabsItems = tabsElements.itemsContainer.querySelectorAll("li")
let tabsContainers = tabsElements.tabsContainer.querySelectorAll(".tab__info--block")
tabsItems.forEach(element => element.addEventListener("click", e => {
    let target = e.target;
    if(target.classList.contains("active")) return false;

    tabsItems.forEach(value => value.classList.remove("active"));
    if(target instanceof HTMLSpanElement) {
        target.parentElement.classList.add("active");
    } else {
        target.classList.add("active");
    }
    let tab = Object.values(tabsContainers).find(value => {
        return value.getAttribute("data-tab-key") === target.parentElement.getAttribute("data-tab-key-button");
    })
    tabsContainers.forEach(value => value.classList.remove("active"));
    tab.classList.add("active");
}));