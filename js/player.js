class Player{
    constructor(){

    }

    getCount(){
        database.ref('playerCount').on("value", 
        function(data){
            playerCount= data.val();
        })
    }

    updateCount(x){
        database.ref('/').update({
            playerCount:x
        })
    }

    update(y){
        var playerIndex="Player"+playerCount
        database.ref(playerIndex).update({
            name: y
        })
    }
}