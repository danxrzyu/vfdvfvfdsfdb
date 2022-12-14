
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola
var quadrado
var retangulo
var chao
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.




// criando as propriedades do chao
    var chao_options={ isStatic: true }
// criando as propriedades da bola
    var bola_options = { restitution:0.5, friction:0.02, frictionAir:0 }
// criando as propriedades do quadrado
   var quadrado_options = { restitution:0.7, friction:0.01, frictionAir:0.1 }
   // criando as propriedades do retangulo
   var retangulo_options = { restitution:0.01, friction:1, frictionAir:0.3 }

    bola = Bodies.circle(220,10,10,bola_options);
    World.add(world,bola);
	quadrado = Bodies.rectangle(110,50,10,10,quadrado_options);
	World.add(world,quadrado);
	retangulo = Bodies.rectangle(350,50,10,10,retangulo_options);
	World.add(world,retangulo);
	chao= Bodies.rectangle(600,580,1200,2,chao_options);
    World.add(world,chao);
	fill("red");
    rectMode(CENTER); 
    ellipseMode(RADIUS);
  
}


function draw() {
   background("blue");
   Engine.update(engine)
  //criada forma para o chao
   rect(chao.position.x,chao.position.y,1200);
   //criadas formas para todas as partículas 
  ellipse(bola.position.x,bola.position.y,30); 
  rect(quadrado.position.x,quadrado.position.y,50,50) 
  rect(retangulo.position.x,retangulo.position.y,100,50)
  
 
}



