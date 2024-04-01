const columnContainer = document.querySelector("#column-container");

for (let i = 1; i <= 16; i++) {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-container");

  for (let j = 1; j <= 16; j++) {
    const div = document.createElement("div");

    div.addEventListener("mouseover", () => {
      // gets a random integer between two values, inclusive
      function getRandomIntInclusive(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(
          Math.random() * (maxFloored - minCeiled + 1) + minCeiled,
        );
      }

      div.style.backgroundColor = `rgb(${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)}, ${getRandomIntInclusive(0, 255)})`;

      div.style.opacity =
        parseFloat(window.getComputedStyle(div).opacity) - 0.1;
    });

    rowContainer.appendChild(div);
  }

  columnContainer.appendChild(rowContainer);
}
