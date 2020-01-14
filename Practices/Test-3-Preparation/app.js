function ChangeImg() {
  // this.setAttribute("src", "./hongkong.jpg");
  // console.log(src)

  var image = document.getElementById("myImage");
  image.setAttribute("src", "./hongkong.jpg");
}

var myP = document.getElementById("myP");
function ChangeBG() {
//   var myP = document.getElementById("myP");
  myP.style.backgroundColor='yellow';
}

function Validate(ID) {
    var field = document.getElementById(ID);
    if (field.value === "") {
        console.log("This field is required.")
    }
}
function fillCity() {
  var zipValue = document.getElementById("zip").value;
  var cityName;
  switch (zipValue) {
    case "66000":
      cityName = "Multan";
      break;
  
    default:
      cityName = "Karachi";
      break;
  }
    document.getElementById("city").value = cityName;
}

function expandLoris() {
  document.getElementById("loris").innerText = "Slow lorises are a group of several species of strepsirrhine primates which make up the genus Mycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals"
}
function bigFont() {
  document.getElementById("loris").className += " p2"
}
// console.log(document.getComputedStyle("loris").margin);