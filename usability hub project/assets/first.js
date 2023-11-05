// Get the canvas element
const canvas = document.getElementById("canvas");

// Get the 2D rendering context
const ctx = canvas.getContext("2d");

// Set the canvas size to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Listen for clicks on the canvas
canvas.addEventListener("click", function(event) {
  // Get the x and y coordinates of the click
  const x = event.clientX;
  const y = event.clientY;

  // Draw a circle at the click point
  ctx.beginPath();
  ctx.arc(x, y, 50, 0, 2 * Math.PI);
  ctx.fill();
});
Here, the script is using the HTML5 canvas element to create a drawing surface. When the user clicks on the canvas, an event listener is triggered that gets the x and y coordinates of the click, and then uses the canvas 2D rendering context to draw a circle at that point with radius 50px.

You can refresh the page by adding the following code to your javascript

Copy code
window.location.reload();
This will refresh the page and clear the circles when you want.




