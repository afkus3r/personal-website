const tabBar = document.querySelector(".tabBar");
const navLinks = document.querySelectorAll("input");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        createTab(link.value);
    })
})

function createTab (tabName) {
    const tab = document.createElement("p");
    tab.classList.add("tab");
    tab.innerHTML = tabName;
    tabBar.appendChild(tab);

    const button = document.createElement("button");
    button.innerHTML = "x";
    tab.appendChild(button);

    button.addEventListener("click", () => {
        tab.remove();
    })
}