// Define the constant for the number of slices
const SLICE_COUNT = 10;

// Function to set up the pScope configuration
function setup_pScope(pScope) {
  pScope.output_mode(OUTPUT_GIF(1000));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

// Function to set up layers in pScope
function setup_layers(pScope) {
  new PLayer(null, 220);

  // Create a new PLayer for the sun with specific modes and boundaries
  var layer1 = new PLayer(sun);
  layer1.mode(SWIRL(5));
  layer1.set_boundary(200, 1000);

  // Create a new PLayer for sunrays with specific modes and boundaries
  var layer2 = new PLayer(sunrays);
  layer2.mode(RING);
  layer2.set_boundary(0, 200);
}

// Function to draw the sun
function sun(x, y, animation, pScope) {
  // Scale based on animation frame
  scale(animation.frame * 2);

  // Set fill color based on animation frame
  if (animation.frame < 0.33) {
    fill(255, 204, 0); // Yellow
  } else if (animation.frame >= 0.33 && animation.frame < 0.66) {
    fill(255, 153, 51); // Orange
  } else if (animation.frame >= 0.66 && animation.frame < 0.8) {
    fill(255, 102, 0); // Darker Orange
  }

  // Draw the sun rays as a large ellipse
  ellipse(0, 0, 800, 300);
}

// Function to draw sunrays
function sunrays(x, y, animation, pScope) {
  // Calculate angle offset for setting up the background arc
  let angleOffset = (360 / SLICE_COUNT) / 2;
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  // Set stroke color based on animation frame
  if (animation.frame < 0.33) {
    stroke(255, 204, 0); // Yellow
  } else if (animation.frame >= 0.33 && animation.frame < 0.66) {
    stroke(255, 153, 51); // Orange
  } else if (animation.frame > 0.66) {
    stroke(255, 102, 0); // Darker Orange
  }

  // Draw sunrays using lines
  line(x, y, x + 400 * cos(radians(backgroundArcStart)), y + 400 * sin(radians(backgroundArcStart))); // draws sunrays
  line(x, y, x + 400 * cos(radians(backgroundArcEnd)), y + 400 * sin(radians(backgroundArcEnd))); // draws sunrays
}