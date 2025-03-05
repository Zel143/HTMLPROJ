document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("hero-header");
    const text = header.innerText;
    header.innerHTML = ""; // Clear original text

    // Wrap each letter in a span
    [...text].forEach((char, index) => {
        let span = document.createElement("span");
        span.textContent = char;
        header.appendChild(span);
    });

    const letters = document.querySelectorAll(".hero-header span");

    letters.forEach((letter, index) => {
        letter.addEventListener("mouseover", () => {
            letter.classList.add("hovered");

            // Add "nearby" class to adjacent letters
            if (letters[index - 1]) letters[index - 1].classList.add("nearby");
            if (letters[index + 1]) letters[index + 1].classList.add("nearby");
        });

        letter.addEventListener("mouseout", () => {
            letter.classList.remove("hovered");

            // Remove "nearby" class from adjacent letters
            if (letters[index - 1]) letters[index - 1].classList.remove("nearby");
            if (letters[index + 1]) letters[index + 1].classList.remove("nearby");
        });
    });
});
n