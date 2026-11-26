const projects = ["This site", "Site two", "Site three"];

const list = document.querySelector("#project-list");

list.innerHTML = projects.map((title) => `<li>${title}</li>`).join("");
