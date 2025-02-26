let gatito
let gatito2


function preload() {
  // put preload code here
  gatito = loadImage('./images/gatochsm.jpg')
  gatito2 = loadImage('./images/gatochsm.jpg')
}

function setup() {
  // put setup code here
  createCanvas(gatito.width,gatito.height)
  noLoop()
 

}

function draw() {
  // put drawing code here
  background(255)
 // rect(100,100,200,200)
 let numPixeles = 4*gatito.width*gatito.height
 for (let i=0; i <numPixeles; i+=4){
 {
  gatito.pixels[i] = 255-gatito.pixels[i]
  gatito.pixels[i+1] = 255-gatito.pixels[i+1]
  gatito.pixels[i+2] = 255-gatito.pixels[i+2]
 }
 image(gatito2,0,0,300,300)
 
}
}
