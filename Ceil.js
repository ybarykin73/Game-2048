export class Ceil {
  constructor(ctx, x, y, size, gap, radius) {
    this.ctx = ctx
    this.x = gap + x * (size+gap)
    this.y = gap + y * (size+gap)
    this.size = size
    this.size = size
    this.radius = radius
  }

  draw() {
    this.ctx.beginPath();

    this.ctx.moveTo(this.x + this.radius, this.y);
    this.ctx.arcTo(this.x + this.size, this.y, this.x + this.size, this.y + this.size, this.radius);
    this.ctx.arcTo(this.x + this.size, this.y + this.size, this.x, this.y + this.size, this.radius);
    this.ctx.arcTo(this.x, this.y + this.size, this.x, this.y, this.radius);
    this.ctx.arcTo(this.x, this.y, this.x + this.size, this.y, this.radius);

    this.ctx.fillStyle = '#CCC'
    this.ctx.fill()
    
    this.ctx.strokeStyle = '#CCC';
    this.ctx.stroke();

    this.ctx.closePath();
  }
}