// Function to move the dodger left
function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
  
    // Get the current left position of the dodger
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // Move dodger to the left, but prevent it from going too far left (0px)
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }
  
  // Function to move the dodger right
  function moveDodgerRight() {
    const dodger = document.getElementById("dodger");
  
    // Get the current left position of the dodger
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // Move dodger to the right, but prevent it from moving past the right edge (assuming a container width of 400px)
    if (left < 360) { // Assuming the container is 400px wide, and dodger is 40px wide
      dodger.style.left = `${left + 10}px`;
    }
  }
  
  // Event listener for keydown events
  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
