export class drawBackground {
  
  constructor(ctx, x, y, width, height, radius) {
    this.x      = x
    this.y      = y
    this.ctx    = ctx
    this.width  = width
    this.height = height
    this.radius = radius
  }

  draw() {
    this.ctx.beginPath();

    this.ctx.moveTo(this.x + this.radius, this.y);
    this.ctx.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.height, this.radius);
    this.ctx.arcTo(this.x + this.width, this.y + this.height, this.x, this.y + this.height, this.radius);
    this.ctx.arcTo(this.x, this.y + this.height, this.x, this.y, this.radius);
    this.ctx.arcTo(this.x, this.y, this.x + this.width, this.y, this.radius);

    this.ctx.fillStyle = '#CCC'
    this.ctx.fill()
    
    this.ctx.strokeStyle = '#CCC';
    this.ctx.stroke();

    this.ctx.closePath();
  }
}
