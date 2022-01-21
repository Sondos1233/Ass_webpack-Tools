import hello from "./hello world";
hello();
import header from "./component/header/header";

import "./style.css";
import bio from "./component/bio/bio";

import photo from "./assets/cover.jpg";
const sec = document.createElement("section");
const image = document.createElement("img");
image.src = photo;

sec.appendChild(image);
const element = document.createElement("div");

element.innerHTML =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ";
sec.appendChild(element);
document.body.appendChild(sec)
