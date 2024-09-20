const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;

// Get the color and size inputs
const colorInput = document.getElementById('color');
const sizeInput = document.getElementById('size');

// Start drawing when the mouse is pressed
canvas.addEventListener('mousedown', () => {
    drawing = true;
});

// Stop drawing when the mouse is released or leaves the canvas
canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath(); // Reset the path to prevent continuous drawing between events
});

canvas.addEventListener('mouseout', () => {
    drawing = false;
    ctx.beginPath();
});

// Draw when the mouse is moved
canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!drawing) return;

    ctx.lineWidth = sizeInput.value;
    ctx.lineCap = 'round'; // Make the lines round at the edges
    ctx.strokeStyle = colorInput.value;

    // Get the mouse position relative to the canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Start drawing the line
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y); // Reset the path to start a new line from the current position
}

// Clear the canvas
document.getElementById('clear').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
