import { calculateConcreteStrip } from './strip.js';
import { calculateConcreteRaft } from './raft.js';


document.getElementById("btn-calculate").addEventListener("click", function() {
    var foundationType = document.querySelector('input[name="foundation"]:checked').value;
    handleFoundationType(foundationType);
  });
  
  function handleFoundationType(foundationType) {
    if (foundationType === 'piles') {
      handlePilesFoundation();
    } else if (foundationType === 'strip') {
      handleStripFoundation();
    } else if (foundationType === 'raft') {
      handleRaftFoundation();
    }
  }
  
  function handlePilesFoundation() {
    console.log('Piles foundation selected');
    // Add your code logic here
  }
  
  function handleStripFoundation() {
    console.log('Strip foundation selected');
    // Add your code logic here
    calculateConcreteStrip();
  }
  
  function handleRaftFoundation() {
    console.log('Raft foundation selected');
    // Add your code logic here
    calculateConcreteRaft();
  }
  

