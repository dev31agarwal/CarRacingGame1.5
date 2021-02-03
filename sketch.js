var database, form, gameState=0, playerCount=0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth-10, windowHeight-10);

  form= new Form();
  form.display();
}


