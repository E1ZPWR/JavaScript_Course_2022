// link btn
const showLink = document.querySelector("#showLink");
const hideLink = document.querySelector("#hideLink");

// div paragraph
const long = document.querySelector("#long");

//function to show content
function show() {
  long.style.display = "block";
  showLink.textContent = "Read More";
}

//function to hide content
function hide() {
  long.style.display = "none";
  hideLink.textContent = "Read Less";
}

// Event listener
showLink.addEventListener("click", show);
hideLink.addEventListener("click", hide);
