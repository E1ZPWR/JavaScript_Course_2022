// link btn at the end od bio paragraph
const KReadMore = document.querySelector("#KReadMore");
const PReadMore = document.querySelector("#PReadMore");
// div paragraph for the long story
const kdiv = document.querySelector("#kdiv");
const pdiv = document.querySelector("#pdiv");

//function to show the long story
function readMoreBtnK() {
  /**
   * 默认按键字为'Read More'
   * 如果长故事为不显示（默认情况），则显示长故事，并且改变按键字为'Read Less'
   */

  if (kdiv.style.display === "none") {
    KReadMore.innerHTML = "Read Less";
    kdiv.style.display = "block";
    /**
     * 此时长故事已经显示，再次点击，则不显示，并且改变按键字为显示
     */
  } else {
    KReadMore.innerHTML = "Read More";
    kdiv.style.display = "none";
  }
}

function readMoreBtnP() {
  if (pdiv.style.display === "none") {
    PReadMore.innerHTML = "Read Less";
    pdiv.style.display = "block";
    /**
     * 此时长故事已经显示，再次点击，则不显示，并且改变按键字为显示
     */
  } else {
    PReadMore.innerHTML = "Read More";
    pdiv.style.display = "none";
  }
}

// Event listener
KReadMore.addEventListener("click", readMoreBtnK);
PReadMore.addEventListener("click", readMoreBtnP);
