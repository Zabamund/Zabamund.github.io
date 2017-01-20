var PaddlePlyr1 = function(){
    this.height = 75;
    this.width = 15;
    this.position = [1485, 370];
    this.dirVector = [1, 1];
    this.velocity = [1, 1];
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

PaddlePlyr1.prototype.movePlyrR = function(direction){
    if (direction === 'plyrRUp' && (this.position[1] > 0)) this.position[1] -= 15 * this.dirVector[1];
    if (direction === 'plyrRDown' && (this.position[1] < (canvas.height - this.height))) this.position[1] += 15 * this.dirVector[1];
};
