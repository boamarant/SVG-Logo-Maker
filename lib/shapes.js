// Base class for all shapes
class Shape {
    constructor() {
        // Holds the color of the shape
        this.color = '';
    }

    // Sets the color of the shape
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    // Returns an SVG representation of a circle
    render() {
        // SVG circle element
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    // Returns an SVG representation of a square
    render() {
        // SVG square element
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    // Returns an SVG representation of a triangle
    render() {
        // SVG triangle element
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square, Triangle };