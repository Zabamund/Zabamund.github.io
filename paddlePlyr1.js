var PaddlePlyr1 = function(){
    this.height = 75;
    this.width = 15;
    this.position = [1485, 370];
    this.dirVector = [1, 1];
    this.velocity = [0, 0];
    this.score = 0;
};

PaddlePlyr1.prototype.renderR = function(ctx){
    ctx.beginPath();
    ctx.rect(this.position[0], this.position[1], this.width, this.height);
    ctx.fillStyle = '#bf42f4';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.stroke();
};

document.addEventListener('keydown', function(event){
    if (event.keyCode === 80){
        myGame.paddlePlyrR.dirVector = [0, -1];
        myGame.paddlePlyrR.startPaddle();
    }
    if (event.keyCode === 76){
        myGame.paddlePlyrR.dirVector = [0, 1];
        myGame.paddlePlyrR.startPaddle();
    }
});

PaddlePlyr1.prototype.startPaddle = function(){
    this.velocity = [0, 5];
};

PaddlePlyr1.prototype.movePlyrR = function(){
    if(this.position[1] < 0){
        this.position[1] = 0;
        this.stopPaddle();
    } else if (this.position[1] > (canvas.height - this.height)){
        this.position[1] = (canvas.height - this.height);
        this.stopPaddle();
    } else {
        this.position[1] += this.velocity[1] * this.dirVector[1];
    }
};

document.addEventListener('keyup', function(event) {
    myGame.paddlePlyrR.stopPaddle();
});

PaddlePlyr1.prototype.stopPaddle = function(){
    this.velocity = [0, 0];
};
