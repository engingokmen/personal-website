

function drop () {
  function changeBackgroundColor() {
    document.body.setAttribute("style", "background-color:#AED6F1")
  }
  const button = document.createElement("button");
  button.onclick=changeBackgroundColor
  button.textContent="change background color";
  document.querySelector("#eg").append(button);
}

drop();