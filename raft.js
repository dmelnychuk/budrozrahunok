// function calculateConcreteRaft() {
//     // Get the input values
//     var width = parseFloat(document.getElementsByName("raftWidth")[0].value);
//     var length = parseFloat(document.getElementsByName("raftLength")[0].value);
//     var thickness = parseFloat(document.getElementsByName("raftThickness")[0].value);
  
//     // Calculate the volume of concrete needed
//     var volume = width * length * thickness;
  
//     // Display the result in the div element
//     var resultDiv = document.querySelector(".result");
//     resultDiv.innerHTML = "Concrete needed: " + volume + " cubic units";
//   }
  
//   document.getElementById("btn-calculate").addEventListener("click", calculateConcreteRaft);
import { updateFoundationSize } from './foundation.js';
import { getFoundationSize } from './foundation.js';

function calculateConcreteRaft() {
  // Get the input values
  var width = parseFloat(document.getElementsByName("raftWidth")[0].value);
  var length = parseFloat(document.getElementsByName("raftLength")[0].value);
  var thickness = parseFloat(document.getElementsByName("raftThickness")[0].value);
  var rebarGap = parseFloat(document.getElementsByName("raftGap")[0].value);

  // Calculate the volume of concrete needed
  var volume = width * length * thickness;

  const raftFoundationSize = {
    fdwidth: width,
    fdlength: length,
    fdthickness: thickness,
  };
  updateFoundationSize(raftFoundationSize);

  console.log(getFoundationSize());

  // Calculate the amount of rebar needed
   // Gap between rebars in meters
  var rebarWidth = Math.ceil(width / rebarGap) + 1; // Number of rebars in width
  var rebarLength = Math.ceil(length / rebarGap) + 1; // Number of rebars in length
  var rebarLayers = Math.ceil(thickness / rebarGap); // Number of rebars in thickness
  var rebarAmount = (rebarWidth * length + rebarLength * width) * rebarLayers;


  // Display the results in the div element
  var resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = "Concrete needed: " + volume + " cubic units<br>";
  resultDiv.innerHTML += "Rebar rebarWidth: " + rebarWidth + " meters<br>";
  resultDiv.innerHTML += "Rebar rebarLength: " + rebarLength + " meters<br>";
  resultDiv.innerHTML += "Rebar rebarLayers: " + rebarLayers + "<br>";
  resultDiv.innerHTML += "Rebar needed: " + rebarAmount + " meters";
}

export { calculateConcreteRaft };

