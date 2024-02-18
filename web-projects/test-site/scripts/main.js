const myImage = document.querySelector("img");
let score = parseInt(document.getElementById("score").textContent);
let myscore = document.getElementById("score");

myImage.onclick = () => {
  score++;
  let fscore = score.toString();
  myscore.innerHTML = fscore;
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cat.png") {
    myImage.setAttribute("src", "images/cat2.png");
  } else {
    myImage.setAttribute("src", "images/cat.png");
  }

};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome Back ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome Back ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };  