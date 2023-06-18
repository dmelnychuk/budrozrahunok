// foundation.js (Shared Module)

let foundationSize = {
    width: 0,
    length: 0,
    thickness: 0,
    depth: 0,
  };
  
  function updateFoundationSize(newFoundationSize) {
    foundationSize = { ...newFoundationSize };
  }
  
  function getFoundationSize() {
    return { ...foundationSize };
  }
  
  export { updateFoundationSize, getFoundationSize };
  