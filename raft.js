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


function calculateConcreteRaft() {
  // Get the input values
  var width = parseFloat(document.getElementsByName("raftWidth")[0].value);
  var length = parseFloat(document.getElementsByName("raftLength")[0].value);
  var thickness = parseFloat(document.getElementsByName("raftThickness")[0].value);

  // Calculate the volume of concrete needed
  var volume = width * length * thickness;


  // Calculate the amount of rebar needed
  var rebarGap = 0.3; // Gap between rebars in meters
  var rebarWidth = Math.ceil(width / rebarGap) + 1; // Number of rebars in width
  var rebarLength = Math.ceil(length / rebarGap) + 1; // Number of rebars in length
  var rebarThickness = Math.ceil(thickness / rebarGap); // Number of rebars in thickness
  var rebarAmount = (rebarWidth * length + rebarLength * width) * rebarThickness;


  // Display the results in the div element
  var resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = "Concrete needed: " + volume + " cubic units<br>";
  resultDiv.innerHTML += "Rebar rebarWidth: " + rebarWidth + " meters<br>";
  resultDiv.innerHTML += "Rebar rebarLength: " + rebarLength + " meters<br>";
  resultDiv.innerHTML += "Rebar rebarThickness: " + rebarThickness + " meters<br>";
  resultDiv.innerHTML += "Rebar needed: " + rebarAmount + " meters";
}

document.getElementById("btn-calculate").addEventListener("click", calculateConcreteRaft);

