const question = document.querySelectorAll(".container1");

const descriptions = document.querySelectorAll(".description");
console.log(descriptions);

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    console.log(descriptions[i]);
    if (descriptions[i].matches("show")) {
      descriptions[i].classList = "hide";
    }
    descriptions[i].classList = "show";
  });
}
