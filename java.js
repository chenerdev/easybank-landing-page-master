const click = document.querySelector(".humcon"),
      line1 = document.querySelector(".line1"),
      line2 = document.querySelector(".line2"),
      line3 = document.querySelector(".line3"),
         m4 = document.querySelector(".m4");

click.addEventListener("click", () => {
    line3.classList.toggle("line2none");
    line1.classList.toggle("line1effected");
    line2.classList.toggle("line3effected");
    m4.classList.toggle("m4ed");
})

console.log("tt");