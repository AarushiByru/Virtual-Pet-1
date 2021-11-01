var dog, happyDog, database,foodS,foodStock

function preload()
{
	dogimage1=loadImage("images/dogImg.png");
  dogimage2=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250);
  dog.addImage(dogimage1)
  dog.scale = 0.25;
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  x = x-1;
  database.ref('/').update({
    Food:x
  })
}

function draw() {  
  background("green");
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
  }
  drawSprites();
  //add styles here

}



