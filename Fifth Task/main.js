// videos(86-93)
// تكليف 1

let zero = document.getElementById("elzero");
let classzero = document.querySelector(".element");
let ele = document.querySelectorAll("[name='js']");
let div1 = document.querySelector("[name='js']");
let div = document.getElementsByTagName("div");
let div2 = document.querySelector("div");
let div3 = document.querySelector("#div");
let div4 = document.querySelectorAll(".element");
let div5 = document.querySelectorAll("div");
let div6 = document.querySelectorAll("#div");
let div7 = document.getElementsByClassName(".element");
let div8 = document.body.children[0];
let div9 = document.body.childNodes[1];
let div10 = document.body.firstElementChild;
let div11 = document.body.firstChild;


console.log("------------------------------------------------------------");
// تكليف 2

let img = document.querySelectorAll("div img");
let Div = document.querySelectorAll("div");
for (let i = 0; i < img.length; i++) {
  img[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"; 
  img[i].setAttribute("alt", "Elzero Logo");
  img[i].style.backgroundColor = "black";
}



console.log("------------------------------------------------------------");
// تكليف 3
let inputs = document.querySelector("[name='dollar']"); 
let result = document.querySelector(".result"); 
let form = document.getElementsByTagName("form"); 
inputs.oninput = function () { 
result.textContent = `{${inputs.value} USD Dollar = {${( inputs.value * 50).toFixed(2)}} Egyptian Pound}`; }; 
form[0].style.cssText = "display: flex; flex-direction: column; align-items: center; border: 1px solid black; padding: 15px; width: fit-content;"; 
inputs.style.cssText = "border: 1px solid #ddd; outline: none; padding: 10px; width: 280px;"; 
result.style.cssText = "margin-top: 10px; color: rgb(165, 4, 74); font-size: 18px;";


console.log("------------------------------------------------------------");

// videos(94-101)
// تكليف 2

let addresult = document.querySelector(".assign .classes-list div");
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");

addInput.onblur = function () {
  let addArray = addInput.value.toLowerCase().split(" ");

  for (let i = 0; i < addArray.length; i++) {
    if (addArray[i] !== "") {
      let span = document.createElement("span");
      let spanText = document.createTextNode(addArray[i]);
      span.appendChild(spanText);

      addresult.appendChild(span);
    }
  }
  let text = document.querySelector("p.result");
  if (addresult.children.length > 0 && text !== null) {
    text.remove();
  }

  addInput.value = "";
};

removeInput.onblur = function () {
  let removeArray = removeInput.value.toLowerCase().split(" ");
  let allSpans = document.querySelectorAll("span");
  for (let i = 0; i < allSpans.length; i++) {
    if (removeArray.indexOf(allSpans[i].textContent) !== -1) {
      allSpans[i].remove();
    }
  }
  if (addresult.children.length === 0) {
    createText();
  }

  removeInput.value = "";
};

function createText() {
  let text = document.createElement("p");
  text.className = "result";
  text.appendChild(document.createTextNode("No Classes To Show"));
  addresult.appendChild(text);
}
createText();


console.log("------------------------------------------------------------");

// تكليف 3

let paragraph = document.querySelector("p");
let elementdiv = document.querySelector(".our-element")

paragraph.remove();


let preDiv = document.createElement("div");
preDiv.className = "start";
preDiv.setAttribute("title", "start Element");
preDiv.setAttribute("data-value", "start");
preDiv.innerHTML = "Start";
elementdiv.before(preDiv);
afterDev = document.createElement("div");
afterDev.className = "end";
afterDev.setAttribute("end", "start Element");
afterDev.setAttribute("data-value", "end");
afterDev.innerHTML = "End";
elementdiv.after(afterDev);

console.log("------------------------------------------------------------");

// تكليف 5

let DIV = document.querySelector("div");
let span = document.querySelector("span");
let p = document.querySelector("p");
let article = document.querySelector("article");
let section = document.querySelector("section");

document.body.addEventListener("click", (e) => {
  if (e.target === DIV) {
    console.log("This Is div");
  } else if (e.target === span) {
    console.log("This Is Span");
  } else if (e.target === p) {
    console.log("This Is P");
  } else if (e.target === article) {
    console.log("This Is article");
  } else if (e.target === section) {
    console.log("This Is section");
  }
});

document.body.onclick = function (e) {
  if (e.target.nodeName != "BODY") {
    console.log(`This Is ${e.target.nodeName.toLowerCase()}`);
  }
}; 