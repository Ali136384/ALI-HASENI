let burger = document.getElementById("burger");
let links = document.getElementById("links");
let text = document.getElementById("text");
let a = 0;
burger.onclick = () => {
  a++;
  a % 2 === 1
    ? ((links.style.display = "flex"), (text.style.display = "none"))
    : ((links.style.display = "none"), (text.style.display = "block"));
  links.style.flexDirection = "column";
  links.style.backgroundColor = "rgb(15 116 143 / 70%);";
  links.style.position = "absolute";
  links.style.top = "200%";
  links.style.minWidth = "200%";
  links.style.marginBottom = "50px";
};

let up = document.getElementById("up");
console.log(window.scrollY);
setInterval(() => {
  if (window.scrollY > 50) {
    up.style.right = "15px";
    up.style.color = "#19cbfa";
  } else {
    up.style.right = "-100px";
  }
});

up.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

let images = document.querySelectorAll(".imgs-container .box");

let contires = document.querySelectorAll(".contries");

contires.forEach((ele) => {
  ele.addEventListener("click", (ele) => {
    contires.forEach((e) => {
      e.classList.remove("active");
    });

    ele.target.classList.add("active");
  });
});

for (let i = 0; i < contires.length; i++) {
  contires[i].onclick = () => {
    let attr = contires[i].getAttribute("number");
    for (let k = 0; k < images.length; k++) {
      if (images[k].classList.contains(attr)) {
        images[k].classList.remove("fal");

        images[k].classList.add("tru");
      } else if (contires[i].innerHTML === "All") {
        images[k].classList.remove("fal");
        images[k].classList.add("tru");
      } else {
        images[k].classList.add("fal");
        images[k].classList.remove("tru");
      }
    }
  };
}
