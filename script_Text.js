const links = document.querySelectorAll(".link");
const texts = document.querySelectorAll(".text");
links.forEach((item) =>
  item.addEventListener("click", function () {
    texts.forEach((item) => item.classList.remove("active-text"));
    let text = document.getElementById(`text-${item.id}`);
    text.classList.add("active-text");
    document
      .querySelectorAll(".active")
      .forEach((item) => item.classList.remove("active"));
    item.classList.add("active");
  })
);