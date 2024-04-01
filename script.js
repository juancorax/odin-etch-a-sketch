const columnContainer = document.querySelector("#column-container");

function createGrid(numberOfSquaresPerSide) {
  numberOfSquaresPerSide = Number(numberOfSquaresPerSide);

  for (let i = 1; i <= numberOfSquaresPerSide; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("row-container");

    for (let j = 1; j <= numberOfSquaresPerSide; j++) {
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
}

createGrid(16);

const gridSizeButton = document.querySelector("#grid-size-button");

gridSizeButton.addEventListener("click", () => {
  let userInput;

  for (let j = 0; j < 1; j++) {
    userInput = prompt(
      "Enter the number of squares per side for the new grid:\n(max. 100)",
      "16",
    );

    if (
      userInput === "" ||
      userInput === null ||
      isNaN(userInput) ||
      userInput < 0 ||
      userInput > 100
    ) {
      j--;
      continue;
    }
  }

  while (columnContainer.hasChildNodes()) {
    columnContainer.removeChild(columnContainer.lastChild);
  }

  createGrid(userInput);
});
