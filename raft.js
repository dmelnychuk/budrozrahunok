function calculateConcreteRaft() {
    // Get the input values
    var width = parseFloat(document.getElementsByName("raftWidth")[0].value);
    var length = parseFloat(document.getElementsByName("raftLength")[0].value);
    var thickness = parseFloat(document.getElementsByName("raftThickness")[0].value);
  
    // Calculate the volume of concrete needed
    var volume = width * length * thickness;
  
    // Display the result in the div element
    var resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "Concrete needed: " + volume + " cubic units";
  }
  
  document.getElementById("btn-calculate").addEventListener("click", calculateConcreteRaft);