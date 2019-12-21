(function() {
  function incerementCounter() {
    counter = counter + 1;
  }
  function updateUI() {
    const colors = [
      { name: "Alizarin", value: "#e74c3c" },
      { name: "Bellize Hole", value: "#2080b9" },
      { name: "Emareld", value: "#2ecc71" },
      { name: "Midnight Blue", value: "#2c3e50" },
      { name: "Sun Flower", value: "#f1c40f" },
      { name: "Pumpkin", value: "#d35400" }
    ];

    let result = document.getElementById("resultDiv");

    // relative to font-size of the element
    // (2em means 2 times the size of the current font)
    result.innerText = counter;
    if (counter > 0) {
      result.style.fontSize = counter + "em";
    }

    // divide first into second, return the remainder
    // access that element of the colors array to grab the color object
    let remainder = counter % colors.length;
    result.style.color = colors[remainder].value;

    // clear all existing child color divs
    let colorDiv = document.getElementById("colorDiv");
    colorDiv.innerHTML = "";

    // re-add the child color divs
    for (let i = 0; i < colors.length; i++) {
      // creating a node dynamcally with the intent of
      // adding in to the colorDiv
      var node = document.createElement("div");
      var textnode = document.createTextNode(colors[i].name);
      node.appendChild(textnode);
      node.style.backgroundColor = colors[i].value;

      // alternatively these sould have been created ib CSS and style and added that to the node.classList
      node.style.width = "150px";
      node.style.height = "50px";
      node.style.cssFloat = "left";
      node.style.paddingLeft = "10px";
      node.style.paddingTop = "10px";
      node.style.paddingBottom = "0px";
      node.style.margin = "2%";
      node.style.marginBottom = "0";

      if (i == remainder) {
        node.style.height = "45px";

        // example of adding a class to node's classList
        node.classList.add("selected");
      }

      colorDiv.appendChild(node);
    }
  }
  let counter = 0;

  let myButton = document.getElementById("myButton");
  myButton.addEventListener("click", function() {
    incerementCounter();
    updateUI();
  });
  updateUI();
})();

// (function() {
//   function incrementCounter() {
//     counter = counter + 1;
//   }

//   function updateUI() {
//     const colors = [
//       {
//         name: "Alizarin",
//         value: "#e74c3c"
//       },
//       {
//         name: "Belize Hole",
//         value: "#2980b9"
//       },
//       {
//         name: "Emerald",
//         value: "#2ecc71"
//       },
//       {
//         name: "Midnight Blue",
//         value: "#2c3e50"
//       },
//       {
//         name: "Sun Flower",
//         value: "#f1c40f"
//       },
//       {
//         name: "Pumpkin",
//         value: "#d35400"
//       }
//     ];

//     let result = document.getElementById("resultDiv");

//     // Access that element of the colors array to grab the color object.
//     result.innerText = counter;
//     if (counter > 0) {
//       result.style.fontSize = counter + "em";
//     }

//     // Divide first into second, return the remainder
//     // Access that element of the colors array to grab the color object:
//     let remainder = counter % colors.length;
//     result.style.color = colors[remainder].value;

//     // Clear out all existing child color divs
//     let colorDiv = document.getElementById("colorDiv");
//     colorDiv.innerHTML = "";

//     // Re-add the child color divs
//     for (i = 0; i < colors.length; i++) {
//       // Creating a node dynamically with the imtent of adding it to the colorDiv.
//       var node = document.createElement("div");
//       var textnode = document.createTextNode(colors[i].name);
//       node.appendChild(textnode);
//       node.style.backgroundColor = colors[i].value;

//       // Alternatively, I could have made this into a CSS style and added that to the node.classList....
//       node.style.width = "150px";
//       node.style.height = "50px";
//       node.style.cssFloat = "left";
//       node.style.paddingLeft = "10px";
//       node.style.paddingTop = "10px";

//       if (i == remainder) {
//         node.style.height = "45px";

//         // Example of adding a class to the node's classList.
//         node.classList.add("selected");
//       }

//       colorDiv.appendChild(node);
//     }
//   }

//   function handleClick() {
//     incrementCounter();
//     updateUI();
//   }

//   let counter = 0;

//   let myButton = document.getElementById("myButton");
//   myButton.addEventListener("click", function() {
//     incrementCounter();
//     updateUI();
//   });

//   updateUI();
// })();
