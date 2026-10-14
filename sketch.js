let img;
let y = 0;
let cx = 30;
let cy = 475;
// let cloud = color(25,2,34);
let intensity = 255;

async function setup(){
  createCanvas(950,500);
  background('#FCF3EB');
  sound = await loadSound('media/soundreality-maldives-beach.mp3');
}

// either the lerp or the intensity numbers go out of sync which sucks but also starts
// to feel like an alien planet, so in some ways it still works !
function draw(){
  // feel free to uncomment this to hear it, it sounds terrible and terrifying on my end
  // hopefully it isn't as terrible on your end
  // sound.play();
  let cloud = color(255,255,255);
  cloud.setAlpha(intensity);
  // background('#FCF3EB');
  background(paletteLerp([
    ['#9BD4EB', 0],
    ['#84A4F0', 0.30],
    ['#684DA1', 0.5],
    ['#291740', 1]
  ], millis() / 10000 % 1));
  noStroke();
  fill('#FCF095');
  circle(475, y, 75);
  y+=0.82;
  if(y>height){
    y=0;
    intensity = 255;
  }
  fill('#62B1E3');
  rect(0, 350, 950, 150);
  fill('#E6F0F7');
  rect(0, 350, 950, 15);
  fill('#F0DECE');
  rect(0, 425, 950, 75);
  fill(cloud);
  ellipse(100, 80, 75, 40);
  ellipse(120, 70, 75, 40);
  ellipse(80, 75, 75, 40);
  
  ellipse(700, 80, 75, 40);
  ellipse(730, 70, 75, 40);
  ellipse(690, 75, 75, 40);
  
  ellipse(550, 275, 75, 40);
  ellipse(580, 280, 75, 40);
  ellipse(520, 285, 75, 40);
  
  fill('#634331');
  circle(cx,cy,10);
  cx+= random(0,3);
  cy+= random(-1,1);
  if(cx>width){
    cx=30;
  }

  
  intensity-= 0.8;
  cloud.setAlpha(intensity);
}