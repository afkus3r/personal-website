const tabBar = document.querySelector(".tabBarNoStyle");
const navLinks = document.querySelectorAll("input");
const content = document.querySelector(".content");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        hideContent();
        openTab(link.value);
        openContent(link.value);
    })
})

function openTab(tabName) {
    tabBar.classList.add("tabBar");

    const tab = createElement("p", tabName);
    tab.classList.add("tab");
    tabBar.appendChild(tab);

    const button = createElement("button", "x");
    tab.appendChild(button);

    // Close tab
    button.addEventListener("click", () => {
        tab.remove();
        hideContent();
    })
}

function hideContent () {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function openContent(contentName) {
    const templateClass = "." + contentName;
    const template = document.querySelector(templateClass);
    const clone = template.content.cloneNode(true);

    content.appendChild(clone);
}

function createElement(type, content) {
    const element = document.createElement(type);
    const node = document.createTextNode(content);
    element.appendChild(node);
    return element;
}