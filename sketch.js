
var car,weight,speed,wall;
var road1,road2;
var car_img,car_img1,car_img2,car_img3,wall_img;
var road,road_img;

function preload(){

car_img=loadImage("car4.jpg");
car_img1=loadImage("car1.jpg");
car_img2=loadImage("car2.png");
car_img3=loadImage("car3.png");
wall_img=loadImage("Wall.jpg");
road_img=loadImage("images.jpg");

}


function setup() {
  createCanvas(1600,400);
  road=createSprite(200,200,800,800);
  road.addImage(road_img);
  road.scale=3;
  
  road1=createSprite(800,200,200,200);
  road1.scale=3;
 road1.addImage(road_img);

 road2=createSprite(1400,200,200,200);
 road2.scale=3;
 road2.addImage(road_img);

  car =createSprite(50, 200, 50, 50);
  car.shapeColor="white";
  car.addImage(car_img);

  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="grey";
  wall.addImage(wall_img);



  speed=random(55,90);
  weight=random(400,1500);


car.velocityX=speed;
}

function draw() {
  background("black"); 
  
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5* weight* speed* speed/22509;
    if(deformation>180){
      car.shapeColor=color(255,0,0);
      car.addImage(car_img1);
      car.scale=0.5;
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
      car.addImage(car_img2);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
      car.addImage(car_img3);
    }
  }
  
  drawSprites();
}