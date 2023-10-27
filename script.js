document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      const originalColor = getComputedStyle(square).backgroundColor;
      square.style.backgroundColor = getRandomColor();
      setTimeout(() => {
        square.style.transition = "background-color 1s";
        square.style.backgroundColor = originalColor;
      }, 1000);
    });
  });

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
