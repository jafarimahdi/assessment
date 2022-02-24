let buttonConvert = document.querySelector("button");
let input = document.querySelector("input");
let out = document.querySelector("h2");

buttonConvert.addEventListener("click", () => {
    out.innerText = convertToWords(input.value);
});
