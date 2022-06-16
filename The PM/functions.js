// link btn
const ReadMore = document.querySelector("#ReadMore");

// div paragraph
const long = document.querySelector("#long");

//function to show content
function Read() {
  /**
   * 默认按键字为'Read More'
   * 如果长故事为不显示（默认情况），则显示长故事，并且改变按键字为'Read Less'
   */
  if (long.style.display === "none") {
    ReadMore.innerHTML = "Read Less";
    long.style.display = "block";
    /**
     * 此时长故事已经显示，再次点击，则不显示，并且改变按键字为显示
     */
  } else {
    ReadMore.innerHTML = "Read More";
    long.style.display = "none";
  }
}

// Event listener
ReadMore.addEventListener("click", Read);
