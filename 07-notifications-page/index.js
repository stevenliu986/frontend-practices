let authorList = document.querySelectorAll(".author");

for (const author of authorList) {
  author.addEventListener("mouseenter", function () {
    this.classList.add("active");
  });
  author.addEventListener("mouseleave", function () {
    this.classList.remove("active");
  });
}

let newMsg = document.querySelectorAll(".new");
let count = document.querySelector(".notification-count");

count.innerHTML = newMsg.length;

for (const element of newMsg) {
  element.addEventListener("click", function () {
    this.classList.remove("new");
    this.classList.add("msg");
    newMsg = document.querySelectorAll(".new");
    count.innerHTML = newMsg.length;
  });
}
