import { updateFoundationSize } from './foundation.js';
import { getFoundationSize } from './foundation.js';



function calculateConcreteStrip() {
    // Get the input values
    var width = parseFloat(document.getElementsByName("stripWidth")[0].value);
    var length = parseFloat(document.getElementsByName("stripLength")[0].value);
    var thickness = parseFloat(document.getElementsByName("stripThickness")[0].value);
    var depth = parseFloat(document.getElementsByName("stripDepth")[0].value);
    var rebarGap = parseFloat(document.getElementsByName("stripGap")[0].value);
  
    // Calculate the volume of concrete needed
    var perimeter = 2 * (length + width);

    // Calculate the volume of concrete required for the strip foundation
    var volume = perimeter * thickness * depth;


    const stripFoundationSize = {
      fdwidth: width,
      fdlength: length,
      fdthickness: thickness,
      fddepth: depth,
    };
    updateFoundationSize(stripFoundationSize);
    /////testing
    console.log(getFoundationSize());
    
  
    // Calculate the amount of rebar needed
    // var rebarWidth = Math.ceil(width / rebarGap) + 1; // Number of rebars in width
    var rebarTotalLength = Math.ceil( perimeter * (thickness/rebarGap) * (depth/rebarGap) ) ; // Total length of rebars
    var rebarThickness = Math.ceil(thickness * (perimeter/rebarGap) * (depth/rebarGap) ) ; // Number of rebars in thickness
    var rebarDepth = Math.ceil(depth * (perimeter/rebarGap) * (thickness/rebarGap)) +1; // Number of rebars in thickness
    var rebarAmount = rebarDepth + rebarThickness + rebarTotalLength;



    // Display the results in the div element
    var resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "Concrete needed: " + volume + " cubic units<br>";
    // resultDiv.innerHTML += "Rebar rebarWidth: " + rebarWidth + " meters<br>";
    resultDiv.innerHTML += "Rebar rebarTotalLength: " + rebarTotalLength + " meters<br>";
    resultDiv.innerHTML += "Rebar rebarThickness: " + rebarThickness + " meters<br>";
    resultDiv.innerHTML += "Rebar rebarDepth: " + rebarDepth + " meters<br>";
    resultDiv.innerHTML += "Rebar needed: " + rebarAmount + " meters";
    // resultDiv.innerHTML = "Test Result <br>";

  }
  

export { calculateConcreteStrip };