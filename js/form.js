class Form{
    constructor(){

    }

    display(){
        var title= createElement('h3', 'Car Racing Game');
        title.position(windowWidth/2, windowHeight/2-150);

        var input= createInput('Name');
        input.position(windowWidth/2, windowHeight/2-50);

        var button= createButton('Play');
        button.position(windowWidth/2, windowHeight/2);
        button.mousePressed(
            function(){
                input.hide();
                button.hide();
                var name= input.value();
                var greeting1= createElement('h3');
                greeting1.html("Hello "+name);
                greeting1.position(windowWidth/2, windowHeight/2);

                var greeting2= createElement('h4', 'Wait For Other Players To Join');
                greeting2.position(windowWidth/2, windowHeight/2+50);

                playerCount=playerCount+1;
                player.update(name);
                player.updateCount(playerCount);
            }
        )
    }
}