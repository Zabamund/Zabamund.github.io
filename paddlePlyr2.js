var PaddlePlyr2 = function(){
    this.height = 75;
    this.width = 15;
    this.position = [0, 370];
    this.dirVector = [1, 1];
    this.velocity = [0, 0];
    this.score = 0;
};

PaddlePlyr2.prototype.renderL = function(ctx){
    ctx.beginPath();
    ctx.rect(this.position[0], this.position[1], this.width, this.height);
    ctx.fillStyle = '#bf42f4';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'white';
    ctx.stroke();
};

document.addEventListener('keydown', function(event){
    if (event.keyCode === 87){
        myGame.paddlePlyrL.dirVector = [0, -1];
        myGame.paddlePlyrL.startPaddle();
    }
    if (event.keyCode === 83){
        myGame.paddlePlyrL.dirVector = [0, 1];
        myGame.paddlePlyrL.startPaddle();
    }
});

PaddlePlyr2.prototype.startPaddle = function(){
    this.velocity = [0, 5];
};

PaddlePlyr2.prototype.movePlyrL = function(){
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
    myGame.paddlePlyrL.stopPaddle();
});

PaddlePlyr2.prototype.stopPaddle = function(){
    this.velocity = [0, 0];
};
