import { createIcons, FileCode2, FolderGit2, Gamepad, Shapes } from "lucide";

const projects = ["This site", "Site two", "Site three"];

const list = document.querySelector("#project-list");

list.innerHTML = projects
  .map((title) => `<li><i data-lucide="file-code-2"></i>${title}</li>`)
  .join("");

createIcons({ icons: { FileCode2, FolderGit2, Gamepad, Shapes } });
