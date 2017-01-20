var Game = function(){
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ball = new Ball();
    this.paddlePlyrR = new PaddlePlyr1();
    this.paddlePlyrL = new PaddlePlyr2();
    this.gameOverCheck = false;
};

Game.prototype.resetCanvas = function(){
    //the canvas
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    //Left score rectangle
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(650, 20, 100, 50);
    //left score text
    this.ctx.font = 'italic 20pt Calibri';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(this.paddlePlyrL.score, 700, 55);
    //right score rectangle
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(750, 20, 100, 50);
    //rigth score text
    this.ctx.font = 'italic 20pt Calibri';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(this.paddlePlyrR.score, 800, 55);
    // central line
    this.ctx.beginPath();
    this.ctx.moveTo(750, 0);
    this.ctx.lineTo(750, 740);
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = '#ede915';
    this.ctx.stroke();
};

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 38) myGame.paddlePlyrR.movePlyrR('plyrRUp');
    if (event.keyCode === 40) myGame.paddlePlyrR.movePlyrR('plyrRDown');
});

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 87) myGame.paddlePlyrL.movePlyrL('plyrLUp');
    if (event.keyCode === 83) myGame.paddlePlyrL.movePlyrL('plyrLDown');
});

Game.prototype.checkCollisions = function(){
    this.paddleCollision(myGame.paddlePlyrR, myGame.ball);
    this.paddleCollision(myGame.paddlePlyrL, myGame.ball);
};

Game.prototype.paddleCollision = function(paddle, ball){
    var isColliding = false;
    var xAxisCollision = false;
    var yAxisCollision = false;
    var verticalBounce = false;
    var horizontalBounce = false;
    if ((ball.position[0] > (paddle.position[0] - ball.radius) && ball.position[0] < (paddle.position[0] + paddle.width + ball.radius))){
        xAxisCollision = true;
    }
    if ((ball.position[1] > (paddle.position[1] - ball.radius) && ball.position[1] < (paddle.position[1] + paddle.height + ball.radius))){
        yAxisCollision = true;
    }
    if (xAxisCollision && yAxisCollision){
        isColliding = true;
        if(ball.position[0] > paddle.position[0] && ball.position[0] < paddle.position[0] + paddle.width){
            verticalBounce = true;
            ball.bounceVertical();
        };
        if((ball.position[1] > paddle.position[1]) && ball.position[1] < (paddle.position[1] + paddle.height)){
            horizontalBounce = true;
            ball.bounceHorizontal();
        };
    }
};

Game.prototype.countScore = function(){
    if(this.ball.position[0] < this.ball.radius){
        this.paddlePlyrR.score++;
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(0, 0, 750, 740);
    }
    if(this.ball.position[0] > canvas.width - this.ball.radius){
        this.paddlePlyrL.score++;
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(750, 0, 750, 740);
    }
    if(this.paddlePlyrR.score >= 5 && ((this.paddlePlyrR.score - this.paddlePlyrL.score) > 1) ){
        this.gameOver('Right Player');
    }
    if(this.paddlePlyrL.score >= 5 && ((this.paddlePlyrL.score - this.paddlePlyrR.score) > 1) ){
        this.gameOver('Left Player');
    }
};

Game.prototype.gameOver = function(player){
    //GameOverBox
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(500, 200, 500, 100);
    //GameOverText
    this.ctx.font = '20pt Calibri';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('Game over! ' + player + ' player wins', 550, 260);
    this.gameOverCheck = true;
};

Game.prototype.play = function(){
    var game = this;
    this.interval = setInterval(function(){
        game.resetCanvas();
        if(game.gameOverCheck){
            clearInterval(game.interval);
        }
        game.checkCollisions();
        game.ball.move(this.canvas.height, this.canvas.width);
        game.ball.render(game.ctx);
        game.paddlePlyrR.renderR(game.ctx);
        game.paddlePlyrL.renderL(game.ctx);
        game.countScore();
    }, 10);
};

var myGame = new Game();
myGame.play();
