var b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;

function setup() {
  createCanvas(400, 400);
  b0=new Building();
  b0.position=0;
  b0.floors=23;
  
  b1=new Building();
  b1.position=1;
  b1.floors=23;
  
  b2=new Building();
  b1.position=2;
  b2.floors=14;
  
  b3=new Building();
  b3.position=3;
  b3.floors=30;
  
  b4=new Building();
  b4.position=4;
  b4.floors=18;
  
  b5=new Building();
  b5.position=5;
  b5.floors=23;
  
  b6=new Building();
  b6.position=6;
  b6.floors=12;
  
  b7=new Building();
  b7.position=7;
  b7.floors=23;
  
  b8=new Building();
  b8.position=8;
  b8.floors=12;
  
  b9=new Building();
  b9.position=9;
  b9.floors=12;
  
  b10=new Building();
  b10.position=10;
  b10.floors=14;
  
  /*b11=new Building();
  b11.position=11;
  b11.floors=18;
  
  b12=new Building();
  b12.position=12;
  b12.floors=22;*/

 
}

function draw() {
  background(0);
  b0.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display()
  b10.display();
//  b11.display()
 // b12.display();
  
}