const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

// https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#exercise

const para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";
container.appendChild(para);

const h3Blue = document.createElement("p");
h3Blue.style.cssText = "color: blue;";
h3Blue.textContent = "Hey I'm blue h3!";
container.appendChild(h3Blue);

const styledDiv = document.createElement("div");
styledDiv.style.cssText = "border-color: black; background-color: pink;";
container.appendChild(styledDiv);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
styledDiv.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO!";
styledDiv.appendChild(p);
