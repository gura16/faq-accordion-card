const question = document.querySelectorAll(".container1");

const descriptions = document.querySelectorAll(".description");

const text = document.querySelectorAll(".text");

const paths = document.querySelectorAll(".path");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    if (descriptions[i].classList.contains("show")) {
      descriptions[i].classList = "hide";
      text[i].style.fontWeight = "normal";
      paths[i].style.transform = "rotate(0deg)";
      paths[i].style.transition = "1s";
    } else {
      descriptions[i].classList = "show";
      text[i].style.fontWeight = "bold";
      paths[i].style.transform = "rotate(180deg)";
      paths[i].style.transition = "1s";
    }
    for (let k = 0; k < question.length; k++) {
      console.log(descriptions[k]);
      if (
        descriptions[k].classList.contains("show") &&
        descriptions[k] !== descriptions[i]
      ) {
        descriptions[k].classList = "hide";
        text[k].style.fontWeight = "normal";
        paths[k].style.transform = "rotate(0deg)";
      }
    }
  });
}
