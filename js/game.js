class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value", 
        function(data){
            gameState=data.val();
        })
    }

    updateState(x){
        database.ref('/').update({
            gameState:x,
        })
    }
}