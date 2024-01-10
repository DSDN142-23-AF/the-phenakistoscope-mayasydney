const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_PRINT(A3));
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 220);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(sun);
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(sunrays);
  layer2.mode( RING );
  layer2.set_boundary( 0, 200 );
}

function sun(x, y, animation, pScope){
  
  scale(animation.frame*2);

  // noticed that animation.frame is just a number between 0-1 so splitting into three parts and getting different colors that way
  console.log(animation.frame)

  if (animation.frame < 0.33) {
    fill(255, 204, 0); // Yellow
  }

  if (animation.frame >= 0.33 && animation.frame < 0.66) {
    fill(255, 153, 51); // Orange
  }

  if ( animation.frame >= 0.66 && animation.frame < 0.8) {
    fill(255, 102, 0); // Darker Orange
  }
  ellipse(0,0,800,300); // draw sun

}

function sunrays(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  if (animation.frame < 0.33) {
    stroke(255, 204, 0); // Yellow
  }

  if (animation.frame >= 0.33 && animation.frame < 0.66) {
    stroke(255, 153, 51); // Orange
  }

  if ( animation.frame > 0.66) {
    stroke(255, 102, 0); // Darker Orange
  }
  line(x, y, x + 400 * cos(radians(backgroundArcStart)), y + 400 * sin(radians(backgroundArcStart))); // draws sunrays
  line(x, y, x + 400 * cos(radians(backgroundArcEnd)), y + 400 * sin(radians(backgroundArcEnd))); // draws sunrays
}