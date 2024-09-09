const { Circle, Square, Triangle } = require('./shapes');

// Test to ensure Circle class renders correctly
test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
});

// Test to ensure Square class renders correctly
test('Square renders correctly', () => {
    const shape = new Square();
    shape.setColor('red');
    expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />');
});

// Test to ensure Triangle class renders correctly
test('Triangle renders correctly', () => {
    const shape = new Triangle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
});