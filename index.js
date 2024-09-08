const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');
const fs = require('fs');

function generateSVG(shape, text, textColor) {
    return `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
}

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter text for the logo (up to 3 characters):',
        validate: input => input.length <= 3 || 'Text must be up to 3 characters.',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hex code):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hex code):',
    },
    ]).then(answers => {
        let shape;
        switch (answers.shape) {
            case 'Circle':
              shape = new Circle();
              break;
            case 'Square':
              shape = new Square();
              break;
            case 'Triangle':
              shape = new Triangle();
              break;
        }
        shape.setColor(answers.shapeColor);
        const svgContent = generateSVG(shape, answers.text, answers.textColor);
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    });
