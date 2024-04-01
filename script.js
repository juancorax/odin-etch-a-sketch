const columnContainer = document.querySelector("#column-container");

for (let i = 1; i <= 16; i++) {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-container");

  for (let j = 1; j <= 16; j++) {
    const div = document.createElement("div");

    rowContainer.appendChild(div);
  }

  columnContainer.appendChild(rowContainer);
}
