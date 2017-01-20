var Ball = function(){
    this.radius = 7;
    this.position = [50, 250];
    this.dirVector = [1, 1];
    this.color = '#00ff00';
    this.velocity = [5,3];
};

Ball.prototype.render = function(ctx){
    ctx.beginPath();
    ctx.arc(this.position[0], this.position[1], this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
};

Ball.prototype.bounceHorizontal = function() {
    this.dirVector[0] = this.dirVector[0] * -1;
}

Ball.prototype.bounceVertical = function() {
    this.dirVector[1] = this.dirVector[1] * -1;
}

Ball.prototype.move = function(height, width){
    if (this.position[0] < this.radius || this.position[0] > width - this.radius || (this.horizontalBounce === true)){
        this.bounceHorizontal();
    }
    this.position[0] += this.velocity[0] * this.dirVector[0];
    this.velocity[0] = this.velocity[0] + 0.0005;

    if (this.position[1] < this.radius || this.position[1] > height - this.radius || (this.verticalBounce === true)){
        this.bounceVertical();
    }
    this.position[1] += this.velocity[1] * this.dirVector[1];
    this.velocity[1] = this.velocity[1] + 0.0002;
};
