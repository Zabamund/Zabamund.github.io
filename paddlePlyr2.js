var PaddlePlyr2 = function(){
    this.height = 75;
    this.width = 15;
    this.position = [0, 370];
    this.dirVector = [1, 1];
    this.velocity = [1, 1];
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

PaddlePlyr2.prototype.movePlyrL = function(direction){
    if (direction === 'plyrLUp' && (this.position[1] > 0)) this.position[1] -= 15 * this.dirVector[1];
    if (direction === 'plyrLDown' && (this.position[1] < (canvas.height - this.height))) this.position[1] += 15 * this.dirVector[1];
};
