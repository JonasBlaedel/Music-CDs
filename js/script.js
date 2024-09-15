"use strict";

const inputAuthor = document.querySelector("#author");
const inputTitle = document.querySelector("#title");
const inputYear = document.querySelector("#year");

const musicTable = document.querySelector("#container_table");
const musicTbody = document.querySelector("tbody");

document.querySelector("button").addEventListener("click", () => {
  const inputAuthorValue = inputAuthor.value;
  const inputTitleValue = inputTitle.value;
  const inputYearValue = inputYear.value;

  const btnDelete = document.createElement("td");
  btnDelete.classList.add("delete");
  btnDelete.innerText = "🗑️";

  const authorTable = document.createElement("td");
  authorTable.innerText = inputAuthorValue;

  const titleTable = document.createElement("td");
  titleTable.innerText = inputTitleValue;

  const yearTable = document.createElement("td");
  yearTable.innerText = inputYearValue;

  const tableTr = document.createElement("tr");
  tableTr.appendChild(authorTable);
  tableTr.appendChild(titleTable);
  tableTr.appendChild(yearTable);
  tableTr.append(btnDelete);

  btnDelete.addEventListener("click", (e) => {
    tableTr.remove(e);
    showTable();
  });

  musicTbody.appendChild(tableTr);
  showTable();
});

const showTable = () => {
  if (musicTbody && musicTbody.querySelectorAll("tr").length > 1) {
    musicTable.style.visibility = "visible";
  } else {
    musicTable.style.visibility = "hidden";
  }
};

showTable();
// const showTable = () => {
//   if (musicThead && musicThead.querySelectorAll("tr").length > 0) {
//     musicTable.classList.remove("container_table_class");
//   } else {
//     musicTable.classList.add("container_table_class");
//   }
// };

//   if (musicThead && musicThead.querySelectorAll("tr").length > 0) {
//     musicTable.classList.remove("container_table_class");
//   } else {
//     musicTable.classList.add("container_table_class");
//   }
