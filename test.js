<div id="add-buttons"> </div>

<script>
// Create the buttons
const oneTimeButton = document.createElement('button');
oneTimeButton.textContent = 'One-time';
  oneTimeButton.style.border = '4px solid #428bca';
  oneTimeButton.style.borderRadius = '5px';
  oneTimeButton.style.color = '#fff';
  oneTimeButton.style.backgroundColor = '#428bca';


const monthlyButton = document.createElement('button');
monthlyButton.textContent = 'Monthly';
  monthlyButton.style.border = '1px solid #428bca';
  monthlyButton.style.borderRadius = '5px';
  monthlyButton.style.color = '#428bca';
    monthlyButton.style.backgroundColor = '#fff';

// Get the reference element
const referenceElement = document.querySelector("#add-buttons");

// Insert the buttons after the reference element
referenceElement.insertAdjacentElement('afterend', oneTimeButton);
referenceElement.insertAdjacentElement('afterend', monthlyButton);

// Get the elements to be shown/hidden
const greenElement = document.querySelector('#wc_donation_on_shortcode_4325');
const blueElement = document.querySelector('#wc_donation_on_shortcode_4297');

// Function to show the green element and hide the blue element
function showGreenElement() {
  greenElement.style.display = 'block';
  blueElement.style.display = 'none';
}

// Function to hide the green element and show the blue element
function showBlueElement() {
  greenElement.style.display = 'none';
  blueElement.style.display = 'block';
}

// Initial state: Show the green element and hide the blue element
showGreenElement();
// Add click event listeners to the buttons
oneTimeButton.addEventListener('click', function() {
  // Show the green element and hide the blue element
  showGreenElement();
  // Toggle button styles
  oneTimeButton.style.border = '4px solid #428bca';
  oneTimeButton.style.borderRadius = '5px';
  oneTimeButton.style.color = '#fff';
  oneTimeButton.style.backgroundColor = '#428bca';
  monthlyButton.style.border = '1px solid #428bca';
  monthlyButton.style.borderRadius = '5px';
  monthlyButton.style.color = '#428bca';
    monthlyButton.style.backgroundColor = '#fff';
});

monthlyButton.addEventListener('click', function() {
  // Show the blue element and hide the green element
  showBlueElement();
  // Toggle button styles
  monthlyButton.style.border = '4px solid #428bca';
  monthlyButton.style.borderRadius = '5px';
  monthlyButton.style.color = '#fff';
    monthlyButton.style.backgroundColor = '#428bca';
  oneTimeButton.style.border = '1px solid #428bca';
  oneTimeButton.style.borderRadius = '5px';
  oneTimeButton.style.color = '#428bca';
    oneTimeButton.style.backgroundColor = '#fff';
});

</script>