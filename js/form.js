class Form{
    constructor(){

    }

    display(){
        var title=createElement("h2")
        title.html("car racing game");
        title.position(130,0)

        var input=createInput("name")
        var button=createButton("CLICK ME");

        input.position(160,170);
        button.position(250,250);

button.mousePressed(function(){
    input.hide();
    button.hide();


    var name=input.value();

    playercount=+1;
    player.update(name);
    player.updateCount(playercount);
    
    var greeting=createElement("h3")
    greeting.html("hello welcome to the game" + name);
    greeting.position(130,160)

})
    }
}