const tabBar = document.querySelector(".tabBar");
const navLinks = document.querySelectorAll("input");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        openTab(link.value);
    })
})

function openTab (tabName) {
    const tab = document.createElement("p");
    tab.classList.add("tab");
    tab.innerHTML = tabName;
    tabBar.appendChild(tab);

    const button = document.createElement("button");
    button.innerHTML = "x";
    tab.appendChild(button);

    // Close tab
    button.addEventListener("click", () => {
        tab.remove();
    })
}