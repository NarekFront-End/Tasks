const addElem = document.getElementById("addElem");
const divBlock = document.getElementById("block");

const obj = {
  img: "walp1.jpg",
  title: "js amena lav lezuna",
  text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantiumrem quae maxime",
};

const change = function(){
  const elemBlock = document.createElement("div");
  elemBlock.setAttribute("class", "elemBlock");

  const imgBlock = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", obj.img);
  imgBlock.append(img);
  elemBlock.append(imgBlock);

  const textBlock = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  h2.textContent = obj.title;
  p.textContent = obj.text;

  textBlock.append(h2);
  textBlock.append(p);
  elemBlock.append(textBlock);

  divBlock.append(elemBlock);
};