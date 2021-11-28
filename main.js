var canvas=document.getElementById("myCanvas")

var ctx=canvas.getContext("2d")

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carX=28
carY=30
carWidth=98
carHeight=200

function add() {
	background_img=new Image()
    background_img.onload=uploadbackground()
    background_img.src=background_image

    greencar_img=new Image()
    greencar_img.onload=uploadgreencar()
    greencar_img.src=greencar_image


}

function uploadbackground() {
	ctx.drawImage(background_img,0,0,canvas.width,canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_img,carX,carY,carWidth,carHeight)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(carY>=0) {
        carY=carY-10
        uploadbackground() 
        uploadgreencar()
    }
}

function down()
{
	if(carY<=600) {
        carY=carY+10
        uploadbackground() 
        uploadgreencar()
    }
}

function left()
{
	if(carX>=0) {
        carX=carX-10
        uploadbackground() 
        uploadgreencar()
    }
}

function right()
{
	if(carX<=1000) {
       carX=carX+10
        uploadbackground() 
        uploadgreencar()
    }
}
