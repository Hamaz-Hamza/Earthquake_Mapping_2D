class Ping {
    constructor(locX, locY, maxRad, col) {
        this.x = locX;
        this.y = locY;
        this.maxRadius = maxRad;
        this.radius = 1;
        this.colour = col;
    }
    
    draw() {
        fill(this.colour);
        noStroke();
        circle(this.x, this.y, this.maxRadius / 2);
        fill(this.colour._getRed(),
            this.colour._getGreen(),
            this.colour._getBlue(),
            mapRange(this.radius, 1, this.maxRadius, 255, 0));
        circle(this.x, this.y, this.radius * 1.2);
        this.radius += this.maxRadius/100;
        if (this.radius > this.maxRadius) this.radius = 1;
    }

    mapRange (value, a, b, c, d) {
        value = (value - a) / (b - a);
        return c + value * (d - c);
    }
}
