const projects = [
  { title: "This site", desc: "Hand-written HTML, CSS and JS." },
  { title: "Site two", desc: "Not built yet." },
  { title: "Site three", desc: "Not built yet." },
];

const grid = document.querySelector("#project-grid");
const addButton = document.querySelector("#add-button");

function render() {
  grid.innerHTML = projects
    .map(
      (project) => `
        <div class="card">
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
        </div>
      `,
    )
    .join("");
}

render();

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".card");
  if (!card) return;
  console.log(card.querySelector("h3").textContent);
});

addButton.addEventListener("click", () => {
  projects.push({
    title: `Project ${projects.length + 1}`,
    desc: "Added at runtime.",
  });
  render();
});
