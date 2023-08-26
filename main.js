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
