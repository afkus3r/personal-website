const tabBar = document.querySelector(".tabBar");
const navLinks = document.querySelectorAll("input");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        openTab(link.value);
    })
})

function openTab (tabName) {
    const tab = createElement("p", tabName);
    tab.classList.add("tab");
    tabBar.appendChild(tab);

    const button = createElement("button", "x");
    tab.appendChild(button);

    // Close tab
    button.addEventListener("click", () => {
        tab.remove();
    })
}

function createElement (type, content) {
    const element = document.createElement(type);
    const node = document.createTextNode(content);
    element.appendChild(node);
    return element;
}